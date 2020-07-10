!function(a,b,c,d){"use strict";function e(a){return"."+a}function f(){return[b].concat(Array.prototype.slice.call(arguments,0)).join(d)}function g(){return Array.prototype.slice.call(arguments,0).join(" ")}function h(a,b){return a&&"string"==typeof a&&a.toLowerCase().match(b)}function i(b,c,d,e){var f,g,h,i,j,k={},l='<div data-tag="$1"$2>$3</div>';return b instanceof a?f=a("<div />").append(b):(b=String(b).replace(/<\!doctype[\S\s]*?>/gi,""),b=b.replace(/<!--[\S\s]*?-->/gi,""),b=b.replace(/<meta([\S\s]*?)>/gi,""),b=b.replace(/<(html)([\S\s]*?)>([\S\s]*?)<\/\1>/gi,l),b=b.replace(/<(head|body)([\S\s]*?)>([\S\s]*?)<\/\1>/gi,l),b=b.replace(/<(title)([\S\s]*?)>([\S\s]*?)<\/\1>/gi,l),g=b.match(/<(script)[\S\s]*?<\/\1>/gi),b=b.replace(/<(script)[\S\s]*?<\/\1>/gi,""),f=a("<div>"+b+"</div>")),h=f.find("link, style"),h.length&&h.detach(),e&&(i=f.find(e)),e&&i.length?k.html=i:(j=f.find('[data-tag="body"]'),k.html=j.length?j.contents():f.contents()),k.css=[],d&&h.each(function(){k.css.push(this)}),k.js=[],c&&g&&a.each(g,function(a,b){var c=b.match(/^<script[^>]*?src="([\S\s]*?)"[\S\s]*?>/),d=b.match(/^<script[^>]*?>([\S\s]*?)<\/script>/);c&&c.length&&c[1].length&&k.js.push({src:c[1]}),d&&d.length&&d[1].length&&k.js.push({inline:d[1]})}),k}function j(b){b&&a.isArray(b)&&a.each(b,function(){a('link[href="'+a(this).attr("href")+'"]').length||a("head").append(this)})}function k(b){b&&a.isArray(b)&&a.each(b,function(c){if(this.src){var d=a.ajaxSetup().cache;return a.ajaxSetup({cache:!0}),a('script[src="'+this.src+'"]').remove(),a.getScript(this.src,function(){k(b.slice(c+1,b.length))}),a.ajaxSetup({cache:!!d}),!1}this.inline&&a.globalEval(this.inline)})}function l(a){return xb?function(b,c){b.addClass(g(f(a,kb),f(nb,mb))).one(xb,function(){b.removeClass(g(f(a,kb),f(a,pb),f(nb,mb))),c&&c()}),db(function(){b.addClass(f(a,pb))})}:void 0}function m(a){return xb?function(b,c,d,e){b.addClass(g(f(nb,mb),f(a,jb),f(a,e))),c.addClass(f(a,ob,jb,kb)).one(xb,function(){c.removeClass(g(f(a,ob,jb,kb),f(a,ob,jb,pb))),d.addClass(f(a,nb,jb,pb))}),d.addClass(f(a,nb,jb,kb)).one(xb,function(){d.removeClass(g(f(a,nb,jb,kb),f(a,nb,jb,pb))),b.removeClass(g(f(nb,mb),f(a,jb),f(a,e)))}),db(function(){c.addClass(f(a,ob,jb,pb))})}:void 0}function n(b,c,e,f){var g,h=null;return a.isArray(c)||(c=[c]),f||(f=b.triggerOptions||{}),g=a.camelCase(c.join(d)),"undefined"!=a.type(f[g])?f[g]:(!e&&b.data&&1==b.data.length&&(e=b.data[0].type.type),e&&(h=o(b.options,[e].concat(c))),null===h&&(h=o(b.options,c)),h)}function o(b,c){return a.each(c,function(a,c){return b.hasOwnProperty(c)?void(b=b[c]):(b=null,!1)}),b}function p(b,c,d,e){var f=!1;return a.each(gb,function(){return(this.type==e||c&&this.test&&this.test(c,d))&&(f=this,!e||this.type==e)?!1:void 0}),f}function q(b,c){var d,e,f=n(b,"texts",null,c.options)||{},g=[];return n(b,"title",null,c.options)&&(d=c.$el.attr("title"),d&&(f.title=d)),a.each(f,function(a,b){b&&(e=b.tag?b.tag:"p",d=b.text?b.text:b,g.push("<"+e+' class="'+a+'">'+d+"</"+e+">"))}),g}function r(a,b){var c=b.type.type;return{html:n(a,["tmpl","loadingerror"],c).replace(/\{\{ error \}\}/g,n(a,[ib,"error"],c,b.options)),error:!0}}function s(b,c){var d;c?(a.isPlainObject(c)&&b.data.push(c),a.isArray(c)&&(1===c.length?b.data=b.data.concat(c):3===c.length&&a.isArray(c[1])&&a.isArray(c[2])?(b.data=b.data.concat(c[1]),b.data.push(c[0]),b.data=b.data.concat(c[2]),b.index=c[1].length):b.data=b.data.concat(c)),a.each(b.data,function(a,c){c=t(b,c)})):(c=t(b,b.$el),U(b,c.options.group),b.$group&&b.$group.length&&(c=[c,[],[]],d=b.$group.index(b.$el),b.index=d,b.$group.each(function(e,f){var g,h=a(f);d>e?g=1:e>d&&(g=2),f=t(b,h),g&&c[g].push(f)})),s(b,c))}function t(b,c){var d,e,f,g,h,i;return a.isPlainObject(c)?"string"==a.type(c.type)&&(c.type=p(b,null,c.options,c.type)):(d=a(c),f=d.data()||{},g={},h=b.prefixCC.length,a.each(f,function(a,c){b.prefixCC==a.slice(0,h)&&(a=a.replace(b.prefixCC,""),a=a.charAt(0).toLowerCase()+a.slice(1),g[a]=c)}),e=p(b,d,g,n(b,"force",null,g)),c=e.init(b,d,g),c.$el=d,c.options=g,i=q(b,c),i.length&&(c.texts=i)),c}function u(b,c){return c&&"number"==a.type(c)?b.getSlides().eq(c):b.$lb.find(e(sb))}function v(b,c){var d,e=a.Deferred();return e.promise(d),c.type.content(b,e,c),e}function w(b,c,d,g){J(b,"filter",d),c.children(e(f(jb,"content"))).empty().append(d.html),g.texts&&g.texts.length&&c.append(a(n(b,["tmpl","texts"],g.type.type)).append(g.texts.join())),N(c),j(d.css),k(d.js)}function x(b,c){var d,g,h;s(b,c),b.$el?(b.$el.is("label")&&(d=b.$el.attr("for")),d&&(g=a("#"+d),h=g.next(e(f())),g.length&&g.is('input[type="checkbox"]')&&h.length&&(b.$cb=g,b.$lb=h)),C(b,h&&h.length,!(b.$el.is("label")&&g.is("#"+b.$el.attr("for")))),location.hash.substr(1)==b.$el.attr("id")&&b.$el.trigger(n(b,"trigger"))):y(b)}function y(c,g){var h;c.id=b+d+ +new Date,h=a(n(c,["tmpl","lb"]).replace(/ID/g,c.id).replace(/\{\{ close \}\}/g,n(c,[ib,"close"]))),c.$wrap=h,c.$cb=h.find(e(f("switch"))),c.$lb=h.find(e(b)),c.$lb.addClass(n(c,"theme")),xb&&c.$lb.addClass(f(nb,mb)),P(c),g&&n(c,"inline")?h.insertAfter(g||this.$el):h.appendTo("body"),C(c,!0,!!c.$el)}function z(a){return a.$cb.is(":checked")}function A(a,b){a.$cb.prop("checked",b)}function B(a){z(a)?J(a,"beforeopen")===!1?A(!1):D(a):J(a,"beforeclose")===!1?A(!0):F(a)}function C(c,d,g){var h=n(c,"trigger"),i=n(c,"backgroundclose");d?(g&&c.$el.on(h+"."+b,function(a){a.preventDefault(),c.getSlides().length>1&&$(c,c.$group?c.$group.index(c.$el):0,!0,!0),c.toggle()}),c.$cb.on("change."+b,function(){c.toggle()}),c.$lb.on(hb+"."+b,e(f("close")),function(b){(i||!a(b.target).hasClass(f("bg","close")))&&c.close()})):c.$el.on(h+"."+b,function(d){d.preventDefault(),c.$group&&c.$group.length&&(a.each(c.$group,function(d,e){var g=a(e).data(f(b));return g&&g.$lb&&g.$lb.length?(c.$cb=g.$cb,c.$lb=g.$lb,H(c),C(c,!0,!0),$(c,c.$group.index(c.$el),!0,!0),c.opening(),!1):void 0}),c.$lb&&c.$lb.length)||(H(c),y(c,c.$el),c.open())})}function D(b){b.scrollTop=a(document).scrollTop(),b.activeElement=document.activeElement,bb.hasClass(qb)?b.bodyWidth=!1:(b.bodyWidth=bb.prop("style").width,bb.css({width:bb.width()}).addClass(f("open"))),b.$lb.find(e(sb)+">"+e(f(jb,"content"))).is(":empty")?I(b,u(b),b.data[b.index],!0,!0):E(b)}function E(a){n(a,"openfullscreen")&&Q(a),n(a,"contentclose")||a.$lb.addClass(f("no","content","close")),M(a),K(a,"open",[a.$lb]),L(a,"open"),S(a),_(a),a.$lb.find(e(f("content"))).focus(),J(a,"afteropen")}function F(b){L(b,"close"),K(b,"close",[b.$lb,function(){G(b)}]),O(b),T(b),ab(b),b.$lb.removeClass(f("show")),a("html, body").scrollTop(b.scrollTop)}function G(b){R(b),!1!==b.bodyWidth&&(bb.removeClass(f("open")).prop("style").width=b.bodyWidth),xb&&b.$lb.addClass(f(nb,mb)),a(b.activeElement).focus(),n(b,"removeonclose")&&(b.$wrap.remove(),H(b),b.$el&&C(b)),J(b,"afterclose")}function H(a){a.$el&&a.$el.off(n(a,"trigger")+"."+b),a.$cb&&a.$cb.off("change."+b)}function I(b,c,d,e,g){var h=a.extend({},d);h.type=d.type.type,L(b,"loading",c),c.addClass(wb).data("el",h),v(b,d).done(function(a){c.addClass(f(jb,d.type.type)).removeClass(wb),w(b,c,a,d),L(b,"loaded",c),e&&E(b),g&&V(b)})}function J(b,c,d){return(c=n(b,"on"+c))?("string"==a.type(c)&&self[c]&&(c=self[c]),d=d?a.isArray(d)?d.unshift(b):[b,d]:b,a.isFunction(c)?c.apply(null,d):void 0):void 0}function K(b,c,d){var e;return xb&&(e=n(b,[mb,c]),"string"==a.type(e)&&(yb[e]?e=yb[e]:self[e]&&(e=self[e])),e&&a.isFunction(e))?e.apply(null,d):void(a.isFunction(d[d.length-1])&&d[d.length-1]())}function L(a,b,c){var d=a.data[a.index];c||(c=u(a)),d.type[b]&&d.type[b](a,c),J(a,jb+b,c)}function M(b){var c,d=function(c){b.getSlides().each(function(){N(a(this),c)})};fb.on("resize."+b.id,function(){clearTimeout(c),c=setTimeout(function(){d(fb.height())},200)})}function N(a,b){var c,d=a.children(),g=a.css("maxHeight"),h=parseInt(a.css("paddingTop"),10)+parseInt(a.css("paddingBottom"),10)+parseInt(d.css("paddingTop"),10)+parseInt(d.css("paddingBottom"),10)+a.find(e(f("texts"))).height();(!g||g.indexOf("%")<0)&&(c=a.clone().removeAttr("style").hide().insertAfter(a),g=c.css("maxHeight"),c.remove()),g=(b||fb.height())*parseInt(g,10)/100,a.css("maxHeight",g),a.find(e(f("media","img"))).css("maxHeight",g-h)}function O(a){fb.off("resize."+a.id)}function P(b){n(b,"fullscreen")&&b.$lb.find(e(vb)+'[data-placeholder="fullscreen-toggle"]').replaceWith(a(n(b,["tmpl","fullscreen"]).replace(/\{\{ fullscreen \}\}/g,n(b,[ib,"fullscreen"]))).on(hb,function(){b.$lb.hasClass(tb)?R(b):Q(b)}))}function Q(a){a.$lb.hasClass(tb)||(a.$lb.addClass(tb),J(a,"fullscreen"))}function R(a){a.$lb.hasClass(tb)&&(a.$lb.removeClass(tb),J(a,"fullscreenoff"))}function S(b){var c=n(b,"nextkeys"),d=n(b,"prevkeys"),e=n(b,"closekeys"),f="input, select, textarea, [contenteditable]",g=n(b,"backgroundclose");eb.on("keydown."+b.id,function(h){var i,j,k;9==h.keyCode&&(i=b.$lb.find(f+", button, [tabindex]").filter(":visible").filter(function(b,c){return k=a(c),!k.is("[tabindex]")||k.attr("tabindex")>-1}),j=i.index(document.activeElement),h.shiftKey&&1>j&&(i.last().focus(),h.preventDefault()),!h.shiftKey&&(0>j||j>=i.length-1)&&(i.first().focus(),h.preventDefault())),a(h.target).is(f)||(a.inArray(h.keyCode,c)>-1&&($(b,b.index+1),h.preventDefault()),a.inArray(h.keyCode,d)>-1&&($(b,b.index-1),h.preventDefault()),g&&a.inArray(h.keyCode,e)>-1&&b.close())})}function T(a){eb.off("keydown."+a.id)}function U(b,c){var d=[];c&&(d=a("[data-"+b.prefix+'group="'+c+'"]'),d.length<2&&(d=[])),b.$group=d}function V(a){a.data.length>1&&(W(a),Y(a),Z(a))}function W(b){var c,d,e=u(b),g=b.index,h=a(n(b,["tmpl",jb])),i=n(b,"preload");a.isNumeric(i)?c=d=i:a.isArray(i)?(c=a.isNumeric(i[0])?i[0]:1,d=a.isNumeric(i[1])?i[1]:c):c=d=1,b.loadPrev=c,b.loadNext=d,b.loop=n(b,"loop"),a.each(b.data,function(a,b){var c="after",d=h.clone().addClass(f(jb,b.type.type));a!=g&&(g>a&&(c="before"),e[c](d),a>g&&(e=d))}),X(b,g)}function X(b,c){var d=c-b.loadPrev,g=c+b.loadNext,h=b.getSlides(),i=[];for(d+h.length<0&&(d=-(h.length-1)),g-h.length>=h.length&&(g=h.length);g>=d;d++){if(c=d,0>c){if(!b.loop)continue;c=h.length+c}if(c>=h.length){if(!b.loop)continue;c-=h.length}-1==i.indexOf(c)&&i.push(c)}a.each(i,function(a,c){var d=h.eq(c),g=b.data[c];d.children(e(f(jb,"content"))).is(":empty")&&!d.hasClass(wb)&&I(b,d,g)})}function Y(b){var c=a(n(b,["tmpl","control"]).replace("{{ previous }}",n(b,[ib,"previous"])).replace("{{ next }}",n(b,[ib,"next"])));c.find(e(f("control","next"))).on(hb,function(){$(b,b.index+1)}).end().find(e(f("control","prev"))).on(hb,function(){$(b,b.index-1)}),b.$lb.find(e(vb)+'[data-placeholder="control"]').replaceWith(c)}function Z(b){if(n(b,"pager")){var c=a(n(b,["tmpl","pager"])),d=c.children(e(f("pager","list"))),g=n(b,["tmpl","pagerItem"]),h=n(b,"pagergallery");h?(b.$lb.addClass(f("has","pager","gallery")),c.addClass(f("pager","gallery"))):b.$lb.addClass(f("has","pager")),a.each(b.data,function(c,e){var f,i=a(g.replace("{{ count }}",c+1));b.index==c&&i.addClass(ub),h&&(f="url("+(b.data[c].pagerimage||n(b,"pagerimage",e.type.type,e.options))+")",i.css({backgroundImage:f})),d.append(i)}),c.on(hb,e(f("pager","item")),function(){b.showSlide(a(this).index())}),b.$lb.find(e(vb)+'[data-placeholder="pager"]').replaceWith(c),b.$pager=c,b.$pagerList=d}}function $(a,b,c,d){var g,h,i,j;if(g=a.index<b?"next":"prev",c||b!=a.index&&!a.$lb.hasClass(f(nb,mb))){if(h=a.getSlides(),0>b){if(!a.loop)return!1;b=h.length-1}if(b>=h.length){if(!a.loop)return!1;b=0}return a.index=b,a.$pager&&(i=a.$pagerList.children().removeClass(ub).eq(b).addClass(ub),a.$pagerList.animate({scrollLeft:"+="+(i.position().left-a.$pager.width()/2+parseInt(i.css("marginLeft"),10)+i.outerWidth()/2)})),i=h.filter(e(sb)),j=h.eq(b),j.is(":empty")&&I(a,j,a.data[b],c),c||K(a,jb,[a.$lb,i,j,g]),d||(L(a,"close",i),L(a,"open",j)),i.removeClass(sb),j.addClass(sb),X(a,b),!0}}function _(a){var c,d,g,h=n(a,"enableswipe");h&&(c=n(a,"maxswipeduration"),d=n(a,"minswipex"),g=n(a,"maxswipey"),a.$lb.find(e(f("content"))).on("touchstart."+b,function(){var b,e,f;eb.on("touchmove."+a.id,function(c){var d=c.originalEvent.touches;d.length<2?(e={x:d[0].screenX,y:d[0].screenY},b||(b=e)):eb.trigger("touchend."+a.id)}).on("touchend."+a.id,function(c){var h=1;b&&e&&c.originalEvent&&0===c.originalEvent.touches.length&&Math.abs(b.x-e.x)>d&&Math.abs(b.y-e.y)<g&&(b.x<e.x&&(h=-1),$(a,a.index+h)),eb.off("touchmove."+a.id+" touchend."+a.id),clearTimeout(f)}),f=setTimeout(function(){eb.trigger("touchend."+a.id)},c)}))}function ab(a){a.$lb.find(e(f("content"))).off("touchstart."+b)}var bb,cb,db=self.setImmediate||function(a){setTimeout(a,0)},eb=a(document),fb=a(self),gb=[{type:"image",test:function(a,b){return h(b.href||a[0].href,/\.(png|jpe?g|gif|webp)$/)},init:function(a,b,c){var d,e=c.href||b[0].href;return c.zoom?(d={factor:n(a,"zoomfactor",this.type,c)},d.src=this.test(null,{href:c.zoom})?c.zoom:e):d=!1,{src:e,alt:c.alt,zoom:d,type:this}},content:function(b,c,d){var e=a('<img src="'+d.src+'"'+(d.alt?' alt="'+d.alt+'"':"")+' class="'+f("media","img")+'" style="background-image:url('+d.src+')">'+(d.zoom?'<button type="button" class="'+f("zoom")+'"><span class="'+f("hidden")+'"'+n(b,[ib,"zoom"],this.type,d.options)+"</span></button>":"")),g=function(){c.resolve({html:e})},h=function(){c.resolve(r(b,d))},i=new Image;i.onload=g,i.onerror=h,i.onabort=h,i.src=d.src},open:function(b,c){var d=c.data("el"),e=d?d.zoom:!1;e&&c.on("click.zoom",".bb-lightbox-slide-content",function(d){function f(a,b){a=(a-g.left)/h,b=(b-g.top)/i,0>a?a=0:a>100&&(a=100),0>b?b=0:b>100&&(b=100),k.css({backgroundPosition:a+"% "+b+"%"})}var g,h,i,j,k,l,m=a(this).find(".bb-lightbox-media-img"),n=c.data("closeZoom");a.isFunction(n)?(n(),L(b,"zoomoff")):(g=m.offset(),h=m.outerWidth()/100,i=m.outerHeight()/100,a.isNumeric(e.factor)&&e.factor>1&&(j=[100*e.factor+"%","auto"],l=new Image,l.onload=function(){h/i<l.width/l.height&&(j=j.reverse()),k.css({backgroundSize:j.join(" ")})},l.src=e.src),k=a('<div class="bb-lightbox-zoomed" />').css({backgroundImage:"url("+e.src+")"}).insertAfter(m),c.on("mousemove.zoom",function(a){f(a.pageX,a.pageY)}),f(d.pageX,d.pageY),c.data("closeZoom",function(){c.off("mousemove.zoom").data("closeZoom",!1),k.remove()}),L(b,"zoom"))})},close:function(b,c){var d;c.data("el").zoom&&(c.off(".zoom"),d=c.data("closeZoom"),a.isFunction(d)&&(d(),L(b,"zoomoff")))}},{type:"video",test:function(a,b){return b.videos||h(b.href||a[0].href,/\.(mp4|webm|ogv|swf)$/)},init:function(a,b,c){var d=c.videos;return d||(d=[c.href||b[0].href]),{videos:d,type:this}},content:function(b,c,d){function e(a,b){return'<source src="'+a+'" type="'+b+'" />'}var g,h=this.type,i=a(),j=!1,k=n(b,"width",h,d.options),l=n(b,"height",h,d.options);a.each(d.videos,function(c,f){switch(f.split(".").pop()){case"mp4":i=i.add(a(e(f,"video/mp4")));break;case"webm":i=i.add(a(e(f,"video/webm")));break;case"ogv":i=i.add(a(e(f,"video/ogg")));break;case"swf":j=n(b,["tmpl","flash"]).replace(/{{ video }}/g,f).replace(/{{ poster }}/g,n(b,"poster",h,d.options)||"")}}),i.length&&(g=a(n(b,["tmpl","video"]).replace("{{ poster }}",d.poster||"")),i.each(function(){g.append(this)})),g=a('<div class="'+f("media","container")+'"></div>').append(g),j&&g.data("flash",j),c.resolve({html:g.css({width:k,paddingTop:(""+l/k*100).substr(0,5)+"%"})})},open:function(a,b){var c=b.find("video"),d=b.find(e(f("media","container"))),g=d.data("flash");c.length&&c[0].play?(c[0].currentTime&&(c[0].currentTime=0),c[0].play(),g&&c.append(g)):g&&d.append(g)},close:function(a,b){var c=b.find("video");c.length&&c[0].pause&&c[0].pause(),b.find("object").remove()}},{type:"iframe",test:function(b,c){var d=c.href||b[0].href;return d?a("<a>").attr("href",d)[0].host!=location.host:!1},init:function(a,b,c){return{src:c.href||b[0].href,type:this}},content:function(b,c,d){var e=this.type,f=(n(b,"closehidden",e,d.options)?"data-":"")+'src="'+d.src+'"',g=a(n(b,["tmpl","iframe"]).replace("{{ src }}",f)),h=n(b,"width",e,d.options),i=n(b,"height",e,d.options),j={width:h};n(b,"proportional",e,d.options)?j.paddingTop=(""+i/h*100).substr(0,5)+"%":j.height=i,c.resolve({html:g.css(j)})},setSrc:function(a,b){var c=a.find(e(f("media","iframe")));c.data("src")&&c.attr("src",b?"":c.data("src"))},open:function(a,b){this.setSrc(b)},close:function(a,b){this.setSrc(b,!0)}},{type:"ajax",test:function(b,c){var d,e,f,g=c.href||b[0].href;return g?(d=location.host,e=a("<a>").attr("href",g)[0],f=e.host,location.port||(f=f.replace(":"+e.port,"")),f==d):!1},init:function(a,b,c){return{src:c.href||b[0].href,type:this}},content:function(b,c,d){var e=this.type;a.ajax({url:d.src}).done(function(a){a=i(a,n(b,"loadjs",e,d.options),n(b,"loadcss",e,d.options),n(b,"selector",e,d.options)),c.resolve(a)}).fail(function(){c.resolve(r(b,d))})}},{type:"html",test:function(){return!0},init:function(a,b,c){var d,g=c.content;return!g&&b[0].href&&(d=b[0].href.replace(location.href,""),0===d.indexOf("#")&&(g=d)),g||(g=b.find(e(f("htmlcontent"))).first()),{content:g,type:this}},content:function(b,c,d){var e=this.type,f=a(d.content);a.contains(document.documentElement,f[0])&&(f=f.clone(n(b,"copyevents",e,d.options)).contents()),c.resolve(f.length?i(f,n(b,"loadjs",e,d.options),n(b,"loadcss",e,d.options),n(b,"selector",e,d.options)):r(b,d))}},{type:"modal",test:function(){return!1},init:function(a,b,c){var d,e={type:this};if(d=c.alert)e.kind="alert";else if(d=c.confirm)e.kind="confirm";else{if(!(d=c.prompt))return e;e.kind="prompt"}return e.message=d,e},content:function(b,c,d){function g(a){J(b,"modal",{kind:d.kind,message:d.message,val:a}),n(b,"closesubmit",i,d.options)&&b.close()}var h,i=this.type,j=n(b,["tmpl",d.kind]);return j?(h=a("<div />").addClass(f("modal")+" "+f(d.kind)).append(j.replace("{{ message }}",d.message).replace("{{ ok }}",n(b,[ib,d.kind,"ok"],i,d.options)).replace("{{ cancel }}",n(b,[ib,d.kind,"cancel"],i,d.options))),"alert"==d.kind&&h.find(e(f(d.kind,"ok"))).on(hb,function(){g()}),"confirm"==d.kind&&h.find(e(f(d.kind,"ok"))).on(hb,function(){g(!0)}).end().find(e(f(d.kind,"cancel"))).on(hb,function(){g(!1)}),"prompt"==d.kind&&h.find(e(f(d.kind,"ok"))).on(hb,function(){g(h.find(e(f(d.kind,"input"))).val())}).end().find(e(f(d.kind,"cancel"))).on(hb,function(){g(null)}),void c.resolve({html:h})):void c.resolve(r(b,d))}}],hb="click",ib="translation",jb="slide",kb="start",lb="active",mb="transition",nb="in",ob="out",pb="do",qb=f("open"),rb=f(jb),sb=f(jb,lb),tb=f("mode","fullscreen"),ub=f("pager",lb),vb=f("placeholder"),wb=f("loading"),xb=function(){var a={transition:"transitionend",WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend"};for(var b in a)if(void 0!==(document.head||document.getElementsByTagName("head")[0]).style[b])return a[b];return!1}(),yb={fadein:l("fadein"),fadeout:l("fadeout"),slideintop:l(jb+"intop"),slideouttop:l(jb+"outtop"),slideinright:l(jb+"inright"),slideoutright:l(jb+"outright"),slideinbottom:l(jb+"inbottom"),slideoutbottom:l(jb+"outbottom"),slideinleft:l(jb+"inleft"),slideoutleft:l(jb+"outleft"),flipin:l("flipin"),flipout:l("flipout"),flipinv:l("flipinv"),flipoutv:l("flipoutv"),growin:l("growin"),growout:l("growout"),shrinkin:l("shrinkin"),shrinkout:l("shrinkout"),fadeslide:m("fade"),slideslide:m(jb),slideslidev:m(jb+"v"),flipslide:m("flip"),flipslidev:m("flipv"),shrinkslide:m("shrink")},defaults={dataprefix:"bblb-",trigger:hb,theme:"standard",contentclose:!0,backgroundclose:!0,removeonclose:!1,tmpl:{lb:'<div class="'+f("wrap")+'"><input type="checkbox" class="'+g(f("switch"),f("hidden"))+'" id="'+f("ID")+'" tabindex="-1"><div class="'+f()+" "+f("js")+'"><div class="'+f("cell")+'"><div class="'+g(f("bg","close"),f("close"))+'" for="'+f("ID")+'"><span class="'+f("hidden")+'">{{ close }}</span></div><div class="'+f("content")+'" tabindex="0" role="dialog"><div class="'+f("slides")+'"><div class="'+g(rb,sb)+'"><div class="'+f(jb,"content")+'"></div></div></div><span class="'+vb+'" data-placeholder="control"></span><span class="'+vb+'" data-placeholder="pager"></span><div class="'+f("options")+'"><span class="'+vb+'" data-placeholder="fullscreen-toggle"></span><button class="'+g(f("option-button"),f("content-close"),f("close"))+'"><span class="'+f("hidden")+'">{{ close }}</span></button></div></div></div></div></div>',slide:'<div class="'+rb+'"><div class="'+f(jb,"content")+'"></div></div>',texts:'<div class="'+f("texts")+'"></div>',loadingerror:'<p class="'+f("error")+'">{{ error }}</p>',fullscreen:'<button class="'+f("option-button")+" "+f("fullscreen")+'"><span class="'+f("hidden")+'">{{ fullscreen }}</span></button>',flash:'<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" class="'+f("media","flv")+'" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab"><param name="movie" value="{{ video }}" /><param name="loop" value="false"><param name="bgcolor" value="#ffffff" /><param name="wmode" value="transparent" /> <embed type="application/x-shockwave-flash" class="'+f("media","flv")+'" src="{{ video }}" pluginspage="http://www.macromedia.com/go/getflashplayer" name="Web" bgcolor="#ffffff" wmode="transparent"></embed></object>',video:'<video class="'+f("media","vid")+'" poster="{{ poster }}" preload controls />',iframe:'<div class="'+f("media","container")+'"><iframe class="'+f("media","iframe")+'" {{ src }} frameborder="0" allowfullscreen></iframe></div>',alert:'<p class="'+f("modal","message")+" "+f("alert","message")+'">{{ message }}</p><button type="button" class="'+f("modal","ok")+" "+f("alert","ok")+'">{{ ok }}</button>',confirm:'<p class="'+f("modal","message")+" "+f("confirm","message")+'">{{ message }}</p><button type="button" class="'+f("modal","cancel")+" "+f("confirm","cancel")+'">{{ cancel }}</button><button type="button" class="'+f("modal","ok")+" "+f("confirm","ok")+'">{{ ok }}</button>',prompt:'<p class="'+f("modal","message")+" "+f("prompt","message")+'">{{ message }}</p><label class="'+f("prompt","input","container")+'"><input type="text" class="'+f("prompt","input")+'"></label><button type="button" class="'+f("modal","cancel")+" "+f("prompt","cancel")+'">{{ cancel }}</button><button type="button" class="'+f("modal","ok")+" "+f("prompt","ok")+'">{{ ok }}</button>',control:'<div class="'+f("control")+'"><button class="'+f("control","next")+'"><span class="'+f("hidden")+'">{{ next }}</span></button><button class="'+f("control","prev")+'"><span class="'+f("hidden")+'">{{ previous }}</span></button></div>',pager:'<div class="'+f("pager")+'"><ol class="'+f("pager","list")+'"></ol></div>',pagerItem:'<li class="'+f("pager","item")+'"><button type="button" class="'+f("pager","button")+'"><span class="'+f("hidden")+'">{{ count }}</span></button></li>'},fullscreen:!0,openfullscreen:!1,inline:!1,loop:!0,preload:1,pager:!0,pagergallery:!1,closekeys:[27],prevkeys:[33,37,65,74],nextkeys:[34,39,68,76],enableswipe:!0,maxswipeduration:250,minswipex:200,maxswipey:100,transition:{open:"growin",close:"shrinkout",slide:"slideslide"},image:{zoom:!1,zoomfactor:2},iframe:{closehidden:!0,proportional:!0},modal:{contentclose:!1,backgroundclose:!1,fullscreen:!1,closesubmit:!0},width:800,height:600,copyevents:!0,loadcss:!1,loadjs:!1,translation:{close:"close",fullscreen:"fullscreen",previous:"previous",next:"next",alert:{ok:"ok"},confirm:{ok:"ok",cancel:"cancel"},prompt:{ok:"ok",cancel:"cancel"},error:"Resource could not be loaded.",zoom:"toggle zoom"},onbeforeopen:0,onafteropen:0,onbeforeclose:0,onafterclose:0,onslideloading:0,onslideloaded:0,onslideopen:0,onslideclose:0,onfilter:0};cb=function(b,c,d,e){this.$el=c,this.data=[],this.index=0,this.options={},this.prefix=d&&d.dataprefix?d.dataprefix:defaults.dataprefix,this.prefixCC=a.camelCase(this.prefix).replace(/-$/,""),a.extend(!0,this.options,defaults,d||{}),e=e||this.$el.data(this.prefix+"data"),x(this,e),this.triggerOptions=this.data[this.index].options},cb.prototype={open:function(){A(this,!0),B(this)},close:function(){A(this,!1),B(this)},toggle:function(){A(this,!z(this)),B(this)},setSlide:function(a,b){var c;a=t(this,a),c=u(this,b),a&&c.length&&I(this,c,a)},getSlides:function(){return this.$lb.find(e(rb))},showSlide:function(a,b){$(this,a,b)},nextSlide:function(a){return $(this,this.index+1,a)},prevSlide:function(a){return $(this,this.index-1,a)}},a.fn[c]=function(c,d){if(!bb){if(!document.body)return a.error("The initialization was called before the body tag was available."),this;bb=a("body")}return this.each(function(){var e=a(this);e.data(b)||e.data(b,new cb(this,e,c,d))})},a[c]=function(b,c){return a.isPlainObject(c)||(c={}),c.removeonclose=!0,new cb(null,null,c,b)},a[c].addType=function(a,b){a.type&&gb.splice(b,0,a)}}(jQuery,"bb-lightbox","bbLightbox","-");