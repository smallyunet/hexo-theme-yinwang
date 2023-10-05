Date.prototype.format = function (fmt) {
  var o = {
    "M+": this.getMonth() + 1,
    "d+": this.getDate(),
    "h+": this.getHours(),
    "m+": this.getMinutes(),
    "s+": this.getSeconds(),
    "q+": Math.floor((this.getMonth() + 3) / 3),
    S: this.getMilliseconds(),
  };
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(
      RegExp.$1,
      (this.getFullYear() + "").substr(4 - RegExp.$1.length)
    );
  }
  for (var k in o) {
    if (new RegExp("(" + k + ")").test(fmt)) {
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length)
      );
    }
  }
  return fmt;
};

let defaultYear = "2023";
var getActive = () => {
  // Set the active tab based on the route
  let seg =
    location.href.split("#").length >= 2
      ? location.href.split("#")[1]
      : defaultYear;
  let seg2 = seg.split("-").length >= 2 ? seg.split("-")[0] : defaultYear;
  let ele = $(`.nav.nav-tabs a[href=#${seg2}]`).parent();
  ele.addClass("active");
  let ele2 = $(`.tab-content #${seg2}`);
  ele2.addClass("active");
};

let clickUrl = () => {
  let seg =
    location.href.split("#").length >= 2
      ? location.href.split("#")[1]
      : defaultYear;
  let arr = seg.split("-");
  if (arr.length < 2) {
    return;
  }
  document.location.href = `#${arr[0]}-${arr[1]}`;
};

var getContent = (year) => {
  // render content
  let ul = $(`.micro-blog .ul-content-${year}`);
  ul.append(`
        <div style="text-align:center;">
            <div class="loadingio-spinner-ripple-8txk08frrfa">
                <div class="ldio-fwkeq5l2tj8"><div></div><div></div></div>
            </div>
        </div>
    `);

  let process = (res) => {
    ul.html(``);
    // order by time
    res.sort((a, b) => {
      return a.created_at >= b.created_at ? -1 : 1;
    });
    let id = res.length;
    res.map((i) => {
      let date = new Date(i.created_at).format("yyyy年MM月dd日 hh时mm分");
      let item = `<li class="list-group-item">`;
      item += `<div class="date">${date}`;
      item += `<a href="#${year}-${id}" name=${year}-${id}>#${id}</a>`;
      item += `</div>`;
      let body = i.body ? i.body : ""; // make sure body not empty
      item += `<div class="content" style="margin-top:5px;">${marked(
        body
      )}</div>`; 
      item += `</li>`;
      ul.append(item);
      id -= 1;
    });
  };

  let processError = (jqXHR, textStatus, errorThrown) => {
    ul.html(`Network error, please refresh the page and try again. <a href="/micro-blog">Click to refresh</a>`);
    let outer = $(".outer");
    outer.append(`
            <br>
            <p style="font-size:85%;">Status: ${textStatus}</p>
            <p style="font-size:85%;">Info: ${errorThrown}</p>
        `);
  };

  let reqUrlWithProcess = () => {
     // Get the current page's path
    let path = window.location.pathname;
    // Split the path and extract all parts except the last one
    let dir = path.split("/").slice(0, -2).join("/");
    // Concatenate the base URL with the request URL
    let url = `${dir}/micro-blog/${year}.json`;
    $.ajax({
      url: url,
      success: (res) => {
        process(res);
        localStorage.setItem(`micro-blog-${year}`, JSON.stringify(res));
      },
      error: (jqXHR, textStatus, errorThrown) => {
        let res = localStorage.getItem(`micro-blog-${year}`);
        if (res == null) {
          processError(jqXHR, textStatus, errorThrown);
        }
      },
    });
  };

  // pre load page content first
  let res = localStorage.getItem(`micro-blog-${year}`);
  if (res) {
    process(JSON.parse(res));
  }
  // then send request
  reqUrlWithProcess();
};

$(() => {
  getActive();
  $('div[id^="20"]').each(function () {
    let year = this.id; 
    getContent(year);
  });
  clickUrl();
});
