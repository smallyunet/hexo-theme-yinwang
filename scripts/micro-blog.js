const fs = require("fs");
const https = require("https");

function httpsRequest(options) {
  return new Promise((resolve, reject) => {
    https
      .get(options, (res) => {
        let chunks = [];
        res.on("data", (chunk) => {
          chunks.push(chunk);
        });
        res.on("end", () => {
          let data = Buffer.concat(chunks);
          let encoding = res.headers["content-type"].split("charset=")[1];
          resolve(data.toString(encoding));
        });
      })
      .on("error", (err) => {
        reject(err);
      });
  });
}

function getIssueComments(issue, owner, repo, page = 1) {
  let options = {
    host: "api.github.com",
    path: `/repos/${owner}/${repo}/issues/${issue}/comments?per_page=100&page=${page}`,
    method: "GET",
    headers: { "user-agent": "node.js" },
  };

  return httpsRequest(options)
    .then(async (data) => {
      if (!data || data === '[]') {
        return [];
      }

      let nextComments = await getIssueComments(issue, owner, repo, page + 1);

      if (nextComments.length > 0) {
        return JSON.parse(data).concat(nextComments);
      }

      return JSON.parse(data);
    })
    .catch((err) => {
      console.log(`[micro-blog] Error with issue ${issue}: `, err);
      return [];
    });
}


hexo.extend.filter.register("before_generate", function () {
  let cmdArg = hexo.env.cmd;
  let yearArgs = hexo.env.args._;
  let themeConfig = hexo.theme.config;

  if (!themeConfig || !themeConfig.github) {
    return;
  }

  let owner = themeConfig.github.owner;
  let repo = themeConfig.github.repo;
  let issueYears = new Set();

  if (cmdArg === 'generate' && yearArgs.length > 0) {
    for (let year of yearArgs) {
      issueYears.add(year);
    }
  } else {
    for (let year of themeConfig.issue_years) {
      issueYears.add(year);
    }
  }

  if (issueYears.size === 0) {
    return;
  }

  let yearPromises = [];

  for (let blog of themeConfig.micro_blogs) {
    let filePath = `./source/micro-blog/${blog.year}.json`;

    let yearPromise = getIssueComments(blog.issue, owner, repo)
      .then((issueData) => {
        if (issueData.length === 0) {
          return;
        }
        return fs.promises.writeFile(
          filePath,
          JSON.stringify(issueData),
          "utf8"
        );
      });

    yearPromises.push(yearPromise);
  }

  return Promise.all(yearPromises)
    .then(() => {
      console.log("[micro-blog] All data saved and merged successfully.");
    })
    .catch((err) => {
      console.log("[micro-blog] Error: ", err);
    });
});