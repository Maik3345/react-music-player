(this["webpackJsonpreact-music-player"]=this["webpackJsonpreact-music-player"]||[]).push([[0],{127:function(e,t,n){"use strict";var r=n(0),a=n.n(r),c=(n(130),n(290)),s=n(292),o=n(36),i=n.n(o),u=function(e){var t=e.title,n=e.subtitle,r=e.image,o=e.variant,u=e.style,l=e.handleClick;return a.a.createElement("div",{className:i.a.main,style:u,onClick:l},a.a.createElement(c.a,{alt:t,src:r,className:i.a.avatar,variant:o}),(t||n)&&a.a.createElement("div",{className:i.a.titles},t&&a.a.createElement("div",{className:i.a.title},a.a.createElement("div",{className:i.a.link},t)),n&&a.a.createElement(s.a,{className:i.a.subtitle,variant:"subtitle1"},n)))},l=n(131),m=n.n(l),b=function(e){return a.a.createElement("div",{className:m.a.main},e.children)},f=n(132),d=n.n(f),p=function(e){var t=e.tag,n=e.label;return a.a.createElement("div",{className:d.a.main},a.a.createElement(s.a,{color:"textPrimary",variant:t,style:{fontWeight:"bold"}},n))};n.d(t,"a",function(){return u}),n.d(t,"b",function(){return b}),n.d(t,"c",function(){return p})},130:function(e,t,n){},131:function(e,t,n){e.exports={main:"styles_main__3cpar"}},132:function(e,t,n){},140:function(e,t,n){e.exports=n(276)},145:function(e,t,n){},19:function(e,t,n){e.exports={main:"styles_main__2uXmG",banner:"styles_banner__SLtPd",info:"styles_info__1Wn5e",title:"styles_title__kfpXV",songList:"styles_songList__2WURI"}},276:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(27),s=n.n(c),o=(n(145),n(296)),i=n(293),u=n(38),l=n(15),m=n(63),b=n(7),f=n.n(b),d=n(39),p=n(29),v=n(126),O=n(24),g=n(10),j=n(129),h=n(138),y=n(139),_=n(8),E=n(17),w=n(28),k=n(292),T=n(9),x=n(64),A=n.n(x),P=function(e){var t=e.order,n=e.song,r=e.handleClick;return a.a.createElement("div",{className:A.a.main},a.a.createElement("div",{className:A.a.name,onClick:r},a.a.createElement("span",null,t),a.a.createElement(k.a,{variant:"subtitle1",style:{fontWeight:"bold"}},n.name)),a.a.createElement("div",{className:A.a.time},!n.previewUrl&&a.a.createElement(k.a,{variant:"subtitle2",color:"error",style:{marginRight:"2rem"}},"No hay preview"),a.a.createElement(k.a,{variant:"subtitle1"},Object(T.msToTime)(n.durationMs))))},N=n(19),R=n.n(N),S=function(e){var t=e.album,n=e.songs,r=e.suggestedSongs,c=n.reduce(function(e,t){return e+Number(t.durationMs)},0);return a.a.createElement("div",{className:R.a.main},a.a.createElement("div",{className:R.a.banner},a.a.createElement(T.Item,{image:t.image,variant:"rounded",style:{cursor:"default"}}),a.a.createElement("div",{className:R.a.info},a.a.createElement(T.Title,{tag:"h5",label:t.name}),a.a.createElement(k.a,{className:R.a.subtitle,variant:"subtitle1"},"\xc1lbum \u2022 ".concat(t.name)),a.a.createElement(k.a,{className:R.a.subtitle,variant:"subtitle1"},"".concat(n.length," canciones \u2022 ").concat(Object(T.msToTime)(c))))),a.a.createElement("div",{className:R.a.songs},a.a.createElement("div",{className:R.a.title},a.a.createElement(T.Title,{tag:"h5",label:"Canciones"})),a.a.createElement("div",{className:R.a.songList},n.map(function(e,t){return a.a.createElement(P,{key:t,order:t+1,song:e,handleClick:function(){return!!e.previewUrl&&window.open(e.previewUrl,"_blank")}})}))),a.a.createElement("div",{className:R.a.songs},a.a.createElement("div",{className:R.a.title},a.a.createElement(T.Title,{tag:"h5",label:"Sugerencias"})),a.a.createElement("div",{className:R.a.songList},r.map(function(e,t){return a.a.createElement(P,{key:t,order:t+1,song:e,handleClick:function(){return!!e.previewUrl&&window.open(e.previewUrl,"_blank")}})}))))},C=n(14),U=Object(C.createAsyncAction)("[Album]: Request all the songs from the album.","[Album]: The songs of the album were consulted correctly.","[Album]: There was an error checking the songs on the album.")(),D=Object(C.createReducer)([]).handleAction(U.success,function(e,t){var n=t.payload;return[].concat(Object(E.a)(e),Object(E.a)(n))}),I=Object(g.combineReducers)({songs:D}),q=f.a.mark(L);function L(e){var t,n;return f.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.payload,r.prev=1,r.next=4,Object(_.b)(T.getAllSongs,t);case 4:return n=r.sent,r.next=7,Object(_.c)(U.success(n));case 7:r.next=13;break;case 9:return r.prev=9,r.t0=r.catch(1),r.next=13,Object(_.c)(U.failure(r.t0));case 13:case"end":return r.stop()}},q,null,[[1,9]])}var M=[Object(_.e)(U.request,L)],H=n(134),W=n(37),V=n.n(W),X=function(e){var t=e.artist,n=e.albums,c=e.goTo,s=Object(r.useState)([]),o=Object(w.a)(s,2),i=o[0],u=o[1],l=Object(r.useState)(""),m=Object(w.a)(l,2),b=m[0],f=m[1];Object(r.useEffect)(function(){if(i.length){var e=i[Math.floor(Math.random()*i.length)];f(e)}},[i]);return a.a.createElement("div",{className:V.a.main},a.a.createElement(H.a,{src:t.image,getColors:u}),a.a.createElement("div",{className:V.a.banner,style:{backgroundImage:"url(".concat(t.image,")"),backgroundColor:b}},a.a.createElement("div",{className:V.a.info},a.a.createElement(T.Title,{tag:"h3",label:t.name}),a.a.createElement(k.a,{className:V.a.subtitle,variant:"subtitle1",color:"primary"},"Popularidad \u2022 ".concat(t.popularity)))),a.a.createElement("div",{className:V.a.albums},a.a.createElement("div",{className:V.a.title},a.a.createElement(T.Title,{tag:"h4",label:"\xc1lbumes"})),a.a.createElement(T.ItemList,null,n.map(function(e,t){return a.a.createElement(T.Item,{key:t,image:e.image,title:e.name,subtitle:"Canciones \u2022 ".concat(e.totalTracks),variant:"rounded",handleClick:function(){return function(e){var t=n.filter(function(t){return t.id!==e.id}).sort(function(){return.5-Math.random()}).slice(0,2);c(e.location,{albumSelected:e,suggestedAlbums:t})}(e)}})}))))},G=Object(C.createAsyncAction)("[Artists]: Request an artist's albums.","[Artists]: The albums have been consulted correctly.","[Artists]: Couldn't check artist albums.")(),J=n(11),B=Object(C.createReducer)([]).handleAction(G.success,function(e,t){var n=t.payload;return[].concat(Object(E.a)(e),Object(E.a)(n))}),Y=Object(g.combineReducers)({albums:B}),z=f.a.mark(F);function F(e){var t,n;return f.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.payload,r.prev=1,r.next=4,Object(_.b)(T.getAllAlbums,t);case 4:return n=r.sent,r.next=7,Object(_.c)(G.success(n));case 7:r.next=13;break;case 9:return r.prev=9,r.t0=r.catch(1),r.next=13,Object(_.c)(G.failure(r.t0));case 13:case"end":return r.stop()}},z,null,[[1,9]])}var K=[Object(_.f)(G.request,F)],Q=n(66),Z=n.n(Q),$=n(295),ee=n(136),te=n.n(ee),ne=function(e){var t=e.artists,n=e.goTo,r=e.getRandomSong;return a.a.createElement("div",{className:Z.a.main},a.a.createElement("div",{className:Z.a.artists},a.a.createElement("div",{className:Z.a.title},a.a.createElement(T.Title,{tag:"h4",label:"Artistas"})),a.a.createElement(T.ItemList,null,t.map(function(e,t){return a.a.createElement(T.Item,{key:t,image:e.image,title:e.name,subtitle:"Popularidad \u2022 ".concat(e.popularity),style:{textAlign:"center"},handleClick:function(){return n(e.location,e)}})}))),a.a.createElement($.a,{color:"primary",style:{position:"fixed",bottom:30,right:30},onClick:r},a.a.createElement(te.a,null)))},re=Object(C.createAsyncAction)("[Home]: Request the list of genres.","[Home]: The list of genres was consulted correctly.","[Home]: Could not check the list of genres.")(),ae=Object(C.createAsyncAction)("[Home]: Request the list of artists.","[Home]: The list of artists was consulted correctly.","[Home]: Could not check the list of artists.")(),ce=Object(C.createAsyncAction)("[Home]: Request the random song.","[Home]: The random song was consulted correctly.","[Home]: Could not check the random song.")(),se=Object(C.createReducer)([]).handleAction(re.success,function(e,t){return t.payload}),oe=Object(C.createReducer)([]).handleAction(ae.success,function(e,t){return t.payload}),ie=Object(C.createReducer)(null).handleAction(ce.success,function(e,t){return t.payload}),ue=Object(g.combineReducers)({genres:se,artists:oe,randomSong:ie}),le=f.a.mark(fe),me=f.a.mark(de),be=f.a.mark(pe);function fe(){var e;return f.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(_.b)(T.getAllGenres);case 3:return e=t.sent,t.next=6,Object(_.c)(re.success(e));case 6:t.next=12;break;case 8:return t.prev=8,t.t0=t.catch(0),t.next=12,Object(_.c)(re.failure(t.t0));case 12:case"end":return t.stop()}},le,null,[[0,8]])}function de(){var e;return f.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(_.b)(T.getAllArtists);case 3:return e=t.sent,t.next=6,Object(_.c)(ae.success(e));case 6:t.next=12;break;case 8:return t.prev=8,t.t0=t.catch(0),t.next=12,Object(_.c)(ae.failure(t.t0));case 12:case"end":return t.stop()}},me,null,[[0,8]])}function pe(){var e,t,n;return f.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,Object(_.d)(function(e){return e.home.genres});case 3:return e=r.sent,t=e[Math.floor(Math.random()*e.length)],r.next=7,Object(_.b)(T.getRandomSong,t);case 7:return n=r.sent,r.next=10,Object(_.c)(ce.success(n));case 10:r.next=16;break;case 12:return r.prev=12,r.t0=r.catch(0),r.next=16,Object(_.c)(ce.failure(r.t0));case 16:case"end":return r.stop()}},be,null,[[0,12]])}var ve=[Object(_.f)(re.request,fe),Object(_.f)(ae.request,de),Object(_.f)(ce.request,pe)],Oe={album:I,artist:Y,home:ue},ge=[].concat(Object(E.a)(ve),Object(E.a)(K),Object(E.a)(M)),je=f.a.mark(ke);function he(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function ye(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?he(Object(n),!0).forEach(function(t){Object(d.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):he(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var _e=Object(j.composeWithDevTools)(ye({},p.a.REDUX_DEV_TOOLS)),Ee=Object(O.a)(),we=Object(g.combineReducers)(ye({router:Object(u.b)(Ee)},Oe));function ke(){return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(_.a)(ge);case 2:case"end":return e.stop()}},je)}var Te=Object(y.a)(),xe=[Object(v.a)(Ee),Te],Ae=_e(g.applyMiddleware.apply(void 0,xe)),Pe=Object(g.createStore)(we,{},Ae);Te.run(ke);Object(h.a)(Pe);var Ne=Pe,Re=[{path:"/",component:function(){var e=Object(l.d)(),t=Object(l.e)(function(e){return e.home.artists}),n=Object(l.e)(function(e){return e.home.randomSong});Object(r.useEffect)(function(){e(ae.request()),e(re.request())},[e]),Object(r.useEffect)(function(){n&&(n.previewUrl?window.open(n.previewUrl,"_blank"):e(ce.request()))},[n]);var c=Object(r.useCallback)(function(t,n){return e(Object(J.d)(t,n))},[e]),s=Object(r.useCallback)(function(){return e(ce.request())},[e]);return Object(r.useMemo)(function(){return a.a.createElement(ne,{artists:t,goTo:c,getRandomSong:s})},[t])},exact:!0},{path:"/artist/:id/",component:function(){var e=Object(m.e)().state,t=Object(m.f)().id,n=function(e){return e.idArtist===t},c=Object(l.d)(),s=Object(l.e)(function(e){return e.artist.albums}),o=Object(r.useState)([]),i=Object(w.a)(o,2),u=i[0],b=i[1];Object(r.useEffect)(function(){var e=s.find(n);t&&!e&&c(G.request(t))},[s,t,c]),Object(r.useEffect)(function(){if(t&&s.length){var e=s.filter(n);b(e)}},[t,s]);var f=Object(r.useCallback)(function(e,t){return c(Object(J.d)(e,t))},[c]);return Object(r.useMemo)(function(){return a.a.createElement(X,{artist:e,albums:u,goTo:f})},[e,u])},exact:!0},{path:"/album/:id/",component:function(){var e=Object(m.e)().state,t=Object(m.f)().id,n=e.suggestedAlbums.map(function(e){return e.id}),c=function(e){return e.idAlbum===t},s=Object(l.d)(),o=Object(l.e)(function(e){return e.album.songs}),i=Object(r.useState)([]),u=Object(w.a)(i,2),b=u[0],f=u[1],d=Object(r.useState)([]),p=Object(w.a)(d,2),v=p[0],O=p[1],g=Object(r.useRef)(!1);return Object(r.useEffect)(function(){var e=o.find(c);!t||e||g.current||([].concat(Object(E.a)(n),[t]).forEach(function(e){return s(U.request(e))}),g.current=!0)},[o,t,s]),Object(r.useEffect)(function(){if(t&&o.length){var e=o.filter(c),r=o.filter(function(e){return function(e,t){return t.includes(e.idAlbum)}(e,n)}).sort(function(){return.5-Math.random()}).slice(0,5);O(r),f(e)}},[t,o]),Object(r.useMemo)(function(){return a.a.createElement(S,{album:e.albumSelected,songs:b,suggestedSongs:v})},[e,b,v])},exact:!0}],Se=n(137),Ce=Object(Se.a)({palette:{common:{black:"rgba(0, 0, 0, 1)",white:"rgba(255, 255, 255, 1)"},background:{paper:"rgba(255, 255, 255, 1)",default:"rgba(0, 0, 0, 1)"},primary:{light:"rgba(255, 90, 54, 1)",main:"rgba(255, 0, 0, 1)",dark:"rgba(194, 0, 0, 1)",contrastText:"rgba(255, 255, 255, 1)"},secondary:{light:"rgba(99, 250, 255, 1)",main:"rgba(0, 199, 206, 1)",dark:"rgba(0, 150, 157, 1)",contrastText:"rgba(255, 255, 255, 1)"},error:{light:"#e57373",main:"#f44336",dark:"#d32f2f",contrastText:"#fff"},text:{primary:"rgba(255, 255, 255, 1)",secondary:"rgba(170, 170, 170, 1)",disabled:"rgba(255, 255, 255, 1)",hint:"rgba(255, 255, 255, 1)"}},typography:{fontFamily:['"Open Sans"','"Segoe UI"',"Roboto","Arial","sans-serif"].join(",")}}),Ue=function(){return a.a.createElement(l.a,{store:Ne},a.a.createElement(u.a,{history:Ee},a.a.createElement(i.a,{theme:Ce},a.a.createElement(o.a,null),a.a.createElement(m.c,null,Re.map(function(e){return a.a.createElement(m.a,Object.assign({key:e.path},e))})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(a.a.createElement(Ue,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},29:function(e,t,n){"use strict";var r=n(39);function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}var c=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach(function(t){Object(r.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},{API_URL:"https://rubytify.herokuapp.com/api/v1",PLAYER:{initialVolume:10,maxVolume:100,volumeIncrement:5}},{},{REDUX_DEV_TOOLS:{trace:!1}});t.a=c},36:function(e,t,n){e.exports={main:"styles_main__3pv9m",avatar:"styles_avatar__206GC",link:"styles_link__1C8ur",titles:"styles_titles__2lWX_"}},37:function(e,t,n){e.exports={main:"styles_main__143pa",banner:"styles_banner__1vJvt",info:"styles_info__7qPPn",actions:"styles_actions__iXoc8",title:"styles_title__11CTh"}},64:function(e,t,n){e.exports={main:"styles_main__3DYtz",name:"styles_name__3qjjV",time:"styles_time__TsZKE"}},66:function(e,t,n){e.exports={main:"styles_main__EeQTN",title:"styles_title__2Vc-0"}},9:function(e,t,n){"use strict";var r=n(92);n.d(t,"getAllAlbums",function(){return r.a}),n.d(t,"getAllArtists",function(){return r.b}),n.d(t,"getAllGenres",function(){return r.c}),n.d(t,"getAllSongs",function(){return r.d}),n.d(t,"getRandomSong",function(){return r.e});var a=n(127);n.d(t,"Item",function(){return a.a}),n.d(t,"ItemList",function(){return a.b}),n.d(t,"Title",function(){return a.c});var c=n(93);n.o(c,"msToTime")&&n.d(t,"msToTime",function(){return c.msToTime});var s=n(98);n.d(t,"msToTime",function(){return s.a})},92:function(e,t,n){"use strict";n.d(t,"b",function(){return m}),n.d(t,"a",function(){return b}),n.d(t,"d",function(){return f}),n.d(t,"c",function(){return d}),n.d(t,"e",function(){return p});var r=n(7),a=n.n(r),c=n(39),s=n(42),o=n(29),i=n(67);function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach(function(t){Object(c.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var m=function(){var e=Object(s.a)(a.a.mark(function e(){var t,n,r,c;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(o.a.API_URL,"/artists"));case 3:return t=e.sent,e.next=6,t.json();case 6:return n=e.sent,r=n.data,c=void 0===r?[]:r,e.abrupt("return",c.map(function(e){return l({location:"/artist/".concat(e.id,"/"),spotifyUrl:e.spotify_url,spotifyId:e.spotify_id,createdAt:new Date(e.created_at),updatedAt:new Date(e.updated_at)},Object(i.a)(["id","name","image","genres","popularity"],e))}));case 12:return e.prev=12,e.t0=e.catch(0),console.error("The list of artists of the api could not be consulted.",e.t0),e.abrupt("return",[]);case 16:case"end":return e.stop()}},e,null,[[0,12]])}));return function(){return e.apply(this,arguments)}}(),b=function(){var e=Object(s.a)(a.a.mark(function e(t){var n,r,c,s;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(o.a.API_URL,"/artists/").concat(t,"/albums"));case 3:return n=e.sent,e.next=6,n.json();case 6:return r=e.sent,c=r.data,s=void 0===c?[]:c,e.abrupt("return",s.map(function(e){return l({idArtist:t,location:"/album/".concat(e.id,"/"),spotifyUrl:e.spotify_url,totalTracks:e.total_tracks},Object(i.a)(["id","name","image"],e))}));case 12:return e.prev=12,e.t0=e.catch(0),console.error("Couldn't check artist: \"".concat(t,'" albums.'),e.t0),e.abrupt("return",[]);case 16:case"end":return e.stop()}},e,null,[[0,12]])}));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=Object(s.a)(a.a.mark(function e(t){var n,r,c,s;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(o.a.API_URL,"/albums/").concat(t,"/songs"));case 3:return n=e.sent,e.next=6,n.json();case 6:return r=e.sent,c=r.data,s=void 0===c?[]:c,e.abrupt("return",s.map(function(e){return l({idAlbum:t,spotifyUrl:e.spotify_url,previewUrl:e.preview_url,durationMs:e.duration_ms},Object(i.a)(["id","name","explicit"],e))}));case 12:return e.prev=12,e.t0=e.catch(0),console.error('Could not check the list of songs for the album: "'.concat(t,'".'),e.t0),e.abrupt("return",[]);case 16:case"end":return e.stop()}},e,null,[[0,12]])}));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=Object(s.a)(a.a.mark(function e(){var t,n,r,c;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(o.a.API_URL,"/genres"));case 3:return t=e.sent,e.next=6,t.json();case 6:return n=e.sent,r=n.data,c=void 0===r?[]:r,e.abrupt("return",c);case 12:return e.prev=12,e.t0=e.catch(0),console.error("The genre list could not be consulted.",e.t0),e.abrupt("return",[]);case 16:case"end":return e.stop()}},e,null,[[0,12]])}));return function(){return e.apply(this,arguments)}}(),p=function(){var e=Object(s.a)(a.a.mark(function e(t){var n,r,c,s;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(o.a.API_URL,"/genres/").concat(t,"/random_song"));case 3:return n=e.sent,e.next=6,n.json();case 6:return r=e.sent,c=r.data,s=void 0===c?{}:c,e.abrupt("return",l({spotifyUrl:s.spotify_url,previewUrl:s.preview_url,durationMs:s.duration_ms},Object(i.a)(["id","name","explicit"],s)));case 12:e.prev=12,e.t0=e.catch(0),console.error('Could not check the random song with gender: "'.concat(t,'".'),e.t0);case 15:case"end":return e.stop()}},e,null,[[0,12]])}));return function(t){return e.apply(this,arguments)}}()},93:function(e,t,n){"use strict";var r=n(94);n.o(r,"msToTime")&&n.d(t,"msToTime",function(){return r.msToTime});var a=n(95);n.o(a,"msToTime")&&n.d(t,"msToTime",function(){return a.msToTime});var c=n(96);n.o(c,"msToTime")&&n.d(t,"msToTime",function(){return c.msToTime});var s=n(97);n.o(s,"msToTime")&&n.d(t,"msToTime",function(){return s.msToTime})},94:function(e,t){},95:function(e,t){},96:function(e,t){},97:function(e,t){},98:function(e,t,n){"use strict";function r(e){var t=Math.floor(e/1e3%60),n=Math.floor(e/6e4%60),r=Math.floor(e/36e5%24),a=r<10?"0"+r:r,c=n<10?"0"+n:n,s=t<10?"0"+t:t;return"".concat("00"===a?"":a+":").concat("00"===c?"":c+":").concat(s)}n.d(t,"a",function(){return r})}},[[140,1,2]]]);
//# sourceMappingURL=main.0bef63e3.chunk.js.map