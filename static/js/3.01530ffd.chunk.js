(this.webpackJsonpvenice=this.webpackJsonpvenice||[]).push([[3],{64:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var n=a(7),c=a(0),r=a.n(c),o=a(20),l=a(14);var i=a(18);function s(e){return function(e){if(Array.isArray(e))return Object(l.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(i.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var u=["\uac00\uc9c0","\uac15\uc870","\uac1c\ubbf8","\uacb0\uc815","\uacbd\ud5a5","\uace0\uae30","\uad00\uc2b5","\uad11\uacbd","\uad6c\uc6d4","\uae08\uc138","\uae30\ub85d","\ub098\ub984","\ub098\ubb34","\ub2e4\ub978","\ub2e4\uc2dc","\ub41c\uc7a5","\ub4f1\uc0b0","\ub9c8\ucc30","\ub9c8\ud06c","\ub9cc\uc871","\ub9d1\ub2e4","\uba40\ub9ac","\ubc14\ubcf4","\ubc30\ub2ec","\ubc88\uc5ed","\ubd80\uc778","\ube7c\ub2e4","\uc0ac\ub78c","\uc18c\ub144","\uc18c\ub9ac","\uc18c\uc2dd","\uc1fc\ud551","\uc218\uc5c5","\uc528\uc557","\uc5ec\uc790","\uc5fd\uc11c","\uc601\uc5b4","\uc608\ubcf4","\uc608\uc815","\uc624\ub9ac","\uc624\ube60","\uc694\uc77c","\uc695\uc2e4","\uc720\uc6d4","\uc774\ub7f0","\uc785\uad6d","\uc791\uc6a9","\uc804\uacf5","\uc815\uae30","\uc81c\uc758","\uc878\ub2e4","\uc885\uc77c","\uc8fc\ucc28","\uc911\uc21c","\uc989\uc11d","\uc9c0\uac01","\uc9c0\ubc29","\uc9c1\uc120","\ucc28\ucc28","\ucc38\ub2e4","\ucc38\uc678","\ucc9c\uad6d","\ucd5c\uc18c","\ucd94\uce21","\ucd9c\uc2e0","\ucda9\uace0","\uce58\uc57d","\uce74\ub4dc","\ucf54\ud53c","\ud06c\uae30","\ud070\uc808","\ud0c0\ub85c","\ud558\ub3c4","\ud559\uacfc","\ud55c\ucc3d","\ud574\uc548","\ud5c8\ub9ac","\ud638\ubc15","\ud6c4\ud68c"],m=r.a.memo((function(e){var t={top:e.top,fontSize:"1.2rem"};return void 0!==e.left?t.left=e.left:void 0!==e.right?t.right=e.right:t.left="50%",r.a.createElement("span",{className:"position-absolute",style:t},e.word)})),f=r.a.memo((function(e){var t=e.onEnter,a=Object(c.useState)(""),o=Object(n.a)(a,2),l=o[0],i=o[1],s=Object(c.useRef)(null);Object(c.useEffect)((function(){s.current&&s.current.focus()}),[]);return r.a.createElement("div",{className:"input-group"},r.a.createElement("input",{type:"text",className:"form-control",value:l,onChange:function(e){return i(e.target.value)},onKeyPress:function(e){"Enter"===e.key&&(t(l),i(""))},ref:s,onBlur:function(){s.current&&s.current.focus()}}))})),b=r.a.memo((function(e){var t=e.score;return r.a.createElement("div",{className:"position-fixed mt-2 text-center rounded-pill border-theme-2px",style:{width:200,top:0,left:"50%",marginLeft:-100}},"\uc810\uc218: ",t)})),d=(a(64),r.a.memo((function(e){var t=e.damage;return r.a.createElement("div",{className:"container-fluid blocks rounded"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-4 block ".concat(t<=-1?"broken":"")}),r.a.createElement("div",{className:"col-4 block ".concat(t<=-2?"broken":"")}),r.a.createElement("div",{className:"col-4 block ".concat(t<=-3?"broken":"")})),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-4 block ".concat(t<=-4?"broken":"")}),r.a.createElement("div",{className:"col-4 block ".concat(t<=-5?"broken":"")}),r.a.createElement("div",{className:"col-4 block ".concat(t<=-6?"broken":"")})),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-4 block ".concat(t<=-7?"broken":"")}),r.a.createElement("div",{className:"col-4 block ".concat(t<=-8?"broken":"")}),r.a.createElement("div",{className:"col-4 block ".concat(t<=-9?"broken":"")})),r.a.createElement("div",{className:"row "},r.a.createElement("div",{className:"col-4 block ".concat(t<=-10?"broken":"")}),r.a.createElement("div",{className:"col-4 block ".concat(t<=-11?"broken":"")}),r.a.createElement("div",{className:"col-4 block ".concat(t<=-12?"broken":"")})))}))),v=(a(65),r.a.memo((function(){var e=Object(c.useState)([]),t=Object(n.a)(e,2),a=t[0],l=t[1],i=Object(c.useState)(!0),v=Object(n.a)(i,2),E=v[0],k=v[1],h=Object(c.useRef)(0),p=Object(c.useRef)(0),N=Object(c.useRef)(null),j=Object(c.useRef)(0);Object(c.useEffect)((function(){var e=N.current;e&&(j.current=e.clientHeight)}),[]),Object(o.a)((function(){var e=function(e,t,a){for(var n=Math.floor(a/15),c=0,r=e.length;c<r;c+=1)e[c].top+=n;var o=e.filter((function(e){return e.top<a})),l=o.length-e.length,i={word:"",top:0},m=Math.floor(Math.random()*u.length);i.word=u[m];var f=Math.floor(480*Math.random());return 2*Math.random()<1?i.left=f:i.right=f,[[].concat(s(o),[i]),l]}(a,0,j.current),t=Object(n.a)(e,2),c=t[0],r=t[1];null!==h.current&&(h.current+=r,-12===h.current&&k(!1)),l(c)}),E?1500:null);var O=Object(c.useCallback)((function(e){var t=function(e,t){for(var a=0,n=e.length;a<n;a+=1)if(e[a].word===t)return[].concat(s(e.slice(0,a)),s(e.slice(a+1)));return null}(a,e);t&&(null!==p.current&&(p.current=p.current+10),l(t))}),[a]);return r.a.createElement("div",{className:"h-100 position-relative",ref:N},r.a.createElement(b,{score:p.current}),a.map((function(e,t){return r.a.createElement(m,Object.assign({key:t},e))})),r.a.createElement("div",{className:"position-absolute",style:{width:300,bottom:0,left:"50%",marginLeft:-150,zIndex:1010}},r.a.createElement(f,{onEnter:O}),r.a.createElement(d,{damage:h.current})),r.a.createElement("div",{className:"position-absolute w-100",id:"wave",style:{bottom:0,height:20,zIndex:1e3}}))})));t.default=v}}]);
//# sourceMappingURL=3.01530ffd.chunk.js.map