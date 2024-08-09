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

let defaultYear = new Date().getFullYear().toString();

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

let smoothScrollTo = (elementId) => {
  document.getElementById(elementId)?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};

let scrollToHash = () => {
  let seg = location.href.split("#")[1];
  if (!seg) return;
  let [year, id] = seg.split("-");
  if (id) {
    const scrollToElement = () => {
      const targetElement = document.getElementById(`${year}-${id}`);
      if (targetElement) {
        smoothScrollTo(`${year}-${id}`);
      } else {
        requestAnimationFrame(scrollToElement);
      }
    };
    scrollToElement();
  }
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
    ul.empty();
    res.sort((a, b) => {
      return a.created_at >= b.created_at ? -1 : 1;
    });
    res.forEach((i, index) => {
      let date = new Date(i.created_at).format("yyyy年MM月dd日 hh时mm分");
      let id = res.length - index;
      let item = `<li class="list-group-item" id="${year}-${id}">
        <div class="date">${date}<a href="#${year}-${id}" name=${year}-${id}>#${id}</a></div>
        <div class="content" style="margin-top:5px;">${marked(i.body || "")}</div>
      </li>`;
      ul.append(item);
    });

    scrollToHash();
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
    let cacheKey = `micro-blog-${year}`;
    let cached = localStorage.getItem(cacheKey);
    let cacheDateKey = `${cacheKey}-date`;
    let cacheDate = localStorage.getItem(cacheDateKey);
    
    if (cached && cacheDate && new Date().getTime() - new Date(cacheDate).getTime() < 24 * 60 * 60 * 1000) {
      process(JSON.parse(cached));
      return;
    }

    let path = window.location.pathname.split("/").slice(0, -2).join("/");
    let url = `${path}/micro-blog/${year}.json`;
    $.ajax({
      url: url,
      success: (res) => {
        process(res);
        localStorage.setItem(cacheKey, JSON.stringify(res));
        localStorage.setItem(cacheDateKey, new Date().toISOString());
      },
      error: (jqXHR, textStatus, errorThrown) => {
        if (!cached) processError(jqXHR, textStatus, errorThrown);
      },
    });
  };

  let res = localStorage.getItem(`micro-blog-${year}`);
  if (res) {
    process(JSON.parse(res));
  }
  reqUrlWithProcess();
};

$(() => {
  getActive();

  $('div[id^="20"]').each(function () {
    let year = this.id;
    let observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            getContent(year);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    observer.observe(this);
  });

  scrollToHash();
});