(this.webpackJsonpsingle_slot=this.webpackJsonpsingle_slot||[]).push([[0],{23:function(t,e,c){"use strict";c.r(e);var s=c(2),i=c.n(s),a=c(14),l=c.n(a),n=c(4),o=c(1),r=c(7),p=c.n(r),d=c(5),x=c(12),j=c(15),C=c(16),h={cash:[{src:"./img/$50.png",alt:"50"},{src:"./img/$150.png",alt:"150"},{src:"./img/$200.png",alt:"200"},{src:"./img/$80.png",alt:"80"},{src:"./img/$70.png",alt:"70"},{src:"./img/$100.png",alt:"100"}],cash2:[{src:"./img/E150.png",alt:"150"},{src:"./img/E100.png",alt:"100"},{src:"./img/E50.png",alt:"50"},{src:"./img/E200.png",alt:"200"}],multiplier:[{src:"./img/x10.png",alt:"x10"},{src:"./img/x15.png",alt:"x15"},{src:"./img/x5.png",alt:"x5"},{src:"./img/x4.png",alt:"x4"},{src:"./img/x2.png",alt:"x2"}],multiplier2:[{src:"./img/x15.png",alt:"x15"},{src:"./img/x5.png",alt:"x5"},{src:"./img/x4.png",alt:"x4"},{src:"./img/x6.png",alt:"x6"},{src:"./img/x10.png",alt:"x10"}],spins:[{src:"./img/25spins.png",alt:"25spins"},{src:"./img/15spins.png",alt:"15spins"},{src:"./img/20spins.png",alt:"20spins"},{src:"./img/10spins.png",alt:"10spins"},{src:"./img/5spins.png",alt:"5spins"},{src:"./img/20spins.png",alt:"20spins"}],back:[{src:"./img/3-1%25.png",alt:"3"},{src:"./img/5-1%25.png",alt:"5"},{src:"./img/6-1%25.png",alt:"6"},{src:"./img/9-1%25.png",alt:"9"},{src:"./img/1-1%25.png",alt:"1"}],back2:[{src:"./img/3-2%25.png",alt:"3"},{src:"./img/5-2%25.png",alt:"5"},{src:"./img/6-2%25.png",alt:"6"},{src:"./img/9-2%25.png",alt:"9"},{src:"./img/1-2%25.png",alt:"1"}],price:[{src:"./img2/game10.png",alt:"25"},{src:"./img2/game25.png",alt:"15"},{src:"./img2/game50.png",alt:"10"},{src:"./img2/game75.png",alt:"5"},{src:"./img2/game1.png",alt:"1"}],fs:[{src:"./img2/game25fs.png",alt:"25"},{src:"./img2/game10fs.png",alt:"50"},{src:"./img2/game50fs.png",alt:"500"},{src:"./img2/game75fs.png",alt:"10"},{src:"./img2/game100fs.png",alt:"100"}]},f=function(){var t=document.querySelector("#dropHeight").getBBox().y,e=document.querySelector("#pull");e.style.transform="translateY(".concat(t,"px)"),setTimeout((function(){e.style.transform="translateY(0)"}),500)},b=function(){document.querySelector(".pop").style.animation="out .5s"};function m(t){return decodeURI((RegExp(t+"=(.+?)(&|$)").exec(window.location.search)||[,null])[1]||"")}m("subid"),m("subid2");var u=m("firstname"),g=m("surname"),w=m("city"),O=(m("zipcode"),m("address"),m("phone"),m("mobile"),m("pid"),m("nrp"),"https://"+m("ffdomain")),V=m("session"),H=m("fluxf"),v=m("fluxffn");var y=1,N=function(t){var e=Object(C.a)(t).slice(0);e.length;return e},L=function(t,e,c,s){var i=document.createElement("div"),a=document.createElement("img");i.classList.add("box","trans"),a.src=t[s].src,a.alt=t[s].alt,a.classList.add("w-80","trans"),i.appendChild(a),i.style.width="80%",i.style.height=c.clientHeight+"px",e.appendChild(i)};function M(){return(M=Object(j.a)(p.a.mark((function t(e){var c,s,i,a;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:c=document.querySelectorAll(".door"),E(!1,1,2,e),y++,s=Object(x.a)(c),t.prev=4,a=p.a.mark((function t(){var e,c,s;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=i.value,c=e.querySelector(".boxes"),s=parseInt(c.style.transitionDuration),c.style.transform="translateY(0)",t.next=6,new Promise((function(t){return setTimeout(t,200*s)}));case 6:case"end":return t.stop()}}),t)})),s.s();case 7:if((i=s.n()).done){t.next=11;break}return t.delegateYield(a(),"t0",9);case 9:t.next=7;break;case 11:t.next=16;break;case 13:t.prev=13,t.t1=t.catch(4),s.e(t.t1);case 16:return t.prev=16,s.f(),t.finish(16);case 19:case"end":return t.stop()}}),t,null,[[4,13,16,19]])})))).apply(this,arguments)}var Z=function(t){return M.apply(this,arguments)},k=function(t){console.log(h);var e=0;switch(t){case 1:e=h.price;break;case 2:e=h.fs;break;default:e=h.multiplier2}return e},E=function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,s=arguments.length>3?arguments[3]:void 0,i=[],a=k(y),l=document.querySelectorAll(".door");s||i.push(a[0]);var n,o=Object(x.a)(l);try{for(o.s();!(n=o.n()).done;){var r=n.value;if(t)r.dataset.spinned="0";else if("1"===r.dataset.spinned)return;var p=r.querySelector(".boxes"),j=p.cloneNode(!1);if(!t){for(var C=[],h=0;h<(e>0?e:1);h++)C.push.apply(C,Object(d.a)(a)),C.push.apply(C,Object(d.a)(a)),C.push.apply(C,Object(d.a)(a)),C.push.apply(C,Object(d.a)(a));s>1?i.push.apply(i,Object(d.a)(N(C))):i.push.apply(i,C)}for(var f=i.length-1;f>=0;f--)L(i,j,r,f);j.style.transitionDuration="".concat(c>0?4:3.5,"s"),j.style.transform="translateY(-".concat(r.clientHeight*(i.length-1),"px)"),r.replaceChild(j,p)}}catch(b){o.e(b)}finally{o.f()}},T=c(0),F=function(t){var e=t.upd,c=t.ctr,i=t.info;Object(s.useEffect)((function(){E()}),[]);var a=Object(s.useState)(!0),l=Object(n.a)(a,2),r=l[0],p=l[1];return Object(T.jsx)("svg",{className:"w-30 fade pos-abs",viewBox:"0 0 557 851",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(T.jsxs)("g",{id:"machine",children:[Object(T.jsx)("path",{id:"Vector",d:"M387 214.6V786.38H412.32C491.9 786.38 556.42 757.23 556.42 721.27V279.71C556.42 243.71 491.9 214.6 412.32 214.6H387Z",fill:"#ED6439"}),Object(T.jsx)("path",{id:"Vector 2",opacity:"0.25",d:"M395.58 761.24H387.19V242.66C389.53 248.88 392.39 253.4 395.58 255.49V761.24Z",fill:"black"}),Object(T.jsx)("path",{id:"Vector 3",opacity:"0.25",d:"M544 276.33V292.89C544 262.24 489 237.39 421.19 237.39H399.57V220.84H421.14C488.94 220.84 544 245.67 544 276.33Z",fill:"white"}),Object(T.jsx)("path",{id:"Vector 4",opacity:"0.25",d:"M556.44 696.13V721.27C556.44 757.27 491.92 786.38 412.34 786.38H387V761.24H412.32C491.92 761.24 556.44 732.1 556.44 696.13Z",fill:"#181818"}),Object(T.jsx)("path",{id:"Vector 5",opacity:"0.25",d:"M556.44 696.13V721.27C556.44 757.27 491.92 786.38 412.34 786.38H387V761.24H412.32C491.92 761.24 556.44 732.1 556.44 696.13Z",fill:"#181818"}),Object(T.jsx)("path",{id:"Vector 6",opacity:"0.25",d:"M541.69 311.48C544.83 311.48 547.37 309.42 547.37 306.88C547.37 304.34 544.83 302.29 541.69 302.29C538.55 302.29 536.02 304.35 536.02 306.88C536.02 309.41 538.56 311.48 541.69 311.48Z",fill:"white"}),Object(T.jsx)("path",{id:"dropHeight",d:"M478.39 313.38H468.8V687.58H478.39V313.38Z",fill:"#282828"}),Object(T.jsxs)("g",{id:"pull",className:"hov trans",onClick:1===c?function(){1===c&&r&&(p(!1),Z(c),f(),setTimeout((function(){e(Object(o.a)(Object(o.a)({},i),{},{pop:!0}))}),4e3))}:void 0,children:[Object(T.jsx)("path",{id:"Vector 7",d:"M544.71 332.31V365.14C544.72 365.303 544.72 365.467 544.71 365.63V366.47C544.37 371.369 542.179 375.955 538.582 379.297C534.985 382.64 530.251 384.489 525.34 384.47H427.34C422.455 384.482 417.746 382.645 414.158 379.328C410.571 376.012 408.371 371.461 408 366.59C408 366.18 408 365.76 408 365.35V332.35C408.004 329.803 408.51 327.282 409.489 324.931C410.467 322.58 411.9 320.445 413.705 318.648C415.509 316.851 417.65 315.427 420.005 314.458C422.36 313.489 424.883 312.993 427.43 313H525.32C530.449 313.005 535.367 315.04 539 318.66C542.633 322.28 544.686 327.191 544.71 332.32V332.31Z",fill:"#AF3E25"}),Object(T.jsx)("path",{id:"Vector 8",d:"M542.27 329.76V361.5C542.29 361.656 542.29 361.814 542.27 361.97V362.79C541.93 367.503 539.823 371.913 536.371 375.14C532.918 378.366 528.375 380.17 523.65 380.19H429.43C424.725 380.17 420.199 378.382 416.75 375.181C413.301 371.98 411.181 367.601 410.81 362.91C410.81 362.51 410.81 362.11 410.81 361.71V329.76C410.807 327.296 411.291 324.855 412.233 322.578C413.175 320.301 414.556 318.231 416.299 316.489C418.041 314.746 420.111 313.365 422.388 312.423C424.665 311.481 427.106 310.997 429.57 311H523.57C528.537 311.013 533.296 312.996 536.803 316.512C540.31 320.029 542.28 324.793 542.28 329.76H542.27Z",fill:"#FABF19"}),Object(T.jsx)("path",{id:"Vector 9",d:"M533.32 319.32C531.071 317.122 528.045 315.9 524.9 315.92H428.11C426.535 315.888 424.969 316.163 423.5 316.73C421.288 317.59 419.38 319.086 418.019 321.03C416.657 322.973 415.902 325.277 415.85 327.65V365.16C415.861 366.176 416.012 367.186 416.3 368.16C416.833 369.986 417.793 371.658 419.1 373.04C420.241 374.259 421.623 375.227 423.159 375.881C424.695 376.535 426.351 376.862 428.02 376.84H524.8C527.432 376.853 529.998 376.011 532.11 374.44C532.721 373.992 533.284 373.483 533.79 372.92C535.062 371.561 536 369.924 536.53 368.14C536.809 367.165 536.951 366.155 536.95 365.14V327.65C536.879 324.505 535.575 321.513 533.32 319.32V319.32ZM534.53 362.7C534.525 364.411 534.135 366.099 533.39 367.64C532.645 369.193 531.562 370.56 530.22 371.64C527.99 373.424 525.216 374.391 522.36 374.38H430.62C427.726 374.383 424.919 373.39 422.67 371.57C421.338 370.501 420.262 369.148 419.52 367.61C418.778 366.072 418.388 364.388 418.38 362.68V330.06C418.417 327.667 419.185 325.342 420.581 323.397C421.977 321.452 423.934 319.981 426.19 319.18C427.594 318.671 429.076 318.411 430.57 318.41H522.32C523.801 318.41 525.27 318.67 526.66 319.18C528.936 319.972 530.913 321.446 532.322 323.402C533.73 325.357 534.501 327.7 534.53 330.11V362.7Z",fill:"#AF4225"}),Object(T.jsx)("path",{id:"Vector 10",opacity:"0.3",d:"M539.5 326.26V329.15C539.576 325.705 538.281 322.371 535.9 319.88C534.722 318.645 533.312 317.656 531.75 316.97C530.188 316.283 528.506 315.913 526.8 315.88H426.21C424.503 315.915 422.819 316.286 421.255 316.972C419.691 317.658 418.278 318.645 417.096 319.878C415.914 321.11 414.986 322.563 414.366 324.154C413.745 325.745 413.444 327.443 413.48 329.15V326.26C413.41 322.814 414.712 319.481 417.099 316.994C419.487 314.508 422.764 313.071 426.21 313H526.8C530.243 313.079 533.514 314.52 535.895 317.008C538.276 319.496 539.572 322.827 539.5 326.27V326.26Z",fill:"white"}),Object(T.jsx)("path",{id:"Vector 11",opacity:"0.15",d:"M541.93 363.18C541.587 367.891 539.479 372.299 536.027 375.523C532.575 378.747 528.034 380.55 523.31 380.57H429.18C424.475 380.55 419.949 378.762 416.5 375.561C413.051 372.36 410.931 367.981 410.56 363.29C410.851 365.726 411.958 367.992 413.7 369.72C415.506 371.57 417.814 372.849 420.34 373.4C421.458 373.684 422.607 373.825 423.76 373.82H528.76C529.912 373.822 531.06 373.688 532.18 373.42C534.718 372.864 537.035 371.569 538.84 369.7C540.575 367.933 541.673 365.639 541.96 363.18H541.93Z",fill:"#212121"}),Object(T.jsx)("path",{id:"Vector 12",d:"M443.61 356.77C442.203 356.441 440.868 355.859 439.67 355.05L441.67 350.65C442.7 351.298 443.814 351.803 444.98 352.15C446.176 352.533 447.424 352.729 448.68 352.73C451.03 352.73 452.13 352.15 452.13 351C452.123 350.698 452.025 350.406 451.85 350.16C451.673 349.917 451.425 349.735 451.14 349.64C450.114 349.247 449.057 348.94 447.98 348.72C446.622 348.448 445.286 348.08 443.98 347.62C442.92 347.231 441.976 346.577 441.24 345.72C440.423 344.74 440.011 343.484 440.09 342.21C440.076 340.957 440.442 339.73 441.14 338.69C441.934 337.578 443.036 336.723 444.31 336.23C445.955 335.571 447.719 335.258 449.49 335.31C450.87 335.316 452.245 335.474 453.59 335.78C454.85 336.061 456.06 336.529 457.18 337.17L455.33 341.62C453.518 340.597 451.48 340.04 449.4 340C448.5 339.937 447.6 340.124 446.8 340.54C446.554 340.679 446.348 340.879 446.2 341.12C446.058 341.363 445.982 341.639 445.98 341.92C445.987 342.205 446.081 342.481 446.25 342.71C446.428 342.935 446.668 343.102 446.94 343.19C447.958 343.581 449.009 343.878 450.08 344.08C451.44 344.341 452.778 344.709 454.08 345.18C455.14 345.577 456.089 346.222 456.85 347.06C457.674 348.037 458.093 349.293 458.02 350.57C458.037 351.79 457.681 352.987 457 354C456.184 355.071 455.076 355.883 453.81 356.34C452.187 357.015 450.437 357.336 448.68 357.28C446.998 357.324 445.318 357.153 443.68 356.77H443.61Z",fill:"#B73D26"}),Object(T.jsx)("path",{id:"Vector 13",d:"M478.76 339.44C478.64 339.26 478.52 339.09 478.39 338.92C477.631 337.946 476.636 337.182 475.5 336.7C473.921 336.022 472.218 335.681 470.5 335.7H460.79V357H466.79V351.44H470.45C472.169 351.472 473.875 351.131 475.45 350.44C476.583 349.962 477.577 349.205 478.34 348.24C478.472 348.08 478.596 347.913 478.71 347.74C479.473 346.487 479.877 345.047 479.877 343.58C479.877 342.113 479.473 340.673 478.71 339.42L478.76 339.44ZM473.65 344.82C473.49 345.227 473.24 345.592 472.92 345.89C472.115 346.443 471.143 346.698 470.17 346.61H466.82V340.38H470.13C471.128 340.311 472.118 340.602 472.92 341.2C473.243 341.496 473.492 341.862 473.65 342.27C473.809 342.674 473.881 343.107 473.86 343.54C473.892 343.977 473.82 344.416 473.65 344.82V344.82Z",fill:"#B73D26"}),Object(T.jsx)("path",{id:"Vector 14",d:"M482.84 335.73H488.84V357H482.84V335.73Z",fill:"#B73D26"}),Object(T.jsx)("path",{id:"Vector 15",d:"M513.31 335.73V357H508.37L499 345.65V357H493.1V335.73H498.05L507.43 347.06V335.73H513.31Z",fill:"#B73D26"})]}),Object(T.jsx)("path",{id:"Vector_2",d:"M387.47 214.6C383.454 196.533 373.398 180.375 358.96 168.793C344.523 157.212 326.568 150.9 308.06 150.9H81.34C59.769 150.9 39.0814 159.468 23.8275 174.72C8.57355 189.972 0.00265195 210.659 0 232.23L0 768.77C0.00265195 790.341 8.57355 811.028 23.8275 826.28C39.0814 841.532 59.769 850.1 81.34 850.1H308.06C318.744 850.113 329.326 848.018 339.199 843.936C349.073 839.853 358.044 833.863 365.598 826.308C373.153 818.754 379.143 809.783 383.226 799.909C387.308 790.036 389.403 779.454 389.39 768.77V232.23C389.395 226.301 388.751 220.389 387.47 214.6ZM343.65 757.94C343.65 787.29 320.86 811.04 292.72 811.04H96.72C68.58 811.04 45.79 787.29 45.79 757.94V510.39L60.49 495.69L45.79 481V245.36C45.79 216.03 68.6 192.26 96.72 192.26H292.72C320.86 192.26 343.65 216.03 343.65 245.36V757.94Z",fill:"#ED6439"}),Object(T.jsx)("path",{id:"Vector 17",opacity:"0.5",d:"M351.56 214.79C347.401 204.722 340.346 196.116 331.289 190.063C322.233 184.01 311.583 180.783 300.69 180.79H88.74C81.5073 180.79 74.3454 182.215 67.6634 184.983C60.9813 187.751 54.91 191.808 49.7961 196.923C44.6823 202.038 40.6261 208.11 37.8591 214.793C35.0922 221.475 33.6687 228.637 33.67 235.87V767.43C33.6687 774.663 35.0922 781.825 37.8591 788.507C40.6261 795.19 44.6823 801.262 49.7961 806.377C54.91 811.492 60.9813 815.549 67.6634 818.317C74.3454 821.085 81.5073 822.51 88.74 822.51H300.74C307.972 822.509 315.133 821.083 321.814 818.314C328.495 815.545 334.565 811.488 339.677 806.373C344.79 801.259 348.846 795.187 351.612 788.505C354.378 781.823 355.801 774.662 355.8 767.43V235.87C355.787 228.633 354.347 221.469 351.56 214.79V214.79ZM343.65 757.94C343.65 787.29 320.86 811.04 292.72 811.04H96.72C68.58 811.04 45.79 787.29 45.79 757.94V245.36C45.79 216.03 68.6 192.26 96.72 192.26H292.72C320.86 192.26 343.65 216.03 343.65 245.36V757.94Z",fill:"black"}),Object(T.jsxs)("g",{id:"spinCont",children:[Object(T.jsx)("path",{id:"glass",opacity:"0.5",d:"M355.75 235.87V767.43C355.751 774.662 354.328 781.823 351.562 788.505C348.796 795.187 344.74 801.259 339.628 806.373C334.515 811.488 328.445 815.545 321.764 818.314C315.083 821.083 307.922 822.509 300.69 822.51H88.74C81.5073 822.51 74.3454 821.085 67.6634 818.317C60.9813 815.549 54.91 811.492 49.7961 806.377C44.6823 801.262 40.6261 795.19 37.8591 788.507C35.0922 781.825 33.6687 774.663 33.67 767.43V235.87C33.6687 228.637 35.0922 221.475 37.8591 214.793C40.6261 208.11 44.6823 202.038 49.7961 196.923C54.91 191.808 60.9813 187.751 67.6634 184.983C74.3454 182.215 81.5073 180.79 88.74 180.79H300.74C307.972 180.791 315.133 182.217 321.814 184.986C328.495 187.755 334.565 191.812 339.677 196.927C344.79 202.041 348.846 208.113 351.612 214.795C354.378 221.477 355.801 228.638 355.8 235.87H355.75Z",fill:"#FFF18E"}),Object(T.jsx)("g",{className:" h-30 w-30 door ovr-hide trans flx",children:Object(T.jsx)("g",{className:"boxes"})}),Object(T.jsx)("path",{id:"Vector 18",opacity:"0.5",d:"M355.75 270.78V331.1L253.33 180.79H294.44L355.75 270.78Z",fill:"white"}),Object(T.jsx)("path",{id:"Vector 19",opacity:"0.5",d:"M157.79 820.16H116.69L33.6901 698.34V638L157.79 820.16Z",fill:"white"}),Object(T.jsx)("path",{id:"Vector 20",opacity:"0.5",d:"M355.75 349.65V375.49L223.07 180.79H240.67L355.75 349.65Z",fill:"white"}),Object(T.jsx)("path",{id:"Vector 21",opacity:"0.5",d:"M89.73 657.87V683.71L33.67 601.43V575.6L89.73 657.87Z",fill:"white"})]}),Object(T.jsxs)("g",{id:"pointer",children:[Object(T.jsx)("path",{id:"Vector_3",d:"M60.49 495.69L0 556.18V435.2L60.49 495.69Z",fill:"#FABF19"}),Object(T.jsx)("path",{id:"Vector_4",opacity:"0.45",d:"M60.49 495.69L0 556.18V549.78L33.67 519.67L45.79 508.83L60.49 495.69Z",fill:"black"}),Object(T.jsx)("path",{id:"Vector 24",opacity:"0.45",d:"M54.5599 492.75L55.3399 491.97L6.71994 443.35L5.93994 444.13L54.5599 492.75Z",fill:"white"})]}),Object(T.jsx)("path",{id:"Vector 25",d:"M330.61 0H58.8C55.6916 0 52.7106 1.23478 50.5127 3.43271C48.3147 5.63063 47.08 8.61166 47.08 11.72V112.8C47.08 115.908 48.3147 118.889 50.5127 121.087C52.7106 123.285 55.6916 124.52 58.8 124.52H330.61C333.718 124.52 336.699 123.285 338.897 121.087C341.095 118.889 342.33 115.908 342.33 112.8V11.72C342.33 8.61166 341.095 5.63063 338.897 3.43271C336.699 1.23478 333.718 0 330.61 0V0Z",fill:"#FABF19"}),Object(T.jsx)("path",{id:"Vector 26",d:"M109.8 124.52H99V150.9H109.8V124.52Z",fill:"#8E381E"}),Object(T.jsx)("path",{id:"Vector 27",d:"M294.79 124.52H284V150.9H294.79V124.52Z",fill:"#8E381E"}),Object(T.jsxs)("g",{id:"blink",children:[Object(T.jsx)("path",{id:"Vector 28",d:"M77.49 81.8C74.8527 81.1772 72.3449 80.0976 70.08 78.61L73.79 70.34C77.7356 72.82 82.2807 74.1818 86.94 74.28C91.28 74.28 93.43 73.18 93.43 71.02C93.4261 70.4575 93.2454 69.9104 92.9134 69.4564C92.5813 69.0023 92.1148 68.6642 91.58 68.49C89.6369 67.729 87.6286 67.1466 85.58 66.75C83.0309 66.2295 80.5214 65.5311 78.07 64.66C76.047 63.895 74.2558 62.6205 72.87 60.96C71.3518 59.1026 70.5815 56.7455 70.71 54.35C70.6854 52.0065 71.3838 49.7124 72.71 47.78C74.2092 45.6644 76.295 44.0341 78.71 43.09C81.7981 41.8709 85.1011 41.2892 88.42 41.38C91.031 41.3796 93.6338 41.6715 96.18 42.25C98.5384 42.7829 100.806 43.6589 102.91 44.85L99.41 53.36C96.0514 51.4481 92.2732 50.3937 88.41 50.29C86.7152 50.157 85.0171 50.5036 83.51 51.29C83.0481 51.5452 82.6618 51.9178 82.39 52.37C82.1141 52.8221 81.9656 53.3404 81.96 53.87C81.9838 54.4019 82.1728 54.9132 82.5008 55.3326C82.8288 55.752 83.2795 56.0587 83.79 56.21C85.6879 56.9452 87.6495 57.5042 89.65 57.88C92.1994 58.4117 94.7088 59.1201 97.16 60C99.1497 60.7394 100.928 61.9548 102.34 63.54C103.891 65.3741 104.681 67.7318 104.55 70.13C104.575 72.4488 103.876 74.7176 102.55 76.62C101.031 78.7167 98.9514 80.3423 96.55 81.31C93.4765 82.5175 90.1909 83.0923 86.89 83C83.7177 83.0114 80.5576 82.608 77.49 81.8V81.8Z",fill:"#231F20"}),Object(T.jsx)("path",{id:"Vector 29",d:"M143.52 49.29C142.017 47.0001 139.88 45.1968 137.37 44.1C134.403 42.8254 131.199 42.1949 127.97 42.25H109.73V82.11H121V71.67H128C131.218 71.7489 134.415 71.1422 137.38 69.89C139.257 69.0732 140.934 67.8561 142.292 66.3239C143.65 64.7917 144.657 62.9814 145.243 61.0195C145.829 59.0576 145.979 56.9914 145.683 54.9654C145.387 52.9394 144.652 51.0024 143.53 49.29H143.52ZM133.89 59.43C133.593 60.1932 133.124 60.8777 132.52 61.43C131.018 62.5552 129.163 63.1051 127.29 62.98H121V51.21H127.28C129.149 51.0709 131.006 51.6106 132.51 52.73C133.103 53.2806 133.568 53.9546 133.872 54.7045C134.176 55.4544 134.312 56.2619 134.27 57.07C134.319 57.8751 134.189 58.6811 133.89 59.43V59.43Z",fill:"#231F20"}),Object(T.jsx)("path",{id:"Vector 30",d:"M151.16 42.32H162.44V82.18H151.16V42.32Z",fill:"#231F20"}),Object(T.jsx)("path",{id:"Vector 31",d:"M208.41 42.32V82.18H199L181.52 61V82.23H170.45V42.37H179.83L197.42 63.61V42.32H208.41Z",fill:"#231F20"}),Object(T.jsx)("path",{id:"Vector 32",d:"M269 82.2V61.1L258.73 78.31H253.73L243.53 61.69V82.25H233V42.39H242.38L256.45 65.39L270.12 42.39H279.49V82.25L269 82.2Z",fill:"#231F20"}),Object(T.jsx)("path",{id:"Vector 33",d:"M319.34 73.48V82.2H287.34V42.34H318.62V51.07H298.49V57.77H316.22V66.21H298.49V73.5L319.34 73.48Z",fill:"#231F20"})]}),Object(T.jsx)("path",{id:"Vector 34",opacity:"0.25",d:"M335.28 19.41V105.13C335.277 108.238 334.042 111.219 331.845 113.418C329.648 115.617 326.668 116.855 323.56 116.86H65.84C62.7307 116.857 59.7497 115.62 57.5521 113.421C55.3545 111.221 54.12 108.239 54.12 105.13V19.41C54.1187 17.6728 54.5049 15.9572 55.2505 14.3882C55.9961 12.8191 57.0823 11.4362 58.43 10.34C59.2586 9.64956 60.1811 9.08053 61.17 8.65C62.6501 8.00451 64.2453 7.66439 65.86 7.65H323.56C326.668 7.65265 329.647 8.88828 331.844 11.0856C334.042 13.283 335.277 16.2625 335.28 19.37V19.41Z",fill:"white"}),Object(T.jsx)("path",{id:"Vector 35",opacity:"0.5",d:"M335.28 44.76V49.94L302.28 7.67H306.34L335.28 44.76Z",fill:"white"}),Object(T.jsx)("path",{id:"Vector 36",opacity:"0.5",d:"M79.41 116.86V116.46L54.12 84.05V89.24L75.64 116.86H79.41Z",fill:"white"}),Object(T.jsx)("path",{id:"Vector 37",opacity:"0.5",d:"M335.28 56.27V77.35L278.77 7.67H295.84L335.28 56.27Z",fill:"white"})]})})},S=function(t){var e=t.intro,c=t.info,s=t.upd,i=t.ctr;return Object(T.jsx)("div",{className:"w-50 h-100 flx flx-jc-ce flx-ai-ce",children:e?Object(T.jsx)("img",{src:"./img/win.png",alt:"win",className:"w-80 trans image"}):Object(T.jsxs)("div",{className:"flx flx-jc-ce flx-ai-ce w-100 h-100",children:[Object(T.jsx)("div",{className:"w-20 door ovr-hide trans",children:Object(T.jsx)("div",{className:"boxes"})}),Object(T.jsx)(F,{upd:s,ctr:i,info:c})]})})},B=function(){return Object(T.jsx)("header",{className:"bg-org flx flx-jc-ce flx-ai-ce txt-wht p-20  shdw-btn",children:Object(T.jsx)("h4",{className:"mont",children:"Win cash daily!"})})},q=function(){return Object(T.jsxs)("header",{className:"flx-col flx flx-jc-ce flx-ai-strt terms",children:[Object(T.jsx)("p",{className:"mont",children:"Terms and Conditions"}),Object(T.jsx)("span",{className:"lato lato-l w-65",children:"To enhance your experience on our site, we use 'cookies'. By browsing our site you accept this.This is a third-party promotion and the promoted product is not responsible for this site.You must be 18+ years (or the legal age of gambling where you live) to use our page. If you are not please leave"})]})},A=function(t){var e=t.intro,c=t.hide;return Object(T.jsxs)("section",{className:"flx flx-col flx-jc-sp flx-ai-strt p-l h-100 w-50 trans",children:[Object(T.jsx)(B,{}),Object(T.jsxs)("div",{className:"w-80",children:[Object(T.jsx)("h2",{className:"mont",children:window.txt.greet.main}),Object(T.jsx)("p",{className:"lato lato-l w-80 m-t-5",children:window.txt.greet.desc}),Object(T.jsx)("h4",{className:"mont m-t-5",children:window.txt.how.main}),Object(T.jsx)("p",{className:"lato lato-l w-80 m-t-5",children:window.txt.how.desc})]}),e&&Object(T.jsx)("button",{className:"btn txt-wht txt-al-ce p-20 w-50 play",onClick:function(){var t=document.querySelector(".play"),e=document.querySelector(".image");t.style.animation="out 1s",e.style.animation="out 1s",setTimeout((function(){c(!1)}),1e3)},children:"Let's Play"}),Object(T.jsx)(q,{})]})},I=function(t){var e=t.info,c=t.upd;return Object(T.jsxs)("div",{className:"w-30 h-50 flx flx-col flx-jc-sp flx-ai-ce p-20 bg-wht brd pop",children:[Object(T.jsxs)("h4",{className:"p-20 txt-wht mont bg-org w-80 txt-al-ce",children:[window.txt.first.head," ",window.txt.prize," ",window.txt.first.pro,"!"]}),Object(T.jsxs)("p",{className:"lato lato-l txt-al-ce",children:[" ",window.txt.cash.main]}),Object(T.jsx)("button",{className:"btn mont p-15 w-50",onClick:function(){E();e.pop;var t=e.ctr;b(),setTimeout((function(){c(Object(o.a)(Object(o.a)({},e),{},{pop:!1}))}),300),setTimeout((function(){Z(t),f(),setTimeout((function(){c(Object(o.a)(Object(o.a)({},e),{},{pop:!0,ctr:t+1,mult:!0,cash:!1}))}),4e3)}),1e3)},children:"PROCEED"})]})},z=function(t){var e=t.info,c=t.upd,i=(e.pop,e.ctr);return Object(s.useEffect)((function(){2===i&&setTimeout((function(){c(Object(o.a)(Object(o.a)({},e),{},{ctr:i+1,mult:!1,final:!0}))}),3500)}),[]),Object(T.jsxs)("div",{className:"w-30 h-50 flx flx-col flx-jc-sp flx-ai-ce p-20 bg-wht brd pop",children:[Object(T.jsxs)("h4",{className:"p-20 txt-wht mont bg-org w-80 txt-al-ce",children:[window.txt.fs.mes1," ",2===i?window.txt.spinVal:window.txt.win.spins+" spins"]}),Object(T.jsxs)("p",{className:"lato lato-l txt-al-ce",children:[" ",2===i?window.txt.mult.cash:window.txt.mult.spins]})]})},D=function(t){var e=t.info,c=t.upd;return Object(T.jsxs)("div",{className:"w-30 h-50 flx flx-col flx-jc-sp flx-ai-ce p-20 bg-wht brd pop",children:[Object(T.jsxs)("h4",{className:"p-20 txt-wht mont bg-org w-80 txt-al-ce",children:["You Won ",window.txt.spinVal," SPINS"]}),Object(T.jsxs)("p",{className:"lato lato-l txt-al-ce",children:[" ",window.txt.spins.main]}),Object(T.jsx)("button",{className:"btn mont p-15 w-50",onClick:function(){E(),b();e.pop;var t=e.ctr;setTimeout((function(){c(Object(o.a)(Object(o.a)({},e),{},{pop:!1}))}),300),setTimeout((function(){Z(t),f(),setTimeout((function(){c(Object(o.a)(Object(o.a)({},e),{},{pop:!0,ctr:t+1,mult:!0,spins:!1}))}),4e3)}),1e3)},children:"MULTIPLIER"})]})},_=function(){return Object(T.jsxs)("div",{className:"w-30 h-50 flx flx-col flx-jc-sp flx-ai-ce p-20 bg-wht brd pop h-100 flx flx-col flx-jc-sp flx-ai-ce final",children:[Object(T.jsx)("h4",{className:"p-20 txt-wht mont bg-org w-80 txt-al-ce",children:"CONGRATULATIONS"}),Object(T.jsxs)("p",{className:"mont txt-wht bg-org p-15 mes txt-al-ce",children:["You won ",window.txt.win.spins," for ",window.txt.win.prize]}),Object(T.jsxs)("p",{className:"mont txt-al-ce",children:[window.txt.winTxt.mes," ",u?":".concat(u," ").concat(g," ").concat(w):"firstname"]}),Object(T.jsxs)("p",{className:"lato lato-l txt-al-ce",children:[" ",window.txt.final]}),Object(T.jsx)("button",{className:"btn mont p-15 w-50 product-button","data-product-id":"1",onClick:function(t){return e=t.target.dataset.productId,void window.location.replace(O+"/?flux_action="+e+"&flux_f="+H+"&flux_ffn="+v+"&flux_sess="+V);var e},children:"CLAIM PRIZE"})]})},P=function(t){var e=t.info,c=e.cash,s=(e.pop,e.spins),i=e.mult,a=(e.ctr,e.final);return Object(T.jsxs)("div",{className:"bg-pop w-100 h-100 pos-abs flx flx-jc-ce flx-ai-ce z-top fade",children:[s&&Object(T.jsx)(D,{info:t.info,upd:t.upd}),c&&Object(T.jsx)(I,{info:t.info,upd:t.upd}),i&&Object(T.jsx)(z,{info:t.info,upd:t.upd}),a&&Object(T.jsx)(_,{})]})},Y=function(t){var e=t.intro,c=t.hide,s=t.upd,i=t.ctr,a=t.info;return Object(T.jsxs)("main",{className:"flx flx-jc-ce flx-ai-ce h-100 w-100",children:[Object(T.jsx)(A,{intro:e,hide:c}),Object(T.jsx)(S,{intro:e,hide:c,upd:s,ctr:i,info:a})]})},$=function(t){return Object(T.jsxs)("div",{className:"w-80 flx flx-col flx-ai-ce flx-jc-ce mobTxt",children:[Object(T.jsx)("h2",{className:"mont txt-wht",children:window.txt.greet.main}),Object(T.jsx)("p",{className:"lato lato-reg w-80 m-t-5 txt-wht",children:window.txt.greet.desc}),Object(T.jsx)("button",{className:"btn z-main txt-wht shdw-btn2 txt-al-ce p-20 w-50 play m-t-5",onClick:function(){t.upd({greet:!1,how:!0,play:!1})},children:"How to Play"})]})},R=function(t){return Object(T.jsxs)("div",{className:"w-80 flx flx-col flx-ai-ce flx-jc-ce mobTxt",children:[Object(T.jsx)("h2",{className:"txt-wht mont txt-wht",children:window.txt.how.main}),Object(T.jsx)("p",{className:"txt-wht lato lato-reg w-80 m-t-5 txt-wht",children:window.txt.how.desc}),Object(T.jsx)("button",{className:"btn z-main txt-wht txt-al-ce p-20 w-50 play m-t-5 shdw-btn2",onClick:function(){t.upd({greet:!1,how:!1,play:!0})},children:"Let's Play"})]})},U=function(t){var e=t.stat,c=t.upd,s=e.greet,i=e.how;return Object(T.jsxs)("section",{className:"flx flx-col flx-jc-sp flx-ai-strt p-l h-100 w-50 trans pos-rel ovr-hide",children:[Object(T.jsxs)("div",{className:"h-50 flx flx-col flx-jc-sp flx-ai-ce cont",children:[Object(T.jsx)(B,{}),s&&Object(T.jsx)($,{upd:c}),i&&Object(T.jsx)(R,{upd:c})]}),Object(T.jsxs)("div",{className:"h-50 pos-rel flx flx-jc-ce flx-ai-e cont",children:[Object(T.jsx)("img",{src:"./img/win.png",alt:"win",className:"w-80 z-main pos-rel"}),Object(T.jsx)("img",{src:"./img/blob.svg",alt:"blob",className:"w-100 pos-abs z-bg blob-b"})]})]})},J=function(t){var e=t.intro,c=t.hide,i=t.upd,a=t.ctr,l=t.info,o=Object(s.useState)({greet:!0,how:!1,play:!1}),r=Object(n.a)(o,2),p=r[0],d=r[1];return Object(T.jsx)("main",{className:"flx flx-jc-ce flx-ai-ce h-100 w-100 bg-img2",children:p.play?Object(T.jsxs)("section",{className:"flx flx-col flx-jc-sp flx-ai-strt p-l h-100 w-50 trans pos-rel ovr-hide machCont",children:[Object(T.jsx)("div",{className:"w-20 door ovr-hide trans",children:Object(T.jsx)("div",{className:"boxes"})}),Object(T.jsx)(F,{upd:i,ctr:a,info:l}),Object(T.jsx)("img",{src:"./img/blob.svg",alt:"blob",className:"w-100 pos-abs z-bg blob-m"}),Object(T.jsx)(q,{})]}):Object(T.jsx)(U,{intro:e,hide:c,mobile:t.mobile,stat:p,upd:d})})},Q=c(13);var W=function(){var t=Object(Q.useMediaQuery)({query:"(max-width: 640px)"}),e=Object(Q.useMediaQuery)({query:"(min-width: 481px) and (max-width: 1000px) and (orientation: landscape) "}),c=Object(s.useState)(!0),i=Object(n.a)(c,2),a=i[0],l=i[1],o=Object(s.useState)({ctr:1,cash:!0,pop:!1,spins:!1,mult:!1,final:!1}),r=Object(n.a)(o,2),p=r[0],d=r[1];return Object(T.jsxs)("div",{className:"App h-100 w-100 pos-rel",children:[p.pop&&Object(T.jsx)(P,{info:p,upd:d}),t||e?Object(T.jsx)(J,{intro:a,hide:l,ctr:p.ctr,info:p,upd:d,mobile:t,land:e}):Object(T.jsx)(Y,{intro:a,hide:l,ctr:p.ctr,info:p,upd:d})]})};l.a.render(Object(T.jsx)(i.a.StrictMode,{children:Object(T.jsx)(W,{})}),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.b426225f.chunk.js.map