(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{306:function(t,o,e){"use strict";e.r(o);var n={name:"Accordion",props:{items:{type:Array,required:!0}},methods:{toggle:function(t){this.items[t].open=!this.items[t].open}}},c=e(14),component=Object(c.a)(n,(function(){var t=this,o=t._self._c;return o("div",{staticClass:"koda-accordion"},t._l(t.items,(function(e,n){return o("div",{key:n,staticClass:"koda-accordion__item"},[o("div",{staticClass:"koda-accordion__item__header",on:{click:function(o){return t.toggle(n)}}},[o("div",{staticClass:"koda-accordion__item__title"},[t._v("\n        "+t._s(e.title)+"\n      ")]),t._v(" "),o("div",{staticClass:"koda-accordion__item__icon"},[o("i",{staticClass:"fa",class:{"fa-chevron-down":!e.open,"fa-chevron-up":e.open}})])]),t._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:e.open,expression:"item.open"}],staticClass:"koda-accordion__item__body"},[o("div",{staticClass:"koda-accordion__item__content"},[t._t(n+1)],2)])])})),0)}),[],!1,null,null,null);o.default=component.exports}}]);