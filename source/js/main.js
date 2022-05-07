// 入口
$(() => {
  // 悬浮框
  $('[data-toggle="tooltip"]').tooltip();

  // 代码高亮
  document.querySelectorAll("pre code").forEach((block) => {
    hljs.highlightBlock(block);
  });

});
