(this["webpackJsonpinstant-recipes"]=this["webpackJsonpinstant-recipes"]||[]).push([[0],[,,,function(e,t,a){e.exports={recipe:"recipe_recipe__3N-43",image:"recipe_image__W3hcs"}},,,,function(e,t,a){e.exports=a(15)},,,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(5),i=a.n(r),s=(a(12),a(2)),o=a.n(s),l=a(6),u=a(1),m=a(3),p=a.n(m),f=function(e){var t=e.title,a=e.calories,n=e.image,r=e.ingredients;return c.a.createElement("div",{className:p.a.recipe},c.a.createElement("h1",null,t),c.a.createElement("ol",null,r.map((function(e){return c.a.createElement("li",null,e.text)}))),c.a.createElement("p",null,a," calories"),c.a.createElement("img",{className:p.a.image,src:n,alt:""}))},h=(a(14),function(){var e=0,t=Object(n.useState)([]),a=Object(u.a)(t,2),r=a[0],i=a[1],s=Object(n.useState)(""),m=Object(u.a)(s,2),p=m[0],h=m[1],d=Object(n.useState)("icecream"),g=Object(u.a)(d,2),v=g[0],E=g[1];Object(n.useEffect)((function(){b()}),[v]);var b=function(){var e=Object(l.a)(o.a.mark((function e(){var t,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.edamam.com/search?q=".concat(v,"&app_id=").concat("8e50ded5","&app_key=").concat("577ce5880f8c85696106c53396cce178"));case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,i(a.hits);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return c.a.createElement("div",{className:"app"},c.a.createElement("div",{className:"title"},"Instant Recipe"),c.a.createElement("form",{onSubmit:function(e){e.preventDefault(),E(p),h("")},className:"search-form"},c.a.createElement("input",{className:"search-bar",type:"text",value:p,onChange:function(e){h(e.target.value),console.log(p)}}),c.a.createElement("button",{className:"search-button",type:"submit"},"Search")),c.a.createElement("div",{className:"recipes"},r.map((function(t){return c.a.createElement(f,{key:e++,title:t.recipe.label,image:t.recipe.image,calories:t.recipe.calories,ingredients:t.recipe.ingredients})}))))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.41c7fd6f.chunk.js.map