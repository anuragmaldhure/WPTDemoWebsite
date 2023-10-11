define(["jquery","media","waypoints"],function(s){var t=document.body,r=window.Waypoint;function i(e){this.options=Object.assign({},i.defaults,e),this.container=this.options.element,this.more=this.options.more,this.more&&(this.setupHandler(),this.waypoint=new r(this.options))}return i.defaults={items:".infinite-item",offset:function(){return 500-App.PageHeight(!0)},onBeforePageLoad:s.noop,onAfterPageLoad:s.noop},i.prototype.setupHandler=function(){this.options.handler=function(){this.options.onBeforePageLoad(),this.destroy(),this.params={infinite:this.options.mode,params:JSON.stringify(this.options.pagedata)},s.post(App.Path.Func,this.params,function(e){if(e){setTimeout(function(){var e=new Event("scroll");window.dispatchEvent(e)},10),this.container.removeChild(this.more);var t=document.createElement("div");t.innerHTML=e,t.className="plugins",this.container.appendChild(t),this.more=document.getElementById("loadmore"),new App.LazyLoad,s(".vx_el").vxPlayer(),s(".gifplayer").gifPlayer(),s(".audio_el").audioPlayer(),s(".embed-player").framePlayer(),PubSub.publish("new_items",[App.Query(".plugins .infinite-item")]),s(".plugins > article").unwrap(),this.more&&(this.waypoint=new r(this.options))}this.options.onAfterPageLoad()}.bind(this))}.bind(this)},i.prototype.destroy=function(){this.waypoint&&this.waypoint.destroy()},r.Infinite=i,function(e){var i=".post",n=".vswitch",o="infinite-container",a={Infinite:null,Current:null,Autoplay:1===parseInt(Cookies.get("autoplay")),Params:{page:0},Init:function(){this.SetPlugins(),"object"==typeof e&&App.Extend(a.Params,e),this.Autoplay&&"post"!=t.dataset.page&&this.AddWaypoints(),"pagination"!=Cookies.get("pagemode")&&this.InfiniLoad()},SetPlugins:function(){new App.LazyLoad,s(".vx_el").vxPlayer(),s(".gifplayer").gifPlayer(),s(".audio_el").audioPlayer(),s(".embed-player").framePlayer(),App.sticky(".pin",{useStickyClasses:!0,stickyBitStickyOffset:20})},InfiniLoad:function(){var e=this,t=App.ById(o);this.Infinite=new r.Infinite({mode:this.Params.mode,more:App.ById("loadmore"),element:t,pagedata:this.Params,onBeforePageLoad:function(){e.Params.page++,e.RemoveWaypoints(),App.Loading(Lang.get("loading_posts"))},onAfterPageLoad:function(){e.Autoplay&&e.AddWaypoints(),App.Loading("close")}})},PauseVideos:function(){s.players.reset()},GetVideo:function(){return this.element.querySelector(".gifplayer")||this.element.querySelector(".vx_el")},RunVideo:function(){var e=this.querySelector(".gifplayer"),t=this.querySelector(".embed-cover"),i=this.querySelector(".vx_el"),n=e||t||i;n!=a.Current&&a.PauseVideos(),(a.Current=n)&&n.click()},enableAutoplay:function(){this.Autoplay=!0,a.AddWaypoints(),Cookies.set("autoplay",1)},disableAutoplay:function(){this.Autoplay=!1,this.RemoveWaypoints(),Cookies.set("autoplay",0),this.PauseVideos(),this.InfiniLoad()},RemoveWaypoints:function(){window.Waypoint.destroyAll()},AddWaypoints:function(){var n=App.Debounce(a.RunVideo,300);function t(e,t,i){new r({element:e,offset:t,continuous:!1,handler:function(e){e===i&&n.call(this.element)}})}App.Query(i,null,!0).forEach(function(e){t(e,"-44%","up"),t(e,"60%","down")})}};return a.Init(),function(){function t(e,t){for(var i=String.prototype.split.call(t," "),n=0,o=i.length;n<o;n++)if(e&&e.classList.contains(i[n]))return!0;return!1}function e(e){switch(!0){case t(e.target,"changeview changesort"):return i.call(e.target,e);case t(e.target.parentElement,"changeview changesort"):return i.call(e.target.parentElement,e)}}function i(e){e.preventDefault();var t=this.dataset.option,i=this.classList[0];console.log(i),s(".pagination").remove(),s("#psort").addClass("hidden"),Cookies.set("pagemode","infinite"),a.Infinite&&a.Infinite.destroy(),a.Params.page=0,s(".drop").removeClass("visible"),this.classList.contains("active")||("changeview"==i?(Cookies.set("viewmode",t),s(".changeview").removeClass("active"),a.Params.view=t):"changesort"==i&&(s(".changesort").removeClass("active"),a.Params.sort=t),s(this).addClass("active"),s.ajax({type:"POST",url:App.Path.Func,data:{infinite:a.Params.mode,params:JSON.stringify(a.Params)},beforeSend:function(){App.Loading(Lang.get("loading_posts"))},error:function(){App.Loading("close")},success:function(e){App.Loading("close"),s("section.posts").html(e).promise().done(function(){PubSub.publish("prepend_items",[App.Query(".infinite-item",this[0])]),s(this).removeClass("icons list").addClass(a.Params.view),a.SetPlugins(),App.Query(".sidebar")&&App.ScrollTo(".sidebar"),a.Autoplay&&a.AddWaypoints(),a.InfiniLoad()})}}))}!function(){var i,n,o,t=App.Debounce(function(e){if(this.dataset.video){o=App.Create("video",{src:this.dataset.video,mute:!0,autoplay:!0,loop:!0}),this.appendChild(o);var t=this;i=!0,o.addEventListener("timeupdate",function(e){10<this.currentTime&&a.call(t,e,!0)}),o.addEventListener("canplaythrough",function(){this.classList.add("open"),t.querySelector(".box-line").classList.remove("loading")})}},1300);function a(e,t){t||(i=!1),clearTimeout(n),o&&this.removeChild(o),o=null,this.querySelector(".box-line").classList.remove("loading")}s(document).on("mouseenter",".video.local",function(e){i||(this.querySelector(".box-line").classList.add("loading"),n=t.call(this,e))}),s(document).on("mouseleave",".video.local",a)}(),document.documentElement.addEventListener("touch",e),document.documentElement.addEventListener("click",e),s(n).on("change",function(){this.checked?a.enableAutoplay():a.disableAutoplay()}),s(".browsemode").on("click",function(e){e.preventDefault(),this.classList.contains("active")?App.Query(".drop").classList.remove("visible"):"pagina"==this.dataset.option?Cookies.set("pagemode","pagination"):Cookies.set("pagemode","infinite"),location.reload()})}(),a}});