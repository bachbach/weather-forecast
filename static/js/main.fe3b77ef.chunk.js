(window["webpackJsonpweather-forecast"]=window["webpackJsonpweather-forecast"]||[]).push([[0],{45:function(e,t,n){e.exports=n(78)},76:function(e,t,n){},77:function(e,t,n){},78:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(13),c=n.n(a),i=n(2),s=n(3),u=n(19),f=n(16),l=n(20),p=n(80),h=n(18),g=n(42),O=n.n(g),v=n(44),d=n(10),b=n(38),w=n(17),y=n(24),j=n.n(y),E=n(39),m=n(40),S=n.n(m),_=n(41),k=n.n(_),C=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k.a;Object(i.a)(this,e),this._storageInterface={},this._storageInterface=t}return Object(s.a)(e,[{key:"get",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return this._storageInterface.get(e,t)}},{key:"set",value:function(e,t){return this._storageInterface.set(e,t)}},{key:"rm",value:function(e){this._storageInterface.rm(e)}},{key:"flush",value:function(){this._storageInterface.flush()}},{key:"prefix",get:function(){return this._storageInterface.prefix},set:function(e){this._storageInterface.prefix=e}}]),e}(),R=(new C,{}),P=new(function(){function e(){Object(i.a)(this,e);var t=new Proxy(this,this);return this.add("storage",new C),R.storage.prefix="movies-",t}return Object(s.a)(e,[{key:"add",value:function(e,t){R[e]=t}},{key:"get",value:function(e,t){return e[t]||R[t]}}]),e}());function T(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function A(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?T(n,!0).forEach(function(t){Object(w.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):T(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var I=new(function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"".concat("https://api.openweathermap.org/data","/").concat("2.5");Object(i.a)(this,e),console.log(Object({NODE_ENV:"production",PUBLIC_URL:"/weather-forecast",REACT_APP_API_URL:"https://api.openweathermap.org/data",REACT_APP_API_VERSION:"2.5"})),this.baseURL=t;var n={baseURL:this.baseURL};this.api=S.a.create(n)}return Object(s.a)(e,[{key:"get",value:function(e){return console.log("get",e),this.api.get(e,this.mergeConfig())}},{key:"post",value:function(e,t){return this.api.post(e,t,this.mergeConfig())}},{key:"mergeConfig",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};P.storage.get("token");return Object.assign({},e,{headers:A({Accept:"application/json","Content-Type":"application/json"},e.headers)})}}]),e}());function F(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function U(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?F(n,!0).forEach(function(t){Object(w.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):F(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var x=new(function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I;Object(i.a)(this,e),this.api=t}return Object(s.a)(e,[{key:"getForecasts",value:function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];return this.api.get("/forecast?id=524901&appid=c7d9c985558627e1717792be2372eaa4")}}]),e}()),D={GET_FORECASTS_SUCCESS:Symbol("GET_FORECASTS_SUCCESS"),GET_FORECASTS_ERROR:Symbol("GET_FORECASTS_ERROR")},L=function(e){return{type:D.GET_FORECASTS_SUCCESS,forecasts:e}},N={entries:[]},G=Object(d.c)({forecasts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case D.GET_FORECASTS_SUCCESS:return U({},e,{entries:t.forecasts});default:return e}}}),W=function(e,t){return G(e,t)},B=new(function(){function e(){Object(i.a)(this,e),this.middlewares=[b.a]}return Object(s.a)(e,[{key:"configureStore",value:function(e){var t=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||d.d;return this.store=Object(d.e)(W,t(d.a.apply(void 0,Object(v.a)(this.middlewares))),e),this.store}}]),e}()),V=function(e){Object(r.useEffect)(function(){e.getForecasts()},[]);return o.a.createElement("div",null,o.a.createElement("h1",null,"Hello from Forecasts!"),o.a.createElement("div",null,o.a.createElement("div",null,e.forecasts.map(function(e){return o.a.createElement("div",null,o.a.createElement("span",null,e.dt_txt))}))))},J=Object(h.b)(function(e){return{forecasts:e.forecasts.entries}},function(e){return{getForecasts:function(){return e(function(){var e=Object(E.a)(j.a.mark(function e(n){var r,o;return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.getForecasts(t);case 3:return r=e.sent,o=r.data,n(L(o.list)),e.abrupt("return",o);case 9:return e.prev=9,e.t0=e.catch(0),e.abrupt("return",n((a=e.t0.response.data,{type:D.GET_FORECASTS_ERROR,error:a})));case 12:case"end":return e.stop()}var a},e,null,[[0,9]])}));return function(t){return e.apply(this,arguments)}}());var t}}})(V),X=B.configureStore(),H=O()(),M=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement(h.a,{store:X},o.a.createElement(p.b,{history:H},o.a.createElement(p.c,null,o.a.createElement(p.a,{exact:!0,path:"/",component:J}))))}}]),t}(r.Component),Q=(n(76),function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"app"},o.a.createElement(M,null))}}]),t}(r.Component)),$=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function q(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}n(77);c.a.render(o.a.createElement(Q,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/weather-forecast",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/weather-forecast","/service-worker.js");$?(!function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):q(e)}).catch(function(){console.log("No internet connection found. Router is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):q(e)})}}()}},[[45,1,2]]]);
//# sourceMappingURL=main.fe3b77ef.chunk.js.map