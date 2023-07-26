// 获得相对路径
function getUrlRelativePath() {
  var url = document.location.toString();
  var arrUrl = url.split("//");

  var start = arrUrl[1].indexOf("/");
  var relUrl = arrUrl[1].substring(start); //stop省略，截取从start开始到结尾的所有字符

  if (relUrl.indexOf("?") != -1) {
    relUrl = relUrl.split("?")[0];
  }
  return relUrl;
}

function preloadMicroBlog(year) {
  if (getUrlRelativePath() == "/") {
    let url = `/micro-blog/${year}.json`;
    $.get(url, (res) => {
      localStorage.setItem(`micro-blog-${year}`, JSON.stringify(res));
    });
  }
}

// 入口
$(() => {
  // 代码高亮
  document.querySelectorAll("pre code").forEach((block) => {
    hljs.highlightBlock(block);
  });

  // 首页预加载微博内容
  preloadMicroBlog(2020);
  preloadMicroBlog(2021);
  preloadMicroBlog(2022);
  preloadMicroBlog(2023);
});
