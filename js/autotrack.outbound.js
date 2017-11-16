(function(){var g=window.Element.prototype,k=g.matches||g.matchesSelector||g.webkitMatchesSelector||g.mozMatchesSelector||g.msMatchesSelector||g.oMatchesSelector;function m(a,b){if(a&&1==a.nodeType&&b){if("string"==typeof b||1==b.nodeType)return a==b||n(a,b);if("length"in b)for(var c=0,d;d=b[c];c++)if(a==d||n(a,d))return!0}return!1}function n(a,b){if("string"!=typeof b)return!1;if(k)return k.call(a,b);b=a.parentNode.querySelectorAll(b);for(var c=0,d;d=b[c];c++)if(d==a)return!0;return!1}
function p(a){for(var b=[];a&&a.parentNode&&1==a.parentNode.nodeType;)a=a.parentNode,b.push(a);return b}
function q(a,b,c){function d(a){var d;if(e.composed&&"function"==typeof a.composedPath)for(var h=a.composedPath(),f=0,l;l=h[f];f++)1==l.nodeType&&m(l,b)&&(d=l);else a:{if((d=a.target)&&1==d.nodeType&&b)for(d=[d].concat(p(d)),h=0;f=d[h];h++)if(m(f,b)){d=f;break a}d=void 0}d&&c.call(d,a,d)}var h=document,e={composed:!0,g:!0},e=void 0===e?{}:e;h.addEventListener(a,d,e.g);return{i:function(){h.removeEventListener(a,d,e.g)}}}
function r(a){var b={};if(!a||1!=a.nodeType)return b;a=a.attributes;if(!a.length)return{};for(var c=0,d;d=a[c];c++)b[d.name]=d.value;return b}var t=/:(80|443)$/,u=document.createElement("a"),v={};
function x(a){a=a&&"."!=a?a:location.href;if(v[a])return v[a];u.href=a;if("."==a.charAt(0)||"/"==a.charAt(0))return x(u.href);var b="80"==u.port||"443"==u.port?"":u.port,b="0"==b?"":b,c=u.host.replace(t,"");return v[a]={hash:u.hash,host:c,hostname:u.hostname,href:u.href,origin:u.origin?u.origin:u.protocol+"//"+c,pathname:"/"==u.pathname.charAt(0)?u.pathname:"/"+u.pathname,port:b,protocol:u.protocol,search:u.search}}
function y(a,b,c,d,h,e){if("function"==typeof d){var f=c.get("buildHitTask");return{buildHitTask:function(c){c.set(a,null,!0);c.set(b,null,!0);d(c,h,e);f(c)}}}return z({},a,b)}function A(a,b){var c=r(a),d={};Object.keys(c).forEach(function(a){if(!a.indexOf(b)&&a!=b+"on"){var e=c[a];"true"==e&&(e=!0);"false"==e&&(e=!1);a=B(a.slice(b.length));d[a]=e}});return d}function C(a){function b(){c||(c=!0,a())}var c=!1;setTimeout(b,2E3);return b}
var z=Object.assign||function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];for(var d=0,h=c.length;d<h;d++){var e=Object(c[d]),f;for(f in e)Object.prototype.hasOwnProperty.call(e,f)&&(a[f]=e[f])}return a};function B(a){return a.replace(/[\-\_]+(\w?)/g,function(a,c){return c.toUpperCase()})}var D={j:1,l:2,m:3,s:4,u:5,h:6,v:7,w:8,A:9,o:10},E=Object.keys(D).length;
function F(a){var b=D.h;a.set("\x26_av","2.4.1");var c=a.get("\x26_au"),c=parseInt(c||"0",16).toString(2);if(c.length<E)for(var d=E-c.length;d;)c="0"+c,d--;b=E-b;c=c.substr(0,b)+1+c.substr(b+1);a.set("\x26_au",parseInt(c||"0",2).toString(16))}
function G(a,b){var c=this;F(a);window.addEventListener&&(this.a=z({events:["click"],linkSelector:"a, area",shouldTrackOutboundLink:this.shouldTrackOutboundLink,fieldsObj:{},attributePrefix:"ga-"},b),this.f=a,this.c=this.c.bind(this),this.b={},this.a.events.forEach(function(a){c.b[a]=q(a,c.a.linkSelector,c.c)}))}
G.prototype.c=function(a,b){var c=this;if(this.a.shouldTrackOutboundLink(b,x)){var d=b.getAttribute("href")||b.getAttribute("xlink:href"),h=x(d),h={transport:"beacon",eventCategory:"Outbound Link",eventAction:a.type,eventLabel:h.href},e=z({},this.a.fieldsObj,A(b,this.a.attributePrefix)),f=y(h,e,this.f,this.a.hitFilter,b,a);if(navigator.sendBeacon||"click"!=a.type||"_blank"==b.target||a.metaKey||a.ctrlKey||a.shiftKey||a.altKey||1<a.which)this.f.send("event",f);else{var w=function(){window.removeEventListener("click",
w);if(!a.defaultPrevented){a.preventDefault();var b=f.hitCallback;f.hitCallback=C(function(){"function"==typeof b&&b();location.href=d})}c.f.send("event",f)};window.addEventListener("click",w)}}};G.prototype.shouldTrackOutboundLink=function(a,b){a=a.getAttribute("href")||a.getAttribute("xlink:href");b=b(a);return b.hostname!=location.hostname&&"http"==b.protocol.slice(0,4)};G.prototype.remove=function(){var a=this;Object.keys(this.b).forEach(function(b){a.b[b].i()})};
(function(a,b){var c=window.GoogleAnalyticsObject||"ga";window[c]=window[c]||function(a){for(var b=[],d=0;d<arguments.length;++d)b[d-0]=arguments[d];(window[c].q=window[c].q||[]).push(b)};window.gaDevIds=window.gaDevIds||[];0>window.gaDevIds.indexOf("i5iSjo")&&window.gaDevIds.push("i5iSjo");window[c]("provide",a,b);window.gaplugins=window.gaplugins||{};window.gaplugins[a.charAt(0).toUpperCase()+a.slice(1)]=b})("outboundLinkTracker",G);})();
