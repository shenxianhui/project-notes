(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["view-layout-components-tags-Tags"],{"083a":function(t,e,r){"use strict";var n=r("0d51"),a=TypeError;t.exports=function(t,e){if(!delete t[e])throw new a("Cannot delete property "+n(e)+" of "+n(t))}},"14d9":function(t,e,r){"use strict";var n=r("23e7"),a=r("7b0b"),i=r("07fa"),o=r("3a34"),s=r("3511"),c=r("d039"),u=c((function(){return 4294967297!==[].push.call({length:4294967296},1)})),h=function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(t){return t instanceof TypeError}},f=u||!h();n({target:"Array",proto:!0,arity:1,forced:f},{push:function(t){var e=a(this),r=i(e),n=arguments.length;s(r+n);for(var c=0;c<n;c++)e[r]=arguments[c],r++;return o(e,r),r}})},"3a34":function(t,e,r){"use strict";var n=r("83ab"),a=r("e8b5"),i=TypeError,o=Object.getOwnPropertyDescriptor,s=n&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(t){return t instanceof TypeError}}();t.exports=s?function(t,e){if(a(t)&&!o(t,"length").writable)throw new i("Cannot set read only .length");return t.length=e}:function(t,e){return t.length=e}},"4de4":function(t,e,r){"use strict";var n=r("23e7"),a=r("b727").filter,i=r("1dde"),o=i("filter");n({target:"Array",proto:!0,forced:!o},{filter:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}})},"7c9d":function(t,e,r){},a434:function(t,e,r){"use strict";var n=r("23e7"),a=r("7b0b"),i=r("23cb"),o=r("5926"),s=r("07fa"),c=r("3a34"),u=r("3511"),h=r("65f0"),f=r("8418"),l=r("083a"),p=r("1dde"),d=p("splice"),g=Math.max,b=Math.min;n({target:"Array",proto:!0,forced:!d},{splice:function(t,e){var r,n,p,d,y,v,w=a(this),m=s(w),L=i(t,m),T=arguments.length;for(0===T?r=n=0:1===T?(r=0,n=m-L):(r=T-2,n=b(g(o(e),0),m-L)),u(m+r-n),p=h(w,n),d=0;d<n;d++)y=L+d,y in w&&f(p,d,w[y]);if(p.length=n,r<n){for(d=L;d<m-n;d++)y=d+n,v=d+r,y in w?w[v]=w[y]:l(w,v);for(d=m;d>m-n+r;d--)l(w,d-1)}else if(r>n)for(d=m-n;d>L;d--)y=d+n-1,v=d+r-1,y in w?w[v]=w[y]:l(w,v);for(d=0;d<r;d++)w[d+L]=arguments[d+2];return c(w,m-n+r),p}})},b402:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"tags"},[e("div",{staticClass:"tags-wrap"},t._l(t.tagList,(function(r,n){return e("el-tag",{key:r.path,attrs:{closable:"","disable-transitions":!1,type:t.$route.path===r.path?"":"info"},on:{close:function(e){return t.handleClose(r,n)},click:function(e){return t.handleTag(r)}}},[t._v(" "+t._s(r.meta.label)+" ")])})),1)])},a=[],i=(r("4de4"),r("14d9"),r("a434"),r("d3b7"),{name:"tags",components:{},props:{beforeRouteUpdate:Object},data:function(){return{tagList:[this.$route]}},computed:{},watch:{beforeRouteUpdate:function(t){var e=this._arraySearch(this.tagList,"path",t.to.path);e.length||this.tagList.push(t.to)}},created:function(){},mounted:function(){},beforeDestroy:function(){},methods:{handleClose:function(t,e){if(!(this.tagList.length<=1)&&(this.tagList.length&&this.tagList.splice(e,1),t.path===this.$route.path)){var r=this.tagList[this.tagList.length-1];if(this.$route.path===r.path)return;this.$router.push(r.path)}},handleTag:function(t){this.$route.path!==t.path&&this.$router.push(t.path)},_arraySearch:function(t,e,r){var n=t.filter((function(t){return t[e]===r}));return n}}}),o=i,s=(r("e57c"),r("2877")),c=Object(s["a"])(o,n,a,!1,null,"193e79b0",null);e["default"]=c.exports},e57c:function(t,e,r){"use strict";r("7c9d")}}]);