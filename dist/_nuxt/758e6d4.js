(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{311:function(t,e,n){"use strict";n.r(e);var l={data:function(){return{employment:[]}},beforeMount:function(){this.getSiteDetails()},methods:{getSiteDetails:function(){var t=this;this.$content("personal").where({title:"Employment"}).fetch().then((function(e){t.employment=e[0]}))}}},m=n(14),component=Object(m.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"koda-employment about-section py-5 mt-5 px-5 px-lg-0"},[e("span",{staticClass:"about-anchor",attrs:{id:"employment"}}),t._v(" "),e("div",{staticClass:"row justify-content-center text-center"},[e("div",{staticClass:"col-12 col-lg-9 text-start"},[e("div",{staticClass:"d-flex align-items-center"},[e("h1",{staticClass:"text-primary"},[t._v(t._s(t.employment.title))])]),t._v(" "),e("hr"),t._v(" "),e("div",t._l(t.employment.items,(function(n){return e("div",{key:n.id,staticClass:"koda-employment-item my-5"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-xl-3 col-12 koda-employment-item__bg",style:{backgroundImage:"url(".concat(n.bgImage,")")}},[e("div",{staticClass:"content-wrapper d-flex align-items-center justify-content-center p-4"},[e("div",{staticClass:"koda-employment-item__img"},[n.image?e("img",{staticClass:"img-fluid",attrs:{src:n.image,alt:n.company}}):e("h6",{staticClass:"text-white text-center"},[t._v(t._s(n.company))])])])]),t._v(" "),e("div",{staticClass:"col-xl-9 col-12 ps-0 ps-md-4"},[e("h6",{staticClass:"koda-employment-item__company text-muted mb-1"},[t._v(t._s(n.company))]),t._v(" "),e("h3",{staticClass:"koda-employment-item__title text-primary"},[t._v(t._s(n.title))]),t._v(" "),e("div",{staticClass:"koda-emploment-item__info mt-2"},[e("span",{staticClass:"koda-employment-item__date text-muted me-4"},[e("i",{staticClass:"fas fa-calendar-alt me-2 text-mid"}),t._v("\n                  "+t._s(n.date)+"\n                ")]),t._v(" "),e("span",{staticClass:"koda-employment-item__location text-muted"},[e("i",{staticClass:"fas fa-map me-2 text-mid"}),t._v("\n                  "+t._s(n.location)+"\n                ")])]),t._v(" "),e("hr",{staticClass:"w-50 my-2"}),t._v(" "),e("p",{staticClass:"koda-employment-item__body py-2"},[t._v("\n                "+t._s(n.body)+"\n              ")]),t._v(" "),n.responsibilities?e("ul",{staticClass:"koda-employment-item__list"},t._l(n.responsibilities,(function(n){return e("li",{key:n.id,staticClass:"koda-employment-item__list-item"},[t._v("\n                  "+t._s(n.item)+"\n                ")])})),0):t._e()])])])})),0)])])])}),[],!1,null,null,null);e.default=component.exports}}]);