function getUrlRelativePath() {
  var url = document.location.toString();
  var arrUrl = url.split("//");

  var start = arrUrl[1].indexOf("/");
  var relUrl = arrUrl[1].substring(start); 

  if (relUrl.indexOf("?") != -1) {
    relUrl = relUrl.split("?")[0];
  }
  return relUrl;
}

function preloadMicroBlog(year, forceReload = false) {
  let cacheKey = `micro-blog-${year}`;
  let cacheDateKey = `${cacheKey}-date`;
  let cached = localStorage.getItem(cacheKey);
  let cacheDate = localStorage.getItem(cacheDateKey);

  if (!cached || forceReload) {
    let url = `/micro-blog/${year}.json`;
    $.get(url, (res) => {
      localStorage.setItem(cacheKey, JSON.stringify(res));
      localStorage.setItem(cacheDateKey, new Date().toISOString());
      console.log(`Data for year ${year} updated and cached`);
    }).fail(() => {
      console.error(`Failed to preload data for year ${year}`);
    });
  } else {
    console.log(`Using cached data for year ${year}`);
  }
}

$(() => {
  document.querySelectorAll("pre code").forEach((block) => {
    hljs.highlightBlock(block);
  });

  const currentYear = new Date().getFullYear();
  for (let year = currentYear; year >= 2020; year--) {
    preloadMicroBlog(year, year === currentYear);
  }
});