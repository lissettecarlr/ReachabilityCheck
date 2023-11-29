"use strict";
var app = {
  success: function (o) {
    var g = o.parentElement;
    var loadTime = Date.now() - window.time;
    (g.textContent = "✓ (" + loadTime + "ms)"), g.parentElement.classList.add("reachable");
  },
  fail: function (o) {
    var g = o.parentElement;
    (g.textContent = "✗"), g.parentElement.classList.add("unreachable");
  },
};

!(function () {
  var bodyHtml = ''
  var rowHtml = document.getElementById('tbody').innerHTML
  var rows = [
    {
      //url: 'https://www.baidu.com',
      url: '百度',
      checkImg: 'https://www.baidu.com/img/PCfb_5bf082d29588c07f842ccde3f97243ea.png'
    },
    {
      //url: 'https://huggingface.co',
      url: 'HuggingFace',
      checkImg: 'https://huggingface.co/front/assets/huggingface_logo-noborder.svg'
    },
    {
      //url: 'https://github.com',
      url: 'Github',
      checkImg: 'https://huggingface.co/front/assets/huggingface_logo-noborder.svg'
    },
    {
      //url: 'https://google.com',
      url: 'Google',
      checkImg: 'https://google.com/textinputassistant/tia.png'
    },
    {
      //url: 'https://www.youtube.com',
      url: 'Youtube',
      checkImg: 'https://www.youtube.com/s/desktop/bd3558ba/img/favicon_32x32.png'
    },
    {
      //url : 'https://www.cloudflare.com/',
      url: 'Cloudflare',
      checkImg: 'https://cf-assets.www.cloudflare.com/slt3lc6tev37/Rb6WR9vSmgEyzSIEFrCCX/7edd51d0c52a3a656192dc104b66de3b/error-illustration-1.svg'
    },
    {
      url: 'openai',
      checkImg: 'https://images.openai.com/blob/7ef54590-0045-4fb6-9f03-9643e08f0d94/stangel-2022-0423.jpg'
    }
  ]
  window.time = Date.now();
  //var time = Date.now()
  rows.forEach(function(row, index) {
    var rowHtmlReplaced = rowHtml.replace(/@@id@@|@@url@@|@@nocache@@|@@checkImg@@/g, function (match) {
      var replacer = {
        '@@id@@': index + 1,
        '@@url@@': row.url,
        '@@nocache@@': '' + window.time + index,
        '@@checkImg@@': row.checkImg
      }
      return replacer[match]
    })
    bodyHtml += rowHtmlReplaced
  })

  document.getElementsByTagName('table')[0].innerHTML += bodyHtml
})()
