(function(){var n,e,u,i,s,t;n=function(n,e,u){var i;return null==u&&(u={}),i="webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",n.addClass(e),null!=u.display&&"none"!==u.display&&n.css("display",u.display),n.one(i,function(){return null!=u.display&&n.css("display",u.display),n.removeClass(e)})},s=function(){var e;return e=jQuery("#share-buttons"),e.css("visibility","inherit"),e.css("display","none"),jQuery("#share").click(function(u){switch(u.preventDefault(),e.css("display")){case"block":return n(e,"animated fadeOutUp",{display:"none"});default:return n(e,"animated fadeInDown",{display:"block"})}})},i=function(){return jQuery(".topSearchButton").on("click",function(){return jQuery(".topSearchBox").slideToggle(),jQuery(".topSearchBox #topSearch").focus()})},u=function(){return jQuery("#mobile-menu").on("click",function(){return jQuery(".toplinks").slideToggle()})},t=function(){var n;return jQuery("nav #menu > .toplinks > li").hover(function(){jQuery(this).find(".icon").removeClass("fa-angle-down"),jQuery(this).find(".icon").addClass("fa-angle-up")},function(){jQuery(this).find(".icon").removeClass("fa-angle-up"),jQuery(this).find(".icon").addClass("fa-angle-down")}),jQuery(".submenu .column:first-child > span.submenu-item").each(function(n){return jQuery(this).hover(function(){jQuery(".submenu .column:last-child > span.submenu-desc").each(function(e){n===e&&jQuery(this).css("display","block")})},function(){jQuery(".submenu .column:last-child > span.submenu-desc").each(function(e){n===e&&jQuery(this).css("display","none")})})}),n=jQuery(".submenu .column:first-child > span.submenu-item").length,jQuery(".submenu .column:nth-child(2) > span.submenu-item").each(function(e){return jQuery(this).hover(function(){jQuery(".submenu .column:last-child > span.submenu-desc").each(function(u){n+e===u&&jQuery(this).css("display","block")})},function(){jQuery(".submenu .column:last-child > span.submenu-desc").each(function(u){n+e===u&&jQuery(this).css("display","none")})})})},e=function(){var n,e;return e=250,n=300,jQuery(window).scroll(function(){jQuery(this).scrollTop()>e?jQuery(".back-to-top").fadeIn(n):jQuery(".back-to-top").fadeOut(n)}),jQuery(".back-to-top").click(function(e){return e.preventDefault(),jQuery("html, body").animate({scrollTop:0},n),!1})},jQuery(document).ready(function(){return i(),s(),u(),t(),e()})}).call(this);
(function(){var e;e=function(){return jQuery(".docs-content img").each(function(){return jQuery(this).fancybox({href:jQuery(this).attr("src"),maxWidth:800,maxHeight:600,fitToView:!1,width:"70%",height:"70%",autoSize:!1,closeClick:!1,openEffect:"elastic",closeEffect:"none",helpers:{title:{type:"inside"}}})})},jQuery(document).ready(function(){return e()})}).call(this);
(function(){jQuery.ready(function(){var t,n;return n=jQuery.cookie("ajs_user_id"),n='"null"'===n?null:n.slice(1,-1),null==n?(t=jQuery(".koding-linkback .large a"),t.text("Register for a free Koding account and try this now"),t.attr("href","https://koding.com/Register?utm_source=KodingUniversity&utm_content=SignupButton&utm_campaign=growth")):void 0})}).call(this);
(function(){var r;r=function(){var r;return r=jQuery(location).attr("pathname").replace(/\//g,""),"search"===r?jQuery("#search-results").tapir({token:"543475ab3493cda4d1000001",query_param:"q",summary_limit:400}):void 0},jQuery(document).ready(function(){return r()})}).call(this);
(function(){var e;e=function(){return jQuery(".youtube-mini").fancybox({beforeShow:function(){var e;return e=jQuery(this.element).attr("slug"),this.title='<a href="'+e+'">'+this.title+"</a>"},maxWidth:800,maxHeight:600,fitToView:!1,width:"70%",height:"70%",autoSize:!1,closeClick:!1,openEffect:"elastic",closeEffect:"none",helpers:{title:{type:"inside"}}})},jQuery(document).ready(function(){return e()})}).call(this);