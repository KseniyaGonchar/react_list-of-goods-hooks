(this["webpackJsonpreact_list-of-goods-hooks"]=this["webpackJsonpreact_list-of-goods-hooks"]||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var s,c=n(7),o=n.n(c),i=n(6),r=n(8),a=n(1),l=(n(13),n(14),n(4)),u=n.n(l),b=n(0),h=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];!function(t){t[t.NONE=0]="NONE",t[t.ALPHABET=1]="ALPHABET",t[t.LENGTH=2]="LENGTH"}(s||(s={}));var j=function(){var t=Object(a.useState)(!1),e=Object(i.a)(t,2),n=e[0],c=e[1],o=Object(a.useState)(s.NONE),l=Object(i.a)(o,2),j=l[0],d=l[1],N=function(t,e){var n=e.sortType,c=e.isReversed,o=Object(r.a)(t);return c&&o.reverse(),o.sort((function(t,e){switch(n){case s.LENGTH:return c?e.length-t.length:t.length-e.length;case s.ALPHABET:return c?e.localeCompare(t):t.localeCompare(e);default:return 0}})),o}(h,{sortType:j,isReversed:n});return Object(b.jsxs)("div",{className:"section content",children:[Object(b.jsxs)("div",{className:"buttons",children:[Object(b.jsx)("button",{type:"button",className:u()("button is-info",{"is-light":j!==s.ALPHABET}),onClick:function(){d(s.ALPHABET)},children:"Sort alphabetically"}),Object(b.jsx)("button",{type:"button",onClick:function(){d(s.LENGTH)},className:u()("button is-success",{"is-light":j!==s.LENGTH}),children:"Sort by length"}),Object(b.jsx)("button",{onClick:function(){return c((function(t){return!t}))},type:"button",className:u()("button is-warning",{"is-light":!n}),children:"Reverse"}),(n||j!==s.NONE)&&Object(b.jsx)("button",{onClick:function(){d(s.NONE),c(!1)},type:"button",className:"button is-danger is-light",children:"Reset"})]}),Object(b.jsx)("ul",{children:Object(b.jsx)("ul",{children:N.map((function(t){return Object(b.jsx)("li",{"data-cy":"Good",children:t},t)}))})})]})};o.a.render(Object(b.jsx)(j,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.3667d847.chunk.js.map