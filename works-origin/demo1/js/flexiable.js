!function(e,t){function i(){var t=n.getBoundingClientRect().width;t/s>750&&(t=750*s);var i=t/7.5;n.style.fontSize=i+"px",d.rem=e.rem=i}var a,r=e.document,n=r.documentElement,o=r.querySelector('meta[name="viewport"]'),l=r.querySelector('meta[name="flexible"]'),s=0,m=0,d=t.flexible||(t.flexible={}),c=navigator.userAgent.toUpperCase();if(o){console.warn("将根据已有的meta标签来设置缩放比例");var p=o.getAttribute("content").match(/initial\-scale=([\d\.]+)/);p&&(m=parseFloat(p[1]),s=parseInt(1/m))}else if(l){var u=l.getAttribute("content");if(u){var f=u.match(/initial\-dpr=([\d\.]+)/),v=u.match(/maximum\-dpr=([\d\.]+)/);f&&(s=parseFloat(f[1]),m=parseFloat((1/s).toFixed(2))),v&&(s=parseFloat(v[1]),m=parseFloat((1/s).toFixed(2)))}}if(!s&&!m){var h=e.navigator.userAgent,x=(h.match(/android/gi),!!h.match(/iphone/gi)),b=x&&!!h.match(/OS 9_3/),w=e.devicePixelRatio;m=1/(s=x&&!b?w>=3&&(!s||s>=3)?3:w>=2&&(!s||s>=2)?2:1:1)}if(n.setAttribute("data-dpr",s),!o)if((o=r.createElement("meta")).setAttribute("name","viewport"),o.setAttribute("content","initial-scale="+m+", maximum-scale="+m+", minimum-scale="+m+", user-scalable=no"),n.firstElementChild)n.firstElementChild.appendChild(o);else{var g=r.createElement("div");g.appendChild(o),r.write(g.innerHTML)}c.indexOf("ANDROID")>-1&&n.setAttribute("class","isandroid"),e.addEventListener("resize",function(){clearTimeout(a),a=setTimeout(i,300)},!1),e.addEventListener("pageshow",function(e){e.persisted&&(clearTimeout(a),a=setTimeout(i,300))},!1),"complete"===r.readyState?r.body.style.fontSize=12*s+"px":r.addEventListener("DOMContentLoaded",function(){r.body.style.fontSize=12*s+"px"},!1),i(),d.dpr=e.dpr=s,d.refreshRem=i,d.rem2px=function(e){var t=parseFloat(e)*this.rem;return"string"==typeof e&&e.match(/rem$/)&&(t+="px"),t},d.px2rem=function(e){var t=parseFloat(e)/this.rem;return"string"==typeof e&&e.match(/px$/)&&(t+="rem"),t}}(window,window.lib||(window.lib={})),window.__STOP_FC_INIT__=!0;