(function(e){function t(t){for(var i,r,o=t[0],c=t[1],u=t[2],d=0,p=[];d<o.length;d++)r=o[d],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&p.push(a[r][0]),a[r]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(e[i]=c[i]);l&&l(t);while(p.length)p.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],i=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(i=!1)}i&&(s.splice(t--,1),e=r(r.s=n[0]))}return e}var i={},a={app:0},s=[];function r(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=i,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/the-event/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var u=0;u<o.length;u++)t(o[u]);var l=c;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"01aa":function(e,t,n){},"0aae":function(e,t,n){e.exports=n.p+"img/checked.d834813a.svg"},"0cab":function(e,t,n){e.exports=n.p+"img/unchecked.abda81a6.svg"},1:function(e,t){},1923:function(e,t,n){"use strict";n("ac98")},2:function(e,t){},"21e2":function(e,t,n){e.exports=n.p+"img/arrow.51acb435.svg"},"357d":function(e,t,n){e.exports=n.p+"img/meta-mask.1a10b212.svg"},"385a":function(e,t,n){"use strict";n("d6cf")},"3b14":function(e,t,n){"use strict";n("86fa")},"3e49":function(e,t,n){},"477c":function(e,t,n){"use strict";n("a65e")},"4bd5":function(e,t,n){e.exports=n.p+"img/title.1e8415a6.svg"},"4c9d":function(e,t,n){},"4cef":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("RouterView")],1)},s=[],r=(n("5c0b"),n("5c64"),n("2877")),o={},c=Object(r["a"])(o,a,s,!1,null,null,null),u=c.exports,l=n("8c4f"),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("Banner"),n("Checkout")],1)},p=[],m=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"banner"},[i("div",{staticClass:"title"},[i("img",{attrs:{src:n("4bd5")}}),i("div",[e._v(e._s(e.$t("header.date")))])]),i("div",{staticClass:"info"},[i("img",{attrs:{src:n("5b1c")}}),i("span",[e._v(e._s(e.$t("header.info")))])])])},f=[],h=(n("b8c2"),{}),b=Object(r["a"])(h,m,f,!1,null,"760696dd",null),v=b.exports,g=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"checkout"},[1===e.step?[i("div",{staticClass:"top"},[i("div",{staticClass:"complete"},[i("span",[e._v(e._s(e.$t("checkout.complete")))])]),i("Product",{attrs:{title:e.$t("checkout.ticket"),"token-amount":100,"fiat-amount":100}})],1),i("div",{staticClass:"bottom"},[1===e.step?i("CreateAccount",{on:{submit:e.proceed}}):e._e()],1)]:e._e(),2===e.step?[i("div",{staticClass:"top"},[i("div",{staticClass:"complete"},[i("span",[e._v(e._s(e.$t("checkout.complete")))])]),i("Success",{attrs:{email:"denis_davidyuk@hotmail.com"}}),i("Product",{attrs:{title:e.$t("checkout.ticket"),"token-amount":100,"fiat-amount":100}})],1),i("div",{staticClass:"bottom"},[i("WalletSwitcher"),i("Button",{on:{click:e.proceed}},[e._v(" "+e._s(e.$t("checkout.continue"))+" ")])],1)]:e._e(),3===e.step?[i("div",{staticClass:"top"},[i("div",{staticClass:"complete"},[i("img",{attrs:{src:n("21e2")},on:{click:e.back}}),i("span",[e._v(e._s(e.$t("checkout.complete")))])]),i("Success",{attrs:{email:"denis_davidyuk@hotmail.com"}}),i("Product",{attrs:{title:e.$t("checkout.ticket"),"token-amount":100,"fiat-amount":100}})],1),i("div",{staticClass:"bottom"},[i("Title",{attrs:{top:e.$t("checkout.login"),bottom:e.$t("checkout.require-access")}}),i("Button",{attrs:{transparent:""},on:{click:e.proceed}},[e._v(" "+e._s(e.$t("checkout.cancel"))+" ")])],1)]:e._e(),4===e.step?[i("div",{staticClass:"top"},[i("div",{staticClass:"complete"},[i("img",{attrs:{src:n("21e2")},on:{click:e.back}}),i("span",[e._v(e._s(e.$t("checkout.complete")))])]),i("Success",{attrs:{email:"denis_davidyuk@hotmail.com",address:"0xc66ea802717bfb9833400264dd12c2bceaa3"}}),i("Product",{attrs:{title:e.$t("checkout.ticket"),"token-amount":100,"fiat-amount":100}})],1),i("div",{staticClass:"bottom"},[i("Error",{attrs:{insufficient:""}}),i("Title",{attrs:{top:e.$t("checkout.wyre-heading"),bottom:e.$t("checkout.wyre-info")}}),i("Button",{on:{click:e.proceed}},[e._v(" "+e._s(e.$t("checkout.continue-to-wyre"))+" ")])],1)]:e._e(),5===e.step?[i("div",{staticClass:"top"},[i("div",{staticClass:"complete"},[i("img",{attrs:{src:n("21e2")},on:{click:e.back}}),i("span",[e._v(e._s(e.$t("checkout.complete")))])]),i("Success",{attrs:{email:"denis_davidyuk@hotmail.com",address:"0xc66ea802717bfb9833400264dd12c2bceaa3"}}),i("Product",{attrs:{title:e.$t("checkout.ticket"),"token-amount":100,"fiat-amount":100}})],1),i("div",{staticClass:"bottom"},[i("Title",{attrs:{top:e.$t("checkout.here-we-go"),bottom:e.$t("checkout.here-we-go-info")}}),i("Button",{on:{click:e.proceed}},[e._v(" "+e._s(e.$t("checkout.buy-ticket"))+" ")])],1)]:e._e(),6===e.step?[i("div",{staticClass:"top finish"},[i("img",{attrs:{src:n("fecb")}}),i("Title",{attrs:{top:e.$t("checkout.finish-heading"),bottom:e.$t("checkout.finish-info")}})],1),i("div",{staticClass:"bottom"},[i("Button",[e._v(" "+e._s(e.$t("checkout.finish-button"))+" ")])],1)]:e._e()],2)},k=[],_=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"success"},[n("div",[e._v(e._s(e.$t("checkout.success"))+" "),n("i",[e._v(e._s(e.email))])]),e.address?n("span",{staticClass:"address"},[n("Identicon",{attrs:{address:e.address}}),e._v(" "+e._s(e.formatAddress(e.address))+" ")],1):e._e()])},y=[],w=(n("99af"),n("fb6a"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("canvas",{staticClass:"identicon"})}),C=[],E=n("c35d"),$={props:{address:{type:String,required:!0}},mounted:function(){Object(E["a"])({seed:this.address},this.$el)}},x=$,O=(n("385a"),Object(r["a"])(x,w,C,!1,null,"446aa1f9",null)),A=O.exports,S={components:{Identicon:A},props:{email:{type:String,required:!0},address:{type:String,default:""}},methods:{formatAddress:function(e){return"".concat(e.slice(0,6),"...").concat(e.slice(-4))}}},j=S,P=(n("d558"),Object(r["a"])(j,_,y,!1,null,"0f02c67f",null)),N=P.exports,T=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ListItem",{attrs:{title:e.title}},[n("div",{staticClass:"amount",attrs:{slot:"right"},slot:"right"},[n("div",[e._v(e._s(e.tokenAmount+" DAI"))]),n("div",{staticClass:"fiat"},[e._v(e._s("$"+e.fiatAmount+" USD"))])])])},M=[],I=(n("a9e3"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"list-item",on:{click:function(t){return e.$emit("click",t)}}},[e._t("icon"),n("span",{class:["title",{"has-icon":e.$slots.icon}]},[e._v(" "+e._s(e.title)+" ")]),n("div",{staticClass:"right"},[e._t("right")],2)],2)}),q=[],D={props:{title:{type:String,required:!0}}},B=D,L=(n("1923"),Object(r["a"])(B,I,q,!1,null,"c1585cf0",null)),R=L.exports,V={components:{ListItem:R},props:{title:{type:String,required:!0},tokenAmount:{type:Number,required:!0},fiatAmount:{type:Number,required:!0}}},U=V,W=(n("ff3c"),Object(r["a"])(U,T,M,!1,null,"2b378296",null)),z=W.exports,H=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"create-account"},[n("Title",{attrs:{top:e.$t("checkout.create-account"),bottom:e.$t("checkout.verify")}}),n("form",{on:{submit:function(t){return t.preventDefault(),e.$emit("submit",e.email)}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"email",required:"",placeholder:e.$t("checkout.placeholder")},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),n("Button",{attrs:{type:"submit"}},[e._v(" "+e._s(e.$t("checkout.continue"))+" ")])],1)],1)},G=[],Y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"title"},[n("h1",[e._v(e._s(e.top))]),n("h2",[e._v(e._s(e.bottom))])])},J=[],K={props:{top:{type:String,required:!0},bottom:{type:String,required:!0}}},F=K,Q=(n("dc3a"),Object(r["a"])(F,Y,J,!1,null,"be08febe",null)),Z=Q.exports,X=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("button",e._b({class:["button",{transparent:e.transparent}],on:{click:function(t){return e.$emit("click")}}},"button",e.$attrs,!1),[e._t("default")],2)},ee=[],te={props:{transparent:{type:Boolean}}},ne=te,ie=(n("9181"),Object(r["a"])(ne,X,ee,!1,null,"7d770f1a",null)),ae=ie.exports,se={components:{Title:Z,Button:ae},data:function(){return{email:""}},methods:{selectWallet:function(e){this.$store.commit("setProviderName",e)}}},re=se,oe=(n("3b14"),Object(r["a"])(re,H,G,!1,null,"ab91807a",null)),ce=oe.exports,ue=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"wallet-switcher"},[i("Title",{attrs:{top:e.$t("checkout.connect-wallet"),bottom:e.$t("checkout.select-wallet")}}),e._l(e.wallets,(function(t,a){return i("ListItem",{key:a,class:{checked:e.$store.state.providerName===a},attrs:{title:t},on:{click:function(t){return e.selectWallet(a)}}},[i("img",{attrs:{slot:"icon",src:n("6f32")("./"+a+".svg")},slot:"icon"}),i("div",{attrs:{slot:"right"},slot:"right"},[i("img",{staticClass:"icon",attrs:{src:n("6f32")("./"+(a===e.$store.state.providerName?"checked":"unchecked")+".svg")}})])])}))],2)},le=[],de={components:{Title:Z,ListItem:R},data:function(){return{wallets:this.$t("checkout.wallets")}},methods:{selectWallet:function(e){this.$store.commit("setProviderName",e)}}},pe=de,me=(n("e1d0"),Object(r["a"])(pe,ue,le,!1,null,"30b72059",null)),fe=me.exports,he=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:["error",{insufficient:e.insufficient}]},[e._v(" "+e._s(e.$t("checkout."+(e.insufficient?"insufficient":"error")))+" ")])},be=[],ve={props:{insufficient:{type:Boolean}}},ge=ve,ke=(n("ec14"),Object(r["a"])(ge,he,be,!1,null,"6ce35262",null)),_e=ke.exports,ye={components:{Success:N,Product:z,CreateAccount:ce,WalletSwitcher:fe,Error:_e,Title:Z,Button:ae},data:function(){return{step:1}},methods:{submit:function(e){console.log(e)},back:function(){this.step-=1},proceed:function(){switch(this.step){case 1:this.step=2;break;case 2:this.step="meta-mask"===this.$store.state.providerName?3:4;break;case 3:this.step=2;break;case 4:this.step=5;break;case 5:this.step=6;break;default:this.step=1}}}},we=ye,Ce=(n("b1fb"),Object(r["a"])(we,g,k,!1,null,"14235919",null)),Ee=Ce.exports,$e={components:{Banner:v,Checkout:Ee}},xe=$e,Oe=(n("477c"),Object(r["a"])(xe,d,p,!1,null,"e1e936a4",null)),Ae=Oe.exports,Se=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"buy-tickets"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),n("button",{on:{click:function(t){return e.buy("magic-link")}}},[e._v("MagicLink")]),n("button",{on:{click:function(t){return e.buy("meta-mask")}}},[e._v("MetaMask")]),e._v(" "+e._s(e.error?"Something went wrong":"")+" "),n("pre",[e._v("Test data:\n\nCard number: 4111111111111111\nExpiration: 10/23\nCVV: 123\nAddress: 1600 Amphitheatre Parkway\nCity: Mountain View\nState: California\nZIP code: 94043\n\nPhone number: 14047772394 (https://www.receivesms.org/us-phone-number/3451/)\nSMS code: 000000\nBank verification code: 000000\n    ")])])},je=[],Pe=(n("96cf"),n("1da1")),Ne={data:function(){return{email:"",error:!1}},methods:{buy:function(e){var t=this;return Object(Pe["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return t.error=!1,n.prev=1,n.next=4,t.$store.dispatch("buyTickets",{providerName:e,email:t.email});case 4:n.next=10;break;case 6:throw n.prev=6,n.t0=n["catch"](1),t.error=!0,n.t0;case 10:case"end":return n.stop()}}),n,null,[[1,6]])})))()}}},Te=Ne,Me=(n("ea2d"),Object(r["a"])(Te,Se,je,!1,null,null,null)),Ie=Me.exports;i["a"].use(l["a"]);var qe=[{path:"/",name:"Home",component:Ae},{path:"/buy-tickets",name:"BuyTickets",component:Ie}],De=new l["a"]({mode:"history",base:"/the-event/",routes:qe}),Be=De,Le=(n("d3b7"),n("5530")),Re=n("2f62"),Ve=n("7f41"),Ue=n("c030");i["a"].use(Re["a"]);var We=function(){var e=Object(Pe["a"])(regeneratorRuntime.mark((function e(t,n){var i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(Object({NODE_ENV:"production",BASE_URL:"/the-event/"}).VUE_APP_WYRE_API_URL).concat(t),Object(Le["a"])(Object(Le["a"])({},n),{},{headers:Object(Le["a"])({Authorization:"Bearer ".concat(Object({NODE_ENV:"production",BASE_URL:"/the-event/"}).VUE_APP_WYRE_APY_SECRET)},n.headers)}));case 2:if(i=e.sent,200===i.status){e.next=5;break}throw new Error("Invalid response status: ".concat(i.status));case 5:return e.abrupt("return",i.json());case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),ze=new Re["a"].Store({state:{providerName:"meta-mask"},mutations:{setProviderName:function(e,t){e.providerName=t}},actions:{buyTickets:function(e,t){return Object(Pe["a"])(regeneratorRuntime.mark((function n(){var i,a,s,r,o,c,u,l,d,p;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:i=e.providerName,a=t.email,n.t0=i,n.next="magic-link"===n.t0?5:"meta-mask"===n.t0?10:16;break;case 5:return r=new Ve["a"](Object({NODE_ENV:"production",BASE_URL:"/the-event/"}).VUE_APP_MAGIC_LINK_API_KEY,Object({NODE_ENV:"production",BASE_URL:"/the-event/"}).VUE_APP_IS_TEST_ENV?{network:"kovan"}:{}),n.next=8,r.auth.loginWithMagicLink({email:a});case 8:return s=new Ue["a"].providers.Web3Provider(r.rpcProvider),n.abrupt("break",17);case 10:if(window.ethereum){n.next=12;break}throw new Error("MetaMask is not available");case 12:return n.next=14,window.ethereum.enable();case 14:return s=new Ue["a"].providers.Web3Provider(window.ethereum),n.abrupt("break",17);case 16:throw new Error("Unknown provider");case 17:return o=s.getSigner(),n.next=20,o.getAddress();case 20:return c=n.sent,n.next=23,We("/v3/orders/reserve",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({referrerAccountId:Object({NODE_ENV:"production",BASE_URL:"/the-event/"}).VUE_APP_WYRE_ACCOUNT_ID,amount:Object({NODE_ENV:"production",BASE_URL:"/the-event/"}).VUE_APP_TICKET_PRICE,destCurrency:"DAI",email:a,dest:"ethereum:".concat(c)})});case 23:return u=n.sent,l=u.reservation,d=new window.Wyre({env:Object({NODE_ENV:"production",BASE_URL:"/the-event/"}).VUE_APP_IS_TEST_ENV?"test":"prod",reservation:l,operation:{type:"debitcard-hosted-dialog"}}),d.open(),n.next=29,new Promise((function(e){return d.on("paymentSuccess",e)}));case 29:return n.next=31,o.signMessage("Here will be a payload for GSN call");case 31:p=n.sent,console.log("signedMessage",p);case 33:case"end":return n.stop()}}),n)})))()}}}),He=n("a925"),Ge=n("edd4");i["a"].use(He["a"]);var Ye=new He["a"]({fallbackLocale:"en",locale:"en",messages:{en:Ge}});i["a"].config.productionTip=!1,new i["a"]({router:Be,store:ze,i18n:Ye,render:function(e){return e(u)}}).$mount("#app")},"5b1c":function(e,t,n){e.exports=n.p+"img/logo.a1c49d78.svg"},"5c0b":function(e,t,n){"use strict";n("9c0c")},"5c64":function(e,t,n){"use strict";n("d32a")},"645b":function(e,t,n){},"6f32":function(e,t,n){var i={"./arrow.svg":"21e2","./checked.svg":"0aae","./logo.svg":"5b1c","./magic-link.svg":"fd5d","./meta-mask.svg":"357d","./ok.svg":"fecb","./title.svg":"4bd5","./unchecked.svg":"0cab"};function a(e){var t=s(e);return n(t)}function s(e){if(!n.o(i,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return i[e]}a.keys=function(){return Object.keys(i)},a.resolve=s,e.exports=a,a.id="6f32"},7092:function(e,t,n){},"85ea":function(e,t,n){},"86fa":function(e,t,n){},9181:function(e,t,n){"use strict";n("b179")},"9c0c":function(e,t,n){},a65e:function(e,t,n){},a679:function(e,t,n){},ac98:function(e,t,n){},b179:function(e,t,n){},b1fb:function(e,t,n){"use strict";n("4cef")},b8c2:function(e,t,n){"use strict";n("645b")},d32a:function(e,t,n){},d558:function(e,t,n){"use strict";n("85ea")},d6cf:function(e,t,n){},dc3a:function(e,t,n){"use strict";n("3e49")},e1d0:function(e,t,n){"use strict";n("a679")},ea2d:function(e,t,n){"use strict";n("7092")},ec14:function(e,t,n){"use strict";n("01aa")},edd4:function(e){e.exports=JSON.parse('{"header":{"name":"Azimuth","date":"18—21 December 2020","info":"A voyage through the space-time continuum, expanding our understanding of humanity and the universe."},"checkout":{"complete":"Complete your purchase","ticket":"1 Ticket","create-account":"Create account","verify":"First you need to verify your Email address","placeholder":"hello@example.com","connect-wallet":"Connect wallet","select-wallet":"Select the wallet you want to use","wallets":{"meta-mask":"Metamask","magic-link":"Magic Link"},"login":"Login and Authorize Your Wallet","require-access":"This dapp requires access to your wallet, please login and authorize access to your MetaMask accounts to continue.","success":"You successfully logged in as","insufficient":"You need 100 DAI to purchase a ticket","error":"Wrong network detected, please change to Ethereum Mainnet","wyre-heading":"Buy DAI with Wyre","wyre-info":"Wyre lets you use a debit card to deposit DAI right in to your wallet.","here-we-go":"Here we go!","here-we-go-info":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend aliquam feugiat. Mauris pretium eros lectus, eget commodo turpis interdum a. Sed imperdiet accumsan risus.","buy-ticket":"Buy ticket","continue":"Continue","cancel":"Cancel","continue-to-wyre":"Continue to Wyre","finish-heading":"Thank you for your purchase!","finish-info":"Mauris pretium eros lectus, eget commodo turpis interdum a. Sed imperdiet accumsan risus.","finish-button":"experience.azimuth.voyage"},"themes":{"heading":"The themes explored include new economics, spaceflight, planetary health, and the resurgence of the back-to-land movement.","list":{"kosmosis":{"name":"Kosmosis","field":"Space Opera","description":"Space opera is a subgenre of science fiction that emphasizes space warfare, melodramatic adventure, interplanetary battles, and risk-taking. Set mainly or entirely in outer space, it usually involves conflict between opponents possessing advanced abilities, futuristic weapons, and other sophisticated technology."},"astrus":{"name":"Astrus","field":"Art Gallery","description":"A transliminal space containing art that explores ideas beyond the threshold of normal human consciousness. portals within the environment teleport viewers to alternate realities, unfolding the narrative of the space opera."}}},"performers":{"heading":"Performers","list":{"csihar":"<b>Attila Csihar</b><br />Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut augue vitae quam lacinia consectetur ut vel lectus. Sed pharetra porttitor suscipit. Maecenas dapibus nunc finibus pretium vulputate. Nunc tristique in nisi fringilla suscipit. Nam at malesuada nibh, eget tristique ipsum. Mauris quis porta orci.","cryborg":"<b>Cryborg</b><br />In the not so distant future, the Aztech civilization is flourishing in the nation of Robotswana. Robots live autonomously, and many successfully simulate human emotions. However, no robot exists that can shed tears, until finally Cryborg Model 187 is able to successfully weep. When the first tears trickle down her face, several of her circuits are shorted, creating an antenna that is tuned to the sphere of human consciousness. The monumental influx of information compels Cryborg to embark on a journey to unite with God. While on this journey, Cryborg intensely experiences all emotions, far exceeding those of her robot and even human counterparts.","anzano":"<b>Anzano</b><br />Mauris tincidunt metus quis diam placerat pellentesque. Morbi sollicitudin et felis id tincidunt. Sed convallis magna ante, eget pellentesque dui finibus dignissim. Aenean dolor lorem, viverra in nisl quis, suscipit aliquam justo. Phasellus cursus sagittis semper. Donec porta quam a ipsum ultricies ullamcorper. Donec sollicitudin sed lacus non lobortis. Morbi dignissim vestibulum libero ut pellentesque. Nulla condimentum magna felis, a blandit justo rhoncus nec. Integer eget lacinia sem."}},"speakers":{"heading":"Speakers and Panelists","list":{"haqq":"<b>Abdul Qadim Haqq</b> is an American visual artist who was born and raised in Detroit, Michigan. He is considered Detroit\'s number one ambassador of art for world-renowned techno music artists. Haqq\'s artwork is featured worldwide on classic records by Detroit Techno record labels, namely the records of Juan Atkins, Drexciya, Transmat, and Underground Resistance.","dews":"<b>Chris Dews</b> is the founder of Casita Verde, a project that has developed over 30 years from being a small Ibizan farmholding into what is now an educational centre showcasing sustainable living, offering workshops, courses and volunteer opportunities. Chris arrived in Ibiza in 1985 after spending 13 years travelling the world as a radio officer in the British Merchant Navy.","blaj":"<b>Anja Blaj</b> is a lawyer pioneering in space and crypto law and a Chief Strategy Officer of the Future Law Institute. She co-founded Ljubljana Legal Hackers Chapter and co-organized the first Distributed Governance Council (DGov 2019), and is a member of the Coalition of Automated Legal Applications (COALA).","dudley":"<b>Rick Dudley</b> is the President and CEO of Vulcanize, Inc. He has over fifteen years of experience as an architect and consultant, and has implemented several established blockchain architectures since 2014. He specializes in mechanism design with a focus on federated proof of stake consensus systems.","prisco":"<b>Giulio Prisco</b> worked as a scientist in European research centers including CERN, then as a space system analyst at the European Space Agency. In 2005, Giulio left the public sector and founded a virtual reality development and consulting company, which he ran until 2011. More recently, he has been covering developments and trends in science and technology for the specialized press.","milenius":"<b>Andy Milenius\'</b> interests include the integration of new environments where new types of living are possible which combines his love of ecology to passion projects of mutual aid. He is co-founder of Build Soil, an initiative to plant one million new edible chestnut trees. He was previously the CTO of MakerDAO, the organization that invented the DAI stablecoin for the Ethereum ecosystem."}},"buy":"Buy Tickets"}')},fd5d:function(e,t,n){e.exports=n.p+"img/magic-link.392abe63.svg"},fecb:function(e,t,n){e.exports=n.p+"img/ok.7871d632.svg"},ff3c:function(e,t,n){"use strict";n("4c9d")}});
//# sourceMappingURL=app.c69289b8.js.map