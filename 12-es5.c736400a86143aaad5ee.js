(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{Iab2:function(l,n,u){var e,t;void 0===(t="function"==typeof(e=function(){"use strict";function n(l,n,u){var e=new XMLHttpRequest;e.open("GET",l),e.responseType="blob",e.onload=function(){o(e.response,n,u)},e.onerror=function(){console.error("could not download file")},e.send()}function u(l){var n=new XMLHttpRequest;n.open("HEAD",l,!1);try{n.send()}catch(l){}return 200<=n.status&&299>=n.status}function e(l){try{l.dispatchEvent(new MouseEvent("click"))}catch(n){var u=document.createEvent("MouseEvents");u.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),l.dispatchEvent(u)}}var t="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof global&&global.global===global?global:void 0,o=t.saveAs||("object"!=typeof window||window!==t?function(){}:"download"in HTMLAnchorElement.prototype?function(l,o,r){var a=t.URL||t.webkitURL,i=document.createElement("a");i.download=o=o||l.name||"download",i.rel="noopener","string"==typeof l?(i.href=l,i.origin===location.origin?e(i):u(i.href)?n(l,o,r):e(i,i.target="_blank")):(i.href=a.createObjectURL(l),setTimeout((function(){a.revokeObjectURL(i.href)}),4e4),setTimeout((function(){e(i)}),0))}:"msSaveOrOpenBlob"in navigator?function(l,t,o){if(t=t||l.name||"download","string"!=typeof l)navigator.msSaveOrOpenBlob(function(l,n){return void 0===n?n={autoBom:!1}:"object"!=typeof n&&(console.warn("Deprecated: Expected third argument to be a object"),n={autoBom:!n}),n.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(l.type)?new Blob(["\ufeff",l],{type:l.type}):l}(l,o),t);else if(u(l))n(l,t,o);else{var r=document.createElement("a");r.href=l,r.target="_blank",setTimeout((function(){e(r)}))}}:function(l,u,e,o){if((o=o||open("","_blank"))&&(o.document.title=o.document.body.innerText="downloading..."),"string"==typeof l)return n(l,u,e);var r="application/octet-stream"===l.type,a=/constructor/i.test(t.HTMLElement)||t.safari,i=/CriOS\/[\d]+/.test(navigator.userAgent);if((i||r&&a)&&"object"==typeof FileReader){var c=new FileReader;c.onloadend=function(){var l=c.result;l=i?l:l.replace(/^data:[^;]*;/,"data:attachment/file;"),o?o.location.href=l:location=l,o=null},c.readAsDataURL(l)}else{var s=t.URL||t.webkitURL,b=s.createObjectURL(l);o?o.location=b:location.href=b,o=null,setTimeout((function(){s.revokeObjectURL(b)}),4e4)}});t.saveAs=o.saveAs=o,l.exports=o})?e.apply(n,[]):e)||(l.exports=t)},L6id:function(l,n,u){"use strict";u.r(n);var e=u("CcnG"),t=function(){return function(){}}(),o=u("9AJC"),r=u("fNgX"),a=u("pMnS"),i=u("Ip0R"),c=u("4GxJ"),s=u("gIcY"),b=u("oBZk"),d=u("ZZ/e"),p=u("Hf/j"),m=u("ZYjt"),f=function(){return function(l,n,u){this.iso=l,this.name=n,this.numberOfPlaces=u}}(),g=u("VnD/"),h=u("67Y/"),y={prefix:"fas",iconName:"map-marker-alt",icon:[384,512,[],"f3c5","M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"]},w=u("Iab2"),v=u("kiQV"),k=function(){function l(l,n){this.http=l,this.fb=n,this.VERSION=v.a,this.faMapMarkerAlt=y,this.parser=new DOMParser,this.searchCountry="",this.corsForm=this.fb.group({url:[""]})}return l.prototype.ngOnInit=function(){this.getAllCountries()},l.prototype.downloadCountryKmlFile=function(l){var n=this;l.numberOfDownloadedPlaces&&l.numberOfDownloadedPlaces===l.numberOfPlaces?this.prepareKmlString(l).then((function(u){n.saveToFile(l.name,u)})):this.getPlacesInCountry(l).catch((function(){return n.downloadKmlFromAssets(l)}))},l.prototype.downloadAll=function(l){var n=this;l<this.countries.length&&this.getPlacesInCountry(this.countries[l]).then((function(){return n.downloadAll(l+1)})).catch((function(){n.downloadKmlFromAssets(n.countries[l]).then((function(){return n.downloadAll(l+1)}))}))},l.prototype.getAllCountries=function(){var l=this;this.http.get(this.getUrl("countries","json"),{observe:"response"}).subscribe((function(n){l.populateCountriesArray(n.body)}),(function(){l.http.get("assets/countries.json").subscribe((function(n){l.populateCountriesArray(n)}))}))},l.prototype.populateCountriesArray=function(l){for(var n in this.countries=[],l)l.hasOwnProperty(n)&&this.countries.push(new f(l[n].iso,l[n].name,parseInt(l[n].places,10)));this.searchCountries=this.countries},l.prototype.getPlacesInCountry=function(l){var n=this;return new Promise((function(u,e){n.http.get(n.getUrl("country="+l.iso,"json"),{observe:"response"}).pipe(Object(g.a)((function(l){return l.ok})),Object(h.a)((function(l){return l.body}))).subscribe((function(t){l.placesInfo=t,l.numberOfDownloadedPlaces=0;for(var o=0;o<l.placesInfo.length;++o)n.getPlaceKml(l,o,1).then((function(){l.numberOfDownloadedPlaces++,l.numberOfDownloadedPlaces===l.numberOfPlaces&&n.prepareKmlString(l).then((function(e){n.saveToFile(l.name,e),u()}))})).catch((function(){return e()}))}),(function(){return e()}))}))},l.prototype.getPlaceKml=function(n,u,e){var t=this;return new Promise((function(o,r){if(u>n.numberOfDownloadedPlaces+l.NUMBER_OF_CONCURRENT_QUERIES)setTimeout((function(){t.getPlaceKml(n,u,e).then((function(){return o()})).catch((function(){return r()}))}),100);else{var a=n.placesInfo[u];e>1&&console.log("Retry "+e+": "+a.id),e>l.NUMBER_OF_RETRIES?r():t.getPlaceKmlLoop(a).then((function(){return o()})).catch((function(){t.getPlaceKml(n,u,e+1).then((function(){return o()})).catch((function(){return r()}))}))}}))},l.prototype.getPlaceKmlLoop=function(l){var n=this;return new Promise((function(u,e){n.http.get(n.getUrl("place="+l.id,"kml"),{responseType:"text"}).subscribe((function(t){try{var o=n.parseXml(t).getElementsByTagName("Placemark")[0];n.replaceStyleUrl(o.getElementsByTagName("styleUrl")[0].childNodes[0]),l.kml=o,u()}catch(r){e()}}),(function(){return e()}))}))},l.prototype.getUrl=function(l,n){var u="https://hitchwiki.org/maps/api/?format="+n+"&"+l,e=this.corsForm.get("url").value;return e&&""!==e.trim()?e+encodeURIComponent(u):u},l.prototype.getKmlTemplate=function(){return this.http.get("assets/kmlTemplate.kml",{responseType:"text"}).toPromise()},l.prototype.saveToFile=function(l,n){var u=new Blob([n],{type:"application/vnd.google-earth.kml+xml"});Object(w.saveAs)(u,l+".kml")},l.prototype.downloadKmlFromAssets=function(l){return new Promise((function(n,u){l.numberOfDownloadedPlaces=0,l.placesInfo=void 0;var e=document.createElement("a"),t=l.name+".kml";e.download=t,e.href="assets/kml/countries/"+t;var o="application/vnd.google-earth.kml+xml";e.dataset.downloadurl=[o,e.download,e.href].join(":"),e.type=o,e.target="_self",document.body.appendChild(e),e.click(),e.remove(),n()}))},l.prototype.prepareKmlString=function(l){var n=this;return new Promise((function(u,e){n.getKmlTemplate().then((function(e){var t=n.parseXml(e);t.getElementsByTagName("name")[0].childNodes[0].nodeValue=l.name;for(var o=0,r=l.placesInfo;o<r.length;o++){var a=r[o];t.getElementsByTagName("Document")[0].appendChild(a.kml)}u((new XMLSerializer).serializeToString(t))}))}))},l.prototype.replaceStyleUrl=function(l){switch(l.nodeValue){case"#rating_0":l.nodeValue="#placemark-purple";break;case"#rating_1":l.nodeValue="#placemark-green";break;case"#rating_2":l.nodeValue="#placemark-blue";break;case"#rating_3":l.nodeValue="#placemark-yellow";break;case"#rating_4":l.nodeValue="#placemark-orange";break;case"#rating_5":l.nodeValue="#placemark-red";break;default:l.nodeValue="#placemark-brown"}},l.prototype.parseXml=function(l){return this.parser.parseFromString(l,"text/xml")},l.prototype.searchMatchingCountries=function(){var l=this.searchCountry.trim().toLocaleLowerCase();this.searchCountries=""===l?this.countries:this.countries.filter((function(n){return n.name.toLocaleLowerCase().includes(l)}))},l.NUMBER_OF_RETRIES=5,l.NUMBER_OF_CONCURRENT_QUERIES=100,l}(),E=u("t/Na"),N=e.sb({encapsulation:0,styles:[[".container[_ngcontent-%COMP%]{padding-top:1rem;padding-bottom:1rem}.rating-0[_ngcontent-%COMP%], .rating-average[_ngcontent-%COMP%], .rating-bad[_ngcontent-%COMP%], .rating-good[_ngcontent-%COMP%], .rating-na[_ngcontent-%COMP%], .rating-senseless[_ngcontent-%COMP%], .rating-very-good[_ngcontent-%COMP%]{font-size:2rem}.rating-0[_ngcontent-%COMP%]{color:purple}.rating-very-good[_ngcontent-%COMP%]{color:green}.rating-good[_ngcontent-%COMP%]{color:#00f}.rating-average[_ngcontent-%COMP%]{color:#ff0}.rating-bad[_ngcontent-%COMP%]{color:orange}.rating-senseless[_ngcontent-%COMP%]{color:red}.rating-na[_ngcontent-%COMP%]{color:purple}"]],data:{}});function C(l){return e.Pb(0,[(l()(),e.ub(0,0,null,null,4,"button",[["class","btn"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.downloadCountryKmlFile(l.parent.context.$implicit)&&e),e}),null,null)),e.Kb(512,null,i.z,i.A,[e.t,e.u,e.k,e.E]),e.tb(2,278528,null,0,i.j,[i.z],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),e.Ib(3,{"btn-primary":0,"btn-success":1}),(l()(),e.Nb(-1,null,["Download "]))],(function(l,n){var u=l(n,3,0,!n.parent.context.$implicit.numberOfDownloadedPlaces||0==n.parent.context.$implicit.numberOfDownloadedPlaces,n.parent.context.$implicit.numberOfDownloadedPlaces==n.parent.context.$implicit.numberOfPlaces);l(n,2,0,"btn",u)}),null)}function P(l){return e.Pb(0,[(l()(),e.ub(0,0,null,null,4,"ngb-progressbar",[["type","warning"]],null,null,null,o.f,o.d)),e.tb(1,49152,null,0,c.F,[c.G],{animated:[0,"animated"],striped:[1,"striped"],type:[2,"type"],value:[3,"value"]},null),(l()(),e.ub(2,0,null,0,2,"i",[],null,null,null,null,null)),(l()(),e.Nb(3,null,["","%"])),e.Jb(4,2)],(function(l,n){l(n,1,0,!0,!0,"warning",100*n.parent.context.$implicit.numberOfDownloadedPlaces/n.parent.context.$implicit.numberOfPlaces)}),(function(l,n){var u=e.Ob(n,3,0,l(n,4,0,e.Gb(n.parent.parent,0),100*n.parent.context.$implicit.numberOfDownloadedPlaces/n.parent.context.$implicit.numberOfPlaces,"1.2-2"));l(n,3,0,u)}))}function O(l){return e.Pb(0,[(l()(),e.ub(0,0,null,null,12,"tr",[],null,null,null,null,null)),(l()(),e.ub(1,0,null,null,1,"th",[["scope","row"]],null,null,null,null,null)),(l()(),e.Nb(2,null,["",""])),(l()(),e.ub(3,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),e.ub(4,0,null,null,1,"a",[],null,null,null,null,null)),(l()(),e.Nb(5,null,["",""])),(l()(),e.ub(6,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Nb(7,null,[" "," "])),(l()(),e.ub(8,0,null,null,4,"td",[],null,null,null,null,null)),(l()(),e.jb(16777216,null,null,1,null,C)),e.tb(10,16384,null,0,i.l,[e.P,e.M],{ngIf:[0,"ngIf"]},null),(l()(),e.jb(16777216,null,null,1,null,P)),e.tb(12,16384,null,0,i.l,[e.P,e.M],{ngIf:[0,"ngIf"]},null)],(function(l,n){l(n,10,0,!n.context.$implicit.numberOfDownloadedPlaces||0==n.context.$implicit.numberOfDownloadedPlaces||n.context.$implicit.numberOfDownloadedPlaces==n.context.$implicit.numberOfPlaces),l(n,12,0,n.context.$implicit.placesInfo&&n.context.$implicit.numberOfDownloadedPlaces<n.context.$implicit.numberOfPlaces)}),(function(l,n){l(n,2,0,n.context.index+1),l(n,5,0,n.context.$implicit.name),l(n,7,0,n.context.$implicit.numberOfPlaces)}))}function M(l){return e.Pb(0,[(l()(),e.ub(0,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Nb(-1,null,["To acquire the most recent version of POI points from hitchwiki you would have to enable Cross Origin Resource Sharing (CORS)"])),(l()(),e.ub(2,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Nb(-1,null,["You may want to do this by using some browser extension to temporarily disable CORS"])),(l()(),e.ub(4,0,null,null,4,"p",[],null,null,null,null,null)),(l()(),e.Nb(-1,null,["Or you may try with some "])),(l()(),e.ub(6,0,null,null,1,"a",[["href","https://gist.github.com/jimmywarting/ac1be6ea0297c16c477e17f8fbe51347"]],null,null,null,null,null)),(l()(),e.Nb(-1,null,["CORS proxy"])),(l()(),e.Nb(-1,null,[". If you decide to go along with latter, provide url to proxy:"])),(l()(),e.ub(9,0,null,null,12,"form",[["name","editForm"],["novalidate",""],["role","form"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],(function(l,n,u){var t=!0;return"submit"===n&&(t=!1!==e.Gb(l,11).onSubmit(u)&&t),"reset"===n&&(t=!1!==e.Gb(l,11).onReset()&&t),t}),null,null)),e.tb(10,16384,null,0,s.t,[],null,null),e.tb(11,540672,null,0,s.f,[[8,null],[8,null]],{form:[0,"form"]},null),e.Kb(2048,null,s.b,null,[s.f]),e.tb(13,16384,null,0,s.l,[[4,s.b]],null,null),(l()(),e.ub(14,0,null,null,1,"label",[["for","corsUrl"],["hidden",""]],null,null,null,null,null)),(l()(),e.Nb(-1,null,["Cors Proxy URL"])),(l()(),e.ub(16,0,null,null,5,"input",[["class","form-control"],["formControlName","url"],["id","corsUrl"],["name","corsUrl"],["placeholder","CORS proxy url"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],(function(l,n,u){var t=!0;return"input"===n&&(t=!1!==e.Gb(l,17)._handleInput(u.target.value)&&t),"blur"===n&&(t=!1!==e.Gb(l,17).onTouched()&&t),"compositionstart"===n&&(t=!1!==e.Gb(l,17)._compositionStart()&&t),"compositionend"===n&&(t=!1!==e.Gb(l,17)._compositionEnd(u.target.value)&&t),t}),null,null)),e.tb(17,16384,null,0,s.c,[e.E,e.k,[2,s.a]],null,null),e.Kb(1024,null,s.i,(function(l){return[l]}),[s.c]),e.tb(19,671744,null,0,s.e,[[3,s.b],[8,null],[8,null],[6,s.i],[2,s.r]],{name:[0,"name"]},null),e.Kb(2048,null,s.j,null,[s.e]),e.tb(21,16384,null,0,s.k,[[4,s.j]],null,null),(l()(),e.ub(22,0,null,null,4,"p",[],null,null,null,null,null)),(l()(),e.Nb(-1,null,["Note that when above url is provided then all request (well, except for downloading preprocessed files) will be handled by provided server. Unfortunately most free proxies limit number of request so you probably "])),(l()(),e.ub(24,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),e.Nb(-1,null,["won't be able"])),(l()(),e.Nb(-1,null,[" to download kml files for countries with lot of places"])),(l()(),e.ub(27,0,null,null,0,"hr",[],null,null,null,null,null)),(l()(),e.ub(28,0,null,null,4,"p",[],null,null,null,null,null)),(l()(),e.Nb(-1,null,["There are also some "])),(l()(),e.ub(30,0,null,null,1,"em",[],null,null,null,null,null)),(l()(),e.Nb(-1,null,["fancy"])),(l()(),e.Nb(-1,null,[" download options you might want to give a try:"])),(l()(),e.ub(33,0,null,null,1,"a",[["class","btn-block btn btn-primary"],["href","assets/kml/world.kml"],["rel","noopener"],["target","_blank"],["type","application/vnd.google-earth.kml+xml"]],null,null,null,null,null)),(l()(),e.Nb(-1,null,["Download preprocessed world.kml"])),(l()(),e.ub(35,0,null,null,1,"button",[["class","btn-block btn btn-primary"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.downloadAll(0)&&e),e}),null,null)),(l()(),e.Nb(-1,null,[" Generate kml file for every country "]))],(function(l,n){l(n,11,0,n.component.corsForm),l(n,19,0,"url")}),(function(l,n){l(n,9,0,e.Gb(n,13).ngClassUntouched,e.Gb(n,13).ngClassTouched,e.Gb(n,13).ngClassPristine,e.Gb(n,13).ngClassDirty,e.Gb(n,13).ngClassValid,e.Gb(n,13).ngClassInvalid,e.Gb(n,13).ngClassPending),l(n,16,0,e.Gb(n,21).ngClassUntouched,e.Gb(n,21).ngClassTouched,e.Gb(n,21).ngClassPristine,e.Gb(n,21).ngClassDirty,e.Gb(n,21).ngClassValid,e.Gb(n,21).ngClassInvalid,e.Gb(n,21).ngClassPending)}))}function G(l){return e.Pb(0,[e.Hb(0,i.d,[e.v]),(l()(),e.ub(1,0,null,null,6,"ion-header",[],null,null,null,b.h,b.c)),e.tb(2,49152,null,0,d.y,[e.h,e.k,e.A],null,null),(l()(),e.ub(3,0,null,0,4,"ion-toolbar",[],null,null,null,b.j,b.e)),e.tb(4,49152,null,0,d.zb,[e.h,e.k,e.A],null,null),(l()(),e.ub(5,0,null,0,2,"ion-title",[],null,null,null,b.i,b.d)),e.tb(6,49152,null,0,d.xb,[e.h,e.k,e.A],null,null),(l()(),e.Nb(-1,0,[" Hitchwiki POI Generator "])),(l()(),e.ub(8,0,null,null,158,"ion-content",[],null,null,null,b.g,b.b)),e.tb(9,49152,null,0,d.r,[e.h,e.k,e.A],null,null),(l()(),e.ub(10,0,null,0,148,"div",[["class","container"]],null,null,null,null,null)),(l()(),e.ub(11,0,null,null,13,"header",[["class","text-center"]],null,null,null,null,null)),(l()(),e.ub(12,0,null,null,1,"h1",[],null,null,null,null,null)),(l()(),e.Nb(-1,null,[" Welcome to hitchwiki-poi generator! "])),(l()(),e.ub(14,0,null,null,0,"img",[["alt","Logo"],["src","assets/images/undraw_directions_x53j.svg"],["width","300"]],null,null,null,null,null)),(l()(),e.ub(15,0,null,null,8,"p",[],null,null,null,null,null)),(l()(),e.Nb(-1,null,[" Have you ever found yourself on the side of a highway with "])),(l()(),e.ub(17,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),e.Nb(-1,null,["no way"])),(l()(),e.Nb(-1,null,[" to catch a ride? "])),(l()(),e.ub(20,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.Nb(-1,null,[" Well, fear no more, "])),(l()(),e.ub(22,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),e.Nb(-1,null,["we've got you covered!"])),(l()(),e.ub(24,0,null,null,0,"hr",[],null,null,null,null,null)),(l()(),e.ub(25,0,null,null,25,"section",[],null,null,null,null,null)),(l()(),e.ub(26,0,null,null,1,"h3",[["hidden",""]],null,null,null,null,null)),(l()(),e.Nb(-1,null,["Introduction"])),(l()(),e.ub(28,0,null,null,15,"p",[["class","text-center"]],null,null,null,null,null)),(l()(),e.Nb(-1,null,[" We have gathered all places defined by "])),(l()(),e.ub(30,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),e.Nb(-1,null,["Hitchwiki\xa0community"])),(l()(),e.ub(32,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.Nb(-1,null,[" and provided you with coordinates, comments and ease of hitchhiking rating in form of "])),(l()(),e.ub(34,0,null,null,1,"a",[["href","https://en.wikipedia.org/wiki/Point_of_interest"]],null,null,null,null,null)),(l()(),e.Nb(-1,null,["POI"])),(l()(),e.Nb(-1,null,[" points. "])),(l()(),e.ub(37,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.Nb(-1,null,[" Below you can find ready to download "])),(l()(),e.ub(39,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),e.Nb(-1,null,["kml\xa0files "])),(l()(),e.ub(41,0,null,null,1,"a",[["href","#legend"]],null,null,null,null,null)),(l()(),e.Nb(-1,null,["compatible"])),(l()(),e.Nb(-1,null,[" with Maps.me offline maps "])),(l()(),e.ub(44,0,null,null,0,"hr",[],null,null,null,null,null)),(l()(),e.ub(45,0,null,null,4,"p",[["class","text-center"]],null,null,null,null,null)),(l()(),e.Nb(-1,null,[" You can use the generator "])),(l()(),e.ub(47,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),e.Nb(-1,null,["offline"])),(l()(),e.Nb(-1,null,[" and even install it on mobile devices! "])),(l()(),e.ub(50,0,null,null,0,"hr",[],null,null,null,null,null)),(l()(),e.ub(51,0,null,null,21,"section",[],null,null,null,null,null)),(l()(),e.ub(52,0,null,null,1,"h3",[["hidden",""]],null,null,null,null,null)),(l()(),e.Nb(-1,null,["Important links"])),(l()(),e.ub(54,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Nb(-1,null,["Bur first check out some important links:"])),(l()(),e.ub(56,0,null,null,15,"ul",[],null,null,null,null,null)),(l()(),e.ub(57,0,null,null,2,"li",[],null,null,null,null,null)),(l()(),e.ub(58,0,null,null,1,"a",[["href","https://maps.me/download"]],null,null,null,null,null)),(l()(),e.Nb(-1,null,[" Download Maps.me mobile app "])),(l()(),e.ub(60,0,null,null,2,"li",[],null,null,null,null,null)),(l()(),e.ub(61,0,null,null,1,"a",[["href","https://support.maps.me/hc/en-us/articles/207895029-How-can-I-import-bookmarks-"]],null,null,null,null,null)),(l()(),e.Nb(-1,null,[" How to import kml file to Maps.me "])),(l()(),e.ub(63,0,null,null,8,"li",[],null,null,null,null,null)),(l()(),e.ub(64,0,null,null,1,"a",[["href","http://hitchwiki.org/maps/"]],null,null,null,null,null)),(l()(),e.Nb(-1,null,["Hitchwiki maps website"])),(l()(),e.ub(66,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e.Nb(-1,null,[" - content used under license "])),(l()(),e.ub(68,0,null,null,1,"a",[["href","http://creativecommons.org/licenses/by-sa/3.0/"],["rel","license"]],null,null,null,null,null)),(l()(),e.Nb(-1,null,["CC BY-SA 3.0"])),(l()(),e.ub(70,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e.Nb(-1,null,[" with changed placemark styles to comply with Maps.me"])),(l()(),e.ub(72,0,null,null,0,"hr",[],null,null,null,null,null)),(l()(),e.ub(73,0,null,null,24,"section",[],null,null,null,null,null)),(l()(),e.ub(74,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),e.Nb(-1,null,["Countries"])),(l()(),e.ub(76,0,null,null,1,"label",[["for","countrySearch"],["hidden",""]],null,null,null,null,null)),(l()(),e.Nb(-1,null,["Search country"])),(l()(),e.ub(78,0,null,null,5,"input",[["class","form-control"],["id","countrySearch"],["name","countrySearch"],["placeholder","Search country..."]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"keydown"],[null,"keyup"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],(function(l,n,u){var t=!0,o=l.component;return"input"===n&&(t=!1!==e.Gb(l,79)._handleInput(u.target.value)&&t),"blur"===n&&(t=!1!==e.Gb(l,79).onTouched()&&t),"compositionstart"===n&&(t=!1!==e.Gb(l,79)._compositionStart()&&t),"compositionend"===n&&(t=!1!==e.Gb(l,79)._compositionEnd(u.target.value)&&t),"ngModelChange"===n&&(t=!1!==(o.searchCountry=u)&&t),"keydown"===n&&(t=!1!==o.searchMatchingCountries()&&t),"keyup"===n&&(t=!1!==o.searchMatchingCountries()&&t),t}),null,null)),e.tb(79,16384,null,0,s.c,[e.E,e.k,[2,s.a]],null,null),e.Kb(1024,null,s.i,(function(l){return[l]}),[s.c]),e.tb(81,671744,null,0,s.m,[[8,null],[8,null],[8,null],[6,s.i]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),e.Kb(2048,null,s.j,null,[s.m]),e.tb(83,16384,null,0,s.k,[[4,s.j]],null,null),(l()(),e.ub(84,0,null,null,13,"div",[["class","table-responsive"]],null,null,null,null,null)),(l()(),e.ub(85,0,null,null,12,"table",[["class","table table-striped"]],null,null,null,null,null)),(l()(),e.ub(86,0,null,null,8,"thead",[],null,null,null,null,null)),(l()(),e.ub(87,0,null,null,7,"tr",[],null,null,null,null,null)),(l()(),e.ub(88,0,null,null,1,"th",[["scope","col"]],null,null,null,null,null)),(l()(),e.Nb(-1,null,["#"])),(l()(),e.ub(90,0,null,null,1,"th",[["scope","col"]],null,null,null,null,null)),(l()(),e.Nb(-1,null,["Country"])),(l()(),e.ub(92,0,null,null,1,"th",[["scope","col"]],null,null,null,null,null)),(l()(),e.Nb(-1,null,["Number of Places"])),(l()(),e.ub(94,0,null,null,0,"th",[["scope","col"]],null,null,null,null,null)),(l()(),e.ub(95,0,null,null,2,"tbody",[],null,null,null,null,null)),(l()(),e.jb(16777216,null,null,1,null,O)),e.tb(97,278528,null,0,i.k,[e.P,e.M,e.t],{ngForOf:[0,"ngForOf"]},null),(l()(),e.ub(98,0,null,null,47,"section",[],null,null,null,null,null)),(l()(),e.ub(99,0,null,null,1,"h3",[["id","legend"]],null,null,null,null,null)),(l()(),e.Nb(-1,null,["Legend"])),(l()(),e.ub(101,0,null,null,43,"table",[["class","table table-striped"]],null,null,null,null,null)),(l()(),e.ub(102,0,null,null,5,"thead",[],null,null,null,null,null)),(l()(),e.ub(103,0,null,null,4,"tr",[],null,null,null,null,null)),(l()(),e.ub(104,0,null,null,1,"th",[["scope","col"]],null,null,null,null,null)),(l()(),e.Nb(-1,null,["Rating"])),(l()(),e.ub(106,0,null,null,1,"th",[["scope","col"]],null,null,null,null,null)),(l()(),e.Nb(-1,null,["Icon"])),(l()(),e.ub(108,0,null,null,36,"tbody",[],null,null,null,null,null)),(l()(),e.ub(109,0,null,null,5,"tr",[],null,null,null,null,null)),(l()(),e.ub(110,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Nb(-1,null,["Very good"])),(l()(),e.ub(112,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),e.ub(113,0,null,null,1,"fa-icon",[["class","rating-very-good ng-fa-icon"]],[[1,"title",0],[8,"innerHTML",1]],null,null,r.d,r.c)),e.tb(114,573440,null,0,p.c,[m.b,p.a,p.d,[2,p.i]],{icon:[0,"icon"]},null),(l()(),e.ub(115,0,null,null,5,"tr",[],null,null,null,null,null)),(l()(),e.ub(116,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Nb(-1,null,["Good"])),(l()(),e.ub(118,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),e.ub(119,0,null,null,1,"fa-icon",[["class","rating-good ng-fa-icon"]],[[1,"title",0],[8,"innerHTML",1]],null,null,r.d,r.c)),e.tb(120,573440,null,0,p.c,[m.b,p.a,p.d,[2,p.i]],{icon:[0,"icon"]},null),(l()(),e.ub(121,0,null,null,5,"tr",[],null,null,null,null,null)),(l()(),e.ub(122,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Nb(-1,null,["Average"])),(l()(),e.ub(124,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),e.ub(125,0,null,null,1,"fa-icon",[["class","rating-average ng-fa-icon"]],[[1,"title",0],[8,"innerHTML",1]],null,null,r.d,r.c)),e.tb(126,573440,null,0,p.c,[m.b,p.a,p.d,[2,p.i]],{icon:[0,"icon"]},null),(l()(),e.ub(127,0,null,null,5,"tr",[],null,null,null,null,null)),(l()(),e.ub(128,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Nb(-1,null,["Bad"])),(l()(),e.ub(130,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),e.ub(131,0,null,null,1,"fa-icon",[["class","rating-bad ng-fa-icon"]],[[1,"title",0],[8,"innerHTML",1]],null,null,r.d,r.c)),e.tb(132,573440,null,0,p.c,[m.b,p.a,p.d,[2,p.i]],{icon:[0,"icon"]},null),(l()(),e.ub(133,0,null,null,5,"tr",[],null,null,null,null,null)),(l()(),e.ub(134,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Nb(-1,null,["Senseless"])),(l()(),e.ub(136,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),e.ub(137,0,null,null,1,"fa-icon",[["class","rating-senseless ng-fa-icon"]],[[1,"title",0],[8,"innerHTML",1]],null,null,r.d,r.c)),e.tb(138,573440,null,0,p.c,[m.b,p.a,p.d,[2,p.i]],{icon:[0,"icon"]},null),(l()(),e.ub(139,0,null,null,5,"tr",[],null,null,null,null,null)),(l()(),e.ub(140,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Nb(-1,null,["Unknown"])),(l()(),e.ub(142,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),e.ub(143,0,null,null,1,"fa-icon",[["class","rating-na ng-fa-icon"]],[[1,"title",0],[8,"innerHTML",1]],null,null,r.d,r.c)),e.tb(144,573440,null,0,p.c,[m.b,p.a,p.d,[2,p.i]],{icon:[0,"icon"]},null),(l()(),e.ub(145,0,null,null,0,"hr",[],null,null,null,null,null)),(l()(),e.ub(146,0,null,null,12,"section",[],null,null,null,null,null)),(l()(),e.ub(147,0,null,null,1,"h3",[["hidden",""]],null,null,null,null,null)),(l()(),e.Nb(-1,null,["Advanced options"])),(l()(),e.ub(149,0,null,null,9,"ngb-accordion",[["class","accordion"],["role","tablist"]],[[1,"aria-multiselectable",0]],null,null,o.e,o.c)),e.tb(150,2146304,[["acc",4]],1,c.a,[c.b],null,null),e.Lb(603979776,1,{panels:1}),(l()(),e.ub(152,0,null,null,6,"ngb-panel",[["title","Advanced Options"]],null,null,null,null,null)),e.tb(153,2113536,[[1,4]],3,c.A,[],{title:[0,"title"]},null),e.Lb(603979776,2,{titleTpls:1}),e.Lb(603979776,3,{headerTpls:1}),e.Lb(603979776,4,{contentTpls:1}),(l()(),e.jb(0,null,null,1,null,M)),e.tb(158,16384,[[4,4]],0,c.B,[e.M],null,null),(l()(),e.ub(159,0,null,0,7,"footer",[["class","text-center"]],null,null,null,null,null)),(l()(),e.ub(160,0,null,null,0,"hr",[],null,null,null,null,null)),(l()(),e.ub(161,0,null,null,5,"p",[],null,null,null,null,null)),(l()(),e.Nb(162,null,[" HitchwikiPOI v"," "])),(l()(),e.ub(163,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.Nb(-1,null,[" More info about project on "])),(l()(),e.ub(165,0,null,null,1,"a",[["href","https://github.com/kp-marczynski/hitchwiki-poi"]],null,null,null,null,null)),(l()(),e.Nb(-1,null,["Github"]))],(function(l,n){var u=n.component;l(n,81,0,"countrySearch",u.searchCountry),l(n,97,0,u.searchCountries),l(n,114,0,u.faMapMarkerAlt),l(n,120,0,u.faMapMarkerAlt),l(n,126,0,u.faMapMarkerAlt),l(n,132,0,u.faMapMarkerAlt),l(n,138,0,u.faMapMarkerAlt),l(n,144,0,u.faMapMarkerAlt),l(n,153,0,"Advanced Options")}),(function(l,n){var u=n.component;l(n,78,0,e.Gb(n,83).ngClassUntouched,e.Gb(n,83).ngClassTouched,e.Gb(n,83).ngClassPristine,e.Gb(n,83).ngClassDirty,e.Gb(n,83).ngClassValid,e.Gb(n,83).ngClassInvalid,e.Gb(n,83).ngClassPending),l(n,113,0,e.Gb(n,114).title,e.Gb(n,114).renderedIconHTML),l(n,119,0,e.Gb(n,120).title,e.Gb(n,120).renderedIconHTML),l(n,125,0,e.Gb(n,126).title,e.Gb(n,126).renderedIconHTML),l(n,131,0,e.Gb(n,132).title,e.Gb(n,132).renderedIconHTML),l(n,137,0,e.Gb(n,138).title,e.Gb(n,138).renderedIconHTML),l(n,143,0,e.Gb(n,144).title,e.Gb(n,144).renderedIconHTML),l(n,149,0,!e.Gb(n,150).closeOtherPanels),l(n,162,0,u.VERSION)}))}function x(l){return e.Pb(0,[(l()(),e.ub(0,0,null,null,1,"app-home",[],null,null,null,G,N)),e.tb(1,114688,null,0,k,[E.c,s.d],null,null)],(function(l,n){l(n,1,0)}),null)}var T=e.qb("app-home",k,x,{},{},[]),I=u("ZYCi");u.d(n,"HomePageModuleNgFactory",(function(){return _}));var _=e.rb(t,[],(function(l){return e.Db([e.Eb(512,e.j,e.cb,[[8,[o.a,o.b,o.j,o.k,o.g,o.h,o.i,r.b,r.a,a.a,T]],[3,e.j],e.y]),e.Eb(4608,i.n,i.m,[e.v,[2,i.C]]),e.Eb(4608,s.q,s.q,[]),e.Eb(4608,d.a,d.a,[e.A,e.g]),e.Eb(4608,d.Db,d.Db,[d.a,e.j,e.r]),e.Eb(4608,d.Gb,d.Gb,[d.a,e.j,e.r]),e.Eb(4608,c.t,c.t,[e.j,e.r,c.jb,c.u]),e.Eb(4608,E.i,E.s,[i.c,e.C,E.q]),e.Eb(4608,E.t,E.t,[E.i,E.r]),e.Eb(5120,E.n,E.o,[]),e.Eb(4608,E.j,E.j,[E.n,i.c]),e.Eb(5120,E.a,(function(l,n){return[l,new E.k(n)]}),[E.t,E.j]),e.Eb(4608,E.p,E.p,[]),e.Eb(6144,E.l,null,[E.p]),e.Eb(4608,E.h,E.h,[E.l]),e.Eb(6144,E.b,null,[E.h]),e.Eb(4608,E.g,E.m,[E.b,e.r]),e.Eb(4608,E.c,E.c,[E.g]),e.Eb(4608,s.d,s.d,[]),e.Eb(1073742336,i.b,i.b,[]),e.Eb(1073742336,s.p,s.p,[]),e.Eb(1073742336,s.g,s.g,[]),e.Eb(1073742336,d.Bb,d.Bb,[]),e.Eb(1073742336,c.c,c.c,[]),e.Eb(1073742336,c.f,c.f,[]),e.Eb(1073742336,c.g,c.g,[]),e.Eb(1073742336,c.k,c.k,[]),e.Eb(1073742336,c.l,c.l,[]),e.Eb(1073742336,c.q,c.q,[]),e.Eb(1073742336,c.r,c.r,[]),e.Eb(1073742336,c.v,c.v,[]),e.Eb(1073742336,c.z,c.z,[]),e.Eb(1073742336,c.E,c.E,[]),e.Eb(1073742336,c.H,c.H,[]),e.Eb(1073742336,c.K,c.K,[]),e.Eb(1073742336,c.N,c.N,[]),e.Eb(1073742336,c.S,c.S,[]),e.Eb(1073742336,c.V,c.V,[]),e.Eb(1073742336,c.W,c.W,[]),e.Eb(1073742336,c.X,c.X,[]),e.Eb(1073742336,c.w,c.w,[]),e.Eb(1073742336,E.f,E.f,[]),e.Eb(1073742336,E.e,E.e,[]),e.Eb(1073742336,E.d,E.d,[]),e.Eb(1073742336,s.o,s.o,[]),e.Eb(1073742336,p.j,p.j,[]),e.Eb(1073742336,I.n,I.n,[[2,I.s],[2,I.m]]),e.Eb(1073742336,t,t,[]),e.Eb(256,E.q,"XSRF-TOKEN",[]),e.Eb(256,E.r,"X-XSRF-TOKEN",[]),e.Eb(1024,I.k,(function(){return[[{path:"",component:k}]]}),[])])}))},kiQV:function(l){l.exports={a:"2.0.0"}}}]);