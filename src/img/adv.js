(function(l,L,j){function o(a){return Object.prototype.toString.call(a)==="[object Array]"}_py.getLast=function(f){for(var d=this.length-1;0<=d;d--){if(o(this[d])){if(this[d][0]==f){return this[d][1]}}}return null};var K=_py.getLast("a"),E=["Jzs","eV","8U","7a","Rds","0j","_d","uc","_Ws","fw","THs","72s","sy","vT","Qws","8Y","AL","-J","Fos","9as","1qs","KJs","Rqs","05s","Bc","Bv","IOs"],B=K&&K.split(".")[0],n=false;for(var F=0;F<E.length;F++){if(E[F]==B){n=true;break}}if(n){var A=_py.getLast("p"),J=_py.getLast("pi"),x=_py.getLast("pv"),H=_py.getLast("e"),I=_py.getLast("domain"),D=_py.getLast("mapping");(function(i,q,p,f,e){i._CommandName_=f;i[f]=i[f]||function(){(i[f].q=i[f].q||[]).push(arguments);i[f].track=function(){(i[f].q[i[f].q.length-1].t=[]).push(arguments)};return i[f]},i[f].a=e,i[f].l=1*new Date();var u=q.createElement(p);u.async=1;u.src="//fm.ipinyou.com/j/a.js";var m=q.getElementsByTagName(p)[0];m.parentNode.insertBefore(u,m)})(l,L,"script","py",K);if(x!=null){py("set","user",{category:x})}if(H!=null){py("set","extend",H)}if(I!=null){py("set","domain",I)}if(D!=null&&!(D!==1)){py("set","mapping",0)}if(J!=null){var y={};y.product_no=J.id;y.name=J.name;y.brand=J.brand;y.orig_price=J.origPrice;y.price=J.price;y.pc_pic_url=J.imgUrl;y.product_url=J.productUrl;y.category=J.category;y.sold_out=J.soldOut;py("event","viewItem",y)}else{if(A!=null){py("event","viewItem",A)}else{py("event","viewPage")}}}else{var k=1000;var b="cma";function o(a){return Object.prototype.toString.call(a)==="[object Array]"}var C=function(){var i=location.hostname;var d=/^\d{1,3}.\d{1,3}.\d{1,3}.\d{1,3}$/;var a=i.split(".");var f=a.length-2;if(d.test(i)||2===a.length){return i}for(;0<=f;--f){if("www"===a[f]){return a.slice(f+1).join(".")}if(-1===",com,net,org,gov,edu,info,name,int,mil,arpa,asia,biz,pro,coop,aero,museum,ac,ad,ae,af,ag,ai,al,am,an,ao,aq,ar,as,at,au,aw,az,ba,bb,bd,be,bf,bg,bh,bi,bj,bm,bn,bo,br,bs,bt,bv,bw,by,bz,ca,cc,cf,cg,ch,ci,ck,cl,cm,cn,co,cq,cr,cu,cv,cx,cy,cz,de,dj,dk,dm,do,dz,ec,ee,eg,eh,es,et,ev,fi,fj,fk,fm,fo,fr,ga,gb,gd,ge,gf,gh,gi,gl,gm,gn,gp,gr,gt,gu,gw,gy,hk,hm,hn,hr,ht,hu,id,ie,il,in,io,iq,ir,is,it,jm,jo,jp,ke,kg,kh,ki,km,kn,kp,kr,kw,ky,kz,la,lb,lc,li,lk,lr,ls,lt,lu,lv,ly,ma,mc,md,me,mg,mh,ml,mm,mn,mo,mp,mq,mr,ms,mt,mv,mw,mx,my,mz,na,nc,ne,nf,ng,ni,nl,no,np,nr,nt,nu,nz,om,pa,pe,pf,pg,ph,pk,pl,pm,pn,pr,pt,pw,py,qa,re,ro,ru,rw,sa,sb,sc,sd,se,sg,sh,si,sj,sk,sl,sm,sn,so,sr,st,su,sy,sz,tc,td,tf,tg,th,tj,tk,tm,tn,to,tp,tr,tt,tv,tw,tz,ua,ug,uk,us,uy,va,vc,ve,vg,vn,vu,wf,ws,ye,yu,za,zm,zr,zw,".indexOf(","+a[f]+",")){return a.slice(f).join(".")}}return i};_py.getLast=function(f){for(var d=this.length-1;0<=d;d--){if(o(this[d])){if(this[d][0]==f){return this[d][1]}}}};_py.serialize=function(){function q(i,M){for(var m=0;m<i.length;m++){if(i[m]===M){return m}}return -1}for(var p=["domain","urlParam","pi","e","p","mapping"],a=[],f=[],s=[],e,d=0;d<this.length;d++){e=this[d][0],-1===q(p,e)&&(f[e]=f[e]||[],0<f[e].length?-1===q(f[e],this[d][1])&&f[e].push(this[d][1]):(f[e].push(this[d][1]),a.push([e,f[e]])))}for(d=0;d<a.length;d++){s.push(a[d][0]+"="+j(a[d][1].join(",")))}return s.join("&")};l.ipy={r:/(^|&)jump=(\d*)/i,cookie:{set:function(i,f,e,a,d){z=new Date();z.setTime(z.getTime()+(e||0));L.cookie=i+"="+j(f||"")+(e?"; expires="+z.toGMTString():"")+";path=/; domain="+(a||location.host)+(d?"; secure":"")},get:function(d){return(d=L.cookie.match(RegExp("(^|;)\\s*"+d+"=([^;]*)","i")))?decodeURIComponent(d[2]):""}},setCookie:function(d,a){ipy.cookie.set(d,a,31536000000,C())},setSession:function(d,a){ipy.cookie.set(d,a,0,C())},getJump:function(){var a=ipy.cookie.get("ipysession");return a&&(a=a.match(ipy.r))?parseInt(a[2]):0},setJump:function(a){var d=ipy.cookie.get("ipysession");d?d.match(ipy.r)?ipy.setSession("ipysession",d.replace(/jump=(\d*)/,"jump="+a)):ipy.setSession("ipysession",d+"&jump="+a):ipy.setSession("ipysession","jump="+a)},getInfo:function(f){var a=ipy.cookie.get(f);if(a){return a}try{if(l.localStorage){if(localStorage.getItem(f)){return localStorage.getItem(f)}}}catch(d){}return""},setInfo:function(f,a){if(a==null||a==""){return}ipy.setCookie(f,a);try{if(l.localStorage){localStorage.setItem(f,a)}}catch(d){}},getQueryString:function(e){if(e==""||e==null){return}var m=l.location.href,a=m.split(e),d="";if(a.length>1){m=a[1];d=m.split("&")[0].replace("=","");return d}var f=new RegExp("(^|&)"+e+"=([^&]*)(&|$)"),i=l.location.search.substr(1).match(f);if(i!=null&&i){return i[2]}var p=l.location.hash.substr(1).match(f);if(p!=null&&p){return p[2]}return""},setExendParam:function(m,q,i){var d=m||"",a=q||"",f=i||"";ipy.getExtendParam(d,a,f)},getExtendParam:function(a,f,p){var m="",d="";if(a!=null&&a){m="p="+a}if(f!=null&&f){_py.push(["pv",f])}if(p!=null&&p){m+="&ext="+p}ipy.extendSend(m)},itemInfo:function(e){var a=[],p;switch(typeof e){case"string":p=e;break;case"object":var f=["id","name","origPrice","price","brand","imgUrl","productUrl","categoryId","category","promotion","discount","soldOut","domain","currency"];for(var d=0;d<f.length;d++){var m=(e[f[d]]==undefined)?"":e[f[d]];m=m.toString();a.push(j(m))}ipy.id=e.id||"";p=a.join(",");break;default:return p=""}return p},extendSend:function(a){var d="";if(_py.getLast("e")){d="e="+_py.getLast("e")+"&"}d+=a,t=_py.getLast("domain"),A=("https:"==location.protocol?"https":"http")+"://"+t+"/adv?"+_py.serialize()+ipy.getSession()+"&e="+h(d)+"&rd="+new Date().getTime();(new Image()).src=A},getSession:function(){var d=_py.getLast("c");if(d&&d!=null){var a=ipy.getJump();if(!isNaN(a)&&a==0){ipy.setJump(a+1);return""}a++;ipy.setJump(a);return"&s="+a}return""},getP:function(){var a=_py.getLast("p");var d=ipy.id?ipy.id:"";a=a?a:d;return a}};if(_py.getLast("mapping")!==1){var G="setTimeout(function() {var f=document;e = f.createElement('iframe');e.src='"+("http:"!=location.protocol?"https://cm.ipinyou.com/cmas.html?a="+_py.getLast("a"):"http://fm.p0y.cn/cm/cma.html?a="+_py.getLast("a"))+"';f.body.insertBefore(e,f.body.firstChild);e.style.display='none';}, "+k+")"}var A=location.href,v=L.referrer,H,J,w;l.parent!=l&&(A=v,v="");A&&_py.push(["u",A]);v&&_py.push(["r",v]);var r=_py.getLast("urlParam")||"pyck",I=ipy.getQueryString(r);I=I?I:ipy.getInfo("ipycookie");ipy.setInfo("ipycookie",I);I&&_py.push(["c",I]);var t=_py.getLast("domain");var H=_py.getLast("e");if(H!=""&&H){H="e="+_py.getLast("e")}else{H=""}J=ipy.itemInfo(_py.getLast("pi"));A=("https:"==location.protocol?"https":"http")+"://"+t+"/adv?"+_py.serialize()+ipy.getSession()+"&pi="+j(J)+"&p="+j(ipy.getP())+"&e="+j(H)+"&rd="+new Date().getTime()+"&v=1";v=L.createElement("iframe");v.src="javascript:false;";v.style.display="none";function g(){if(L.body){L.body.insertBefore(v,L.body.firstChild);try{c=v.contentWindow.document,c.write('<!doctype html><html><body onload="'+G+'"><script src="'+A+'"><\/script></body></html>'),c.close()}catch(a){v.contentWindow.location.replace('javascript:void((function(){document.write("<!doctype html><html><body onload=\\"'+G+"\\\"><script>document.domain='"+document.domain+"';var s=document.createElement('script');document.body.insertBefore(s,document.body.firstChild);s.src='"+A+"';<\/script></body></html>\");document.close()})());")}}else{setTimeout(g,50)}}setTimeout(g,10)}})(window,document,encodeURIComponent);