
/**!
 * SvgDeCanvo 1.0.1 - JavaScript Vector Library
 * Copyright (c) 2015-2016 FusionCharts Technologies <http://www.fusioncharts.com>
 * Licensed under the MIT license.
 */
!function(){function t(e,a,r){function i(n,s){if(!a[n]){if(!e[n]){var u="function"==typeof require&&require;if(!s&&u)return u(n,!0);if(o)return o(n,!0);var l=new Error("Cannot find module '"+n+"'");throw l.code="MODULE_NOT_FOUND",l}var b=a[n]={exports:{}};e[n][0].call(b.exports,function(t){var a=e[n][1][t];return i(a||t)},b,b.exports,t,e,a,r)}return a[n].exports}for(var o="function"==typeof require&&require,n=0;n<r.length;n++)i(r[n]);return i}return t}()({1:[function(t,e,a){(function(a){var r=t("./svgdecanvo");a.SvgDeCanvo=r,e.exports.SvgDeCanvo=r}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"./svgdecanvo":2}],2:[function(t,e,a){(function(t){var a,r="undefined"!=typeof window?window:void 0!==t?t:null,i=r.document,o={},n={};a=function(t,e,r,i,o,n,s){var u={svg:"",context:"",callBack:"",imageArr:[],canvas:"",dimention:{}};if(!(this instanceof a))throw"This function should be used as class";this._getStore=function(t){return void 0!==u[t]&&u[t]},this._setStore=function(t,e){void 0!==u[t]&&(u[t]=e)},this._setStore("dimention",{x:r,y:i,width:o,height:n}),t&&this.setSVG(t),e&&this.setContext(e),s&&this.setCallback(s),this.drawOnCanvas()},a.prototype.setContext=function(t){var e;if(!t.getContext||!t.getContext("2d"))throw"Please provide valid canvas";e=t.getContext("2d"),this._setStore("canvas",t),this._setStore("context",e)},a.prototype.getContext=function(){return this._getStore("context")},a.prototype.setSVG=function(t){var e;if(void 0!==t.documentElement)e=t,this._setStore("svg",e);else{if("<"!=t.substr(0,1))throw"Please provide valid SVG";e=n.StrToDom(t),this._setStore("svg",e)}},a.prototype.getSVG=function(){return this._getStore("svg")},a.prototype.setCallback=function(t){"function"==typeof t&&this._setStore("callBack",t)},a.prototype.getCallback=function(){return this._getStore("callBack")},a.prototype.drawOnCanvas=function(t,e,a,r,i,o,s){var u,l,b,f,c,h,p,M;t&&this.setSVG(t),e&&this.setContext(e),s&&this.setCallback(s),e=e||this._getStore("canvas"),p=this._getStore("dimention"),s=this.getCallback(),u=this.getContext(),(l=this.getSVG())&&u&&(M=n.getSvgDimention(l),b=M.width,f=M.height,a=a||p.x||0,r=r||p.y||0,i=i||p.width||b,o=o||p.height||f,c=M.width?i/b:1,h=M.height?o/f:1,n.startTransform("translate("+a+","+r+") scale("+c+","+h+")",u),u.save(),u.fillStyle="#ffffff",u.fillRect(0,0,i,o),u.restore(),n.storeImagesInArr(this),n.drawNodes([l],[],this,u,function(){"function"==typeof s&&s(),n.resetTransform(u)}))},o.common=function(t,e,a,r,i){var s,u,l,b,f=t.childNodes,c=function(){t.attributes&&r.restore(),i&&i()};for(b in e)e.hasOwnProperty(b)&&"class"!=e[b].name&&"id"!=e[b].name&&"transform"!=e[b].name&&"clip-path"!=e[b].name&&"object"==typeof e[b]&&t.attributes&&!t.attributes[e[b].name]&&t.setAttribute([e[b].name],e[b].value);if(t.attributes&&t.attributes.style){u=t.attributes.style.value.replace(/;$/,"").split(";");for(b in u)if(u.hasOwnProperty(b)&&(l=u[b].split(":")[0].trim(),!t.attributes[l]||"undefined"==t.attributes[l].value))try{t.setAttribute(l,u[b].split(":")[1].trim())}catch(t){}}t.attributes&&(r.save(),t.attributes.transform&&n.startTransform(t.attributes.transform.value,r),t.attributes["clip-path"]&&n.applyClip(t.attributes["clip-path"].value,r,a)),0==f.length||1==f.length&&!f[0].tagName?void 0!==t.tagName?(s="draw"+t.tagName,o[s]?t.attributes.display&&"none"==t.attributes.display.value?c():o[s](t,r,a,"draw",c):c()):c():n.drawNodes(f,"svg"==t.tagName?[]:t.attributes,a,r,c)},o.drawtext=function(t,e,a,r,i){this.drawtspan(t,e,a,r,i)},o.drawtspan=function(t,e,a,o,s){var u,l,b,f,c,h=t.innerHTML||t.textContent,p=t.attributes.x?t.attributes.x.value:0,M=t.attributes.y?t.attributes.y.value:0,m=t.attributes.dx?t.attributes.dx.value:0,v=t.attributes.dy?t.attributes.dy.value:0,x="serief",d="normal",y="16px",g=[];i.getElementsByTagName("body")[0]&&(u=r.getComputedStyle(i.getElementsByTagName("body")[0],null),u.getPropertyValue("font-family")&&(x=u.getPropertyValue("font-family")),u.getPropertyValue("font-weight")&&(d=u.getPropertyValue("font-weight")),u.getPropertyValue("font-size")&&(y=u.getPropertyValue("font-size"))),l=t.attributes["font-family"]?t.attributes["font-family"].value:x,b=t.attributes["font-weight"]?t.attributes["font-weight"].value:d,f=t.attributes["text-anchor"]?t.attributes["text-anchor"].value:"start",c=t.attributes["font-size"]?t.attributes["font-size"].value:y,p=Number(p)+Number(m),M=Number(M)+Number(v),h=h.trim(),f="middle"==f?"center":f,e.save(),e.font=b+" "+c+" "+l,e.textAlign=f,"draw"===o&&((!t.attributes.fill||t.attributes.fill&&"none"!=t.attributes.fill.value)&&(n.applyFillEffect(t,e,a,g),e.fillText(h,p,M),n.endFillEffect(t,e)),(!t.attributes.stroke||t.attributes.stroke&&"none"!=t.attributes.stroke.value)&&(n.applyStrokeEffect(t,e,a,g),e.strokeText(h,p,M),n.endStrokeEffect(t,e))),e.restore(),"function"==typeof s&&s()},o.drawcircle=function(t,e,a,r,i){var o=Number(t.attributes.cx.value),s=Number(t.attributes.cy.value),u=Number(t.attributes.r.value),l=[];e.beginPath(),e.arc(o,s,u,0,2*Math.PI),n.bBoxFromPoint([o,1*o+1*u,1*o-1*u],[s,1*s+1*u,1*s-1*u],l),"draw"===r&&((!t.attributes.fill||t.attributes.fill&&"none"!=t.attributes.fill.value)&&(n.applyFillEffect(t,e,a,l),e.fill(),n.endFillEffect(t,e)),(!t.attributes.stroke||t.attributes.stroke&&"none"!=t.attributes.stroke.value)&&(n.applyStrokeEffect(t,e,a,l),e.stroke(),n.endStrokeEffect(t,e))),e.closePath(),"function"==typeof i&&i()},o.drawrect=function(t,e,a,r,i){var o=Number(t.attributes.x.value),s=Number(t.attributes.y.value),u=t.attributes.rx?Number(t.attributes.rx.value):0,l=t.attributes.ry?Number(t.attributes.ry.value):0,b=Number(t.attributes.height.value),f=Number(t.attributes.width.value),c=[];n.bBoxFromPoint([o,o+f],[s,s+b],c),e.beginPath(),e.moveTo(o+u,s),e.lineTo(o+f-u,s),e.quadraticCurveTo(o+f,s,o+f,s+l),e.lineTo(o+f,s+b-l),e.quadraticCurveTo(o+f,s+b,o+f-u,s+b),e.lineTo(o+u,s+b),e.quadraticCurveTo(o,s+b,o,s+b-l),e.lineTo(o,s+l),e.quadraticCurveTo(o,s,o+u,s),"draw"===r&&((!t.attributes.fill||t.attributes.fill&&"none"!=t.attributes.fill.value)&&(n.applyFillEffect(t,e,a,c),e.fill(),n.endFillEffect(t,e)),(!t.attributes.stroke||t.attributes.stroke&&"none"!=t.attributes.stroke.value)&&(n.applyStrokeEffect(t,e,a,c),e.stroke(),n.endStrokeEffect(t,e))),e.closePath(),"function"==typeof i&&i()},o.drawellipse=function(t,e,a,r,i){var o=Number(t.attributes.cx.value),s=Number(t.attributes.cy.value),u=Number(t.attributes.rx.value),l=Number(t.attributes.ry.value),b=.5522848*u,f=.5522848*l,c=o+u,h=s+l,p=[];e.beginPath(),e.moveTo(o-u,s),e.bezierCurveTo(o-u,s-f,o-b,s-l,o,s-l),e.bezierCurveTo(o+b,s-l,c,s-f,c,s),e.bezierCurveTo(c,s+f,o+b,h,o,h),e.bezierCurveTo(o-b,h,o-u,s+f,o-u,s),n.bBoxFromPoint([o+u,o-u],[s+l,s-l],p),"draw"===r&&((!t.attributes.fill||t.attributes.fill&&"none"!=t.attributes.fill.value)&&(n.applyFillEffect(t,e,a,p),e.fill(),n.endFillEffect(t,e)),(!t.attributes.stroke||t.attributes.stroke&&"none"!=t.attributes.stroke.value)&&(n.applyStrokeEffect(t,e,a,p),e.stroke(),n.endStrokeEffect(t,e))),e.closePath(),"function"==typeof i&&i()},o.drawimage=function(t,e,a,r,i){var o,n=t.attributes.x?Number(t.attributes.x.value):0,s=t.attributes.y?Number(t.attributes.y.value):0,u=t.attributes.height?Number(t.attributes.height.value):0,l=t.attributes.width?Number(t.attributes.width.value):0,b=a._getStore("imageArr");e.save(),t.attributes.opacity&&(e.globalAlpha=t.attributes.opacity.value),t.attributes["xlink:href"]?(o=t.attributes["xlink:href"].value,"complete"===b[o].status?(e.drawImage(b[o].obj,n,s,l,u),e.globalAlpha=1,e.restore(),"function"==typeof i&&i()):"error"===b[o].status?(e.globalAlpha=1,e.restore(),"function"==typeof i&&i()):"progress"===b[o].status?(b[o].callback=function(){e.drawImage(b[o].obj,n,s,l,u),e.globalAlpha=1,e.restore(),"function"==typeof i&&i()},b[o].errCallback=function(){e.globalAlpha=1,e.restore(),"function"==typeof i&&i()}):(e.globalAlpha=1,e.restore(),"function"==typeof i&&i())):(e.globalAlpha=1,e.restore(),"function"==typeof i&&i())},o.drawpath=function(t,e,a,r,i){var o,s,u,l,b=t.attributes.d.value.match(/[a-z][^a-z"]*/gi),f=[],c=0,h=0;e.beginPath();for(o in b)if(b.hasOwnProperty(o))switch(s=b[o].substring(0,1),u=n.getArgsAsArray(b[o].substring(1,b[o].length)),s){case"M":c=Number(u[0]),h=Number(u[1]),e.moveTo(c,h);break;case"m":c+=Number(u[0]),h+=Number(u[1]),e.moveTo(c,h);break;case"L":for(l=0;u[l];l+=2)n.bBoxFromPoint([c,u[l]],[h,u[l+1]],f),c=Number(u[l]),h=Number(u[l+1]),e.lineTo(c,h);break;case"l":for(l=0;u[l];l+=2)n.bBoxFromPoint([c,1*c+1*u[l]],[h,1*h+1*u[l+1]],f),c+=Number(u[l]),h+=Number(u[l+1]),e.lineTo(c,h);break;case"V":for(l=0;u[l];l+=1)n.bBoxFromPoint([c],[h,u[l]],f),h=Number(u[l]),e.lineTo(c,h);break;case"v":for(l=0;u[l];l+=1)n.bBoxFromPoint([c],[h,1*h+1*u[l]],f),h+=Number(u[l]),e.lineTo(c,h);break;case"H":for(l=0;u[l];l+=1)n.bBoxFromPoint([c,u[l]],[h],f),c=Number(u[l]),e.lineTo(c,h);break;case"h":for(l=0;u[l];l+=1)n.bBoxFromPoint([c,1*c+1*u[l]],[h],f),c+=Number(u[l]),e.lineTo(c,h);break;case"Q":for(l=0;u[l];l+=4)n.qBezierBBox(c,h,u[l],u[l+1],u[l+2],u[l+3],f),e.quadraticCurveTo(Number(u[l]),Number(u[l+1]),Number(u[l+2]),Number(u[l+3])),c=Number(u[l+2]),h=Number(u[l+3]);break;case"q":for(l=0;u[l];l+=4)n.qBezierBBox(c,h,c+1*u[l],h+1*u[l+1],1*c+1*u[l+2],1*h+1*u[l+3],f),e.quadraticCurveTo(c+1*u[l],h+1*u[l+1],c+=Number(u[l+2]),h+=Number(u[l+3]));break;case"C":for(l=0;u[l];l+=6)n.cBezierBBox(c,h,u[l],u[l+1],u[l+2],u[l+3],u[l+4],u[l+5],f),e.bezierCurveTo(u[l],u[l+1],u[l+2],u[l+3],u[l+4],u[l+5]),c=Number(u[l+4]),h=Number(u[l+5]);break;case"c":for(l=0;u[l];l+=6)n.cBezierBBox(c,h,c+1*u[l],1*h+1*u[l+1],c+1*u[l+2],1*h+1*u[l+3],c+1*u[l+4],1*h+1*u[l+5],f),e.bezierCurveTo(c+Number(u[l]),h+Number(u[l+1]),c+Number(u[l+2]),h+Number(u[l+3]),c+=Number(u[l+4]),h+=Number(u[l+5]));break;case"a":case"A":for(l=0;u[l];l+=7){var p,M,m,v,x,d,y,g,w,N,k,P,S,T,B,A,C,I,V,E=Number(u[l]),F=Number(u[l+1]);if(p=Number(u[l+2])*(Math.PI/180),M=Number(u[l+3]),m=Number(u[l+4]),v=Number(u[l+5]),x=Number(u[l+6]),d=Math.cos(p)*(c-v)/2+Math.sin(p)*(h-x)/2,y=-Math.sin(p)*(c-v)/2+Math.cos(p)*(h-x)/2,E=E<0?-E:E,F=F<0?-F:F,A=Math.pow(d,2)/Math.pow(E,2)+Math.pow(y,2)/Math.pow(F,2),A>1&&(E*=Math.sqrt(A),F*=Math.sqrt(A)),C=E>F?E:F,I=E>F?1:E/F,V=E>F?F/E:1,g=M==m?-1:1,w=g*Math.sqrt((Math.pow(E,2)*Math.pow(F,2)-Math.pow(E,2)*Math.pow(y,2)-Math.pow(F,2)*Math.pow(d,2))/(Math.pow(E,2)*Math.pow(y,2)+Math.pow(F,2)*Math.pow(d,2))),isNaN(w)&&(w=0),N=w*(E*y)/F,k=F*d*-w/E,P=N*Math.cos(p)-k*Math.sin(p)+(c+v)/2,S=N*Math.sin(p)+k*Math.cos(p)+(h+x)/2,T=n.angleBetweenVectors(1,0,(d-N)/E,(y-k)/F),B=n.angleBetweenVectors((d-N)/E,(y-k)/F,(-d-N)/E,(-y-k)/F),0==m&&B>0&&(B-=Math.PI/180*360),1==m&&B<0&&(B+=Math.PI/180*360),0==E&&0==F){e.lineTo(v,x);break}e.save();var O=n.combineTransformMatrix([[1,0,P,0,1,S],[Math.cos(p),Math.sin(p),0,Math.sin(p),Math.cos(p),0],[I,0,0,0,V,0]]);e.transform(O[0],O[3],O[1],O[4],O[2],O[5]),e.arc(0,0,C,T,T+B,1-m),e.restore(),n.arcBBox(0,0,C,T,T+B,1-m,[O[0],O[3],O[1],O[4],O[2],O[5]],f),"A"==s?(c=Number(u[l+5]),h=Number(u[l+6])):(c+=Number(u[l+5]),h+=Number(u[l+6]))}break;case"Z":case"z":e.closePath()}"draw"===r&&((!t.attributes.fill||t.attributes.fill&&"none"!=t.attributes.fill.value)&&(n.applyFillEffect(t,e,a,f),e.fill(),n.endFillEffect(t,e)),(!t.attributes.stroke||t.attributes.stroke&&"none"!=t.attributes.stroke.value)&&(n.applyStrokeEffect(t,e,a,f),e.stroke(),n.endStrokeEffect(t,e)),i())},n.drawNodes=function(t,e,a,r,i){var n=t.length,s=-1,u=0,l=0,b=function(){var f;s+=1,s<n?(f=t[s],f.tagName&&"defs"===f.tagName&&(s+=1,f=t[s]),f.attributes&&(f.attributes.dy&&(l=f.attributes.dy.value=1*f.attributes.dy.value+1*l),f.attributes.dx&&(u=f.attributes.dx.value=1*f.attributes.dx.value+1*u)),o.common(f,e,a,r,b)):i&&i()};b()},n.getSvgDimention=function(t){var e={width:0,height:0},a=t.childNodes&&t.childNodes[0]&&t.childNodes[0].attributes;return e.width=Number(a.width&&a.width.value||0),e.height=Number(a.height&&a.height.value||0),e},n.storeImagesInArr=function(t){var e,a,r,i,o=t.getSVG();r=t._getStore("imageArr"),e=o.getElementsByTagName("image");for(i in e)e.hasOwnProperty(i)&&e[i].attributes&&e[i].attributes["xlink:href"]&&(a=e[i].attributes["xlink:href"].value,r[a]||(r[a]=[],r[a].status="progress",r[a].callback=null,r[a].obj=new Image,r[a].obj.onload=function(t){return function(){var e=r[t].callback;e?(r[t].status="complete",e()):r[t].status="complete"}}(a),r[a].obj.onerror=function(t){return function(){var e=r[t].errCallback;e?(r[t].status="error",e()):r[t].status="error"}}(a),r[a].obj.src=a))},n.startTransform=function(t,e){var a,r,i=t.match(/[^\s][a-z,0-9.\-(\s]+\)/gi);for(r in i)i.hasOwnProperty(r)&&(i[r].indexOf("matrix")>-1&&(a=n.stringToArgs(i[r]),e.transform(a[0],a[1],a[2],a[3],a[4],a[5])),i[r].indexOf("translate")>-1&&(a=n.stringToArgs(i[r]),e.translate(a[0]||0,a[1]||0)),i[r].indexOf("rotate")>-1&&(a=n.stringToArgs(i[r]),3==a.length?(e.translate(a[1],a[2]),e.rotate(a[0]*(Math.PI/180)),e.translate(-a[1],-a[2])):e.rotate(a[0]*(Math.PI/180))),i[r].indexOf("scale")>-1&&(a=n.stringToArgs(i[r]),1==a.length?e.scale(a[0]||1,a[0]||1):e.scale(a[0]||1,a[1]||1)),i[r].indexOf("skewX")>-1&&(a=n.stringToArgs(i[r]),e.transform(1,0,Math.tan(a[0]*(Math.PI/180)),1,0,0)),i[r].indexOf("skewY")>-1&&(a=n.stringToArgs(i[r]),e.transform(1,Math.tan(a[0]*(Math.PI/180)),0,1,0,0)))},n.resetTransform=function(t){t.setTransform(1,0,0,1,0,0)},n.stringToArgs=function(t){var e=/\(([^\)]+)/.exec(t)[1];return n.getArgsAsArray(e)},n.getArgsAsArray=function(t){var e;for(t=t.trim().split(/[\s,]+/),e=0;e<t.length;e++)t[e].trim(),0==t[e].length&&t.splice(e,1);return t},n.applyFillEffect=function(t,e,a,r){var i;t.attributes["fill-opacity"]&&"none"!=t.attributes["fill-opacity"].value?e.globalAlpha=t.attributes["fill-opacity"].value:e.globalAlpha=1,t.attributes.fill&&t.attributes.fill.value.indexOf("url(")>-1?(i=n.getFillStyleById(/url\(.*#([^\)'"]+)/.exec(t.attributes.fill.value)[1],e,a,r),e.fillStyle=i):t.attributes.fill?e.fillStyle=t.attributes.fill.value:e.fillStyle="#000000"},n.endFillEffect=function(t,e){e.globalAlpha=1},n.applyStrokeEffect=function(t,e,a,r){t.attributes["stroke-opacity"]&&"none"!=t.attributes["stroke-opacity"].value&&(e.globalAlpha=t.attributes["stroke-opacity"].value),t.attributes["stroke-width"]&&(e.lineWidth=t.attributes["stroke-width"].value,0==t.attributes["stroke-width"].value&&(e.globalAlpha=0)),t.attributes["stroke-linecap"]&&"none"!=t.attributes["stroke-linecap"].value&&(e.lineCap=t.attributes["stroke-linecap"].value),t.attributes["stroke-linejoin"]&&"none"!=t.attributes["stroke-linejoin"].value&&(e.lineJoin=t.attributes["stroke-linejoin"].value),t.attributes["stroke-dasharray"]&&"none"!=t.attributes["stroke-dasharray"].value&&e.setLineDash&&e.setLineDash(n.getArgsAsArray(t.attributes["stroke-dasharray"].value)),t.attributes.stroke?e.strokeStyle=t.attributes.stroke.value:e.strokeStyle="#000000"},n.endStrokeEffect=function(t,e){t.attributes["stroke-opacity"]&&"none"!=t.attributes["stroke-opacity"].value&&(e.globalAlpha=1,e.setLineDash&&e.setLineDash([]),e.lineWidth=1),e.globalAlpha=1},n.applyClip=function(t,e,a){var r,i,s,u,l,b=a.getSVG();if(-1!==t.indexOf("url(")){r=/url\(.*#([^\)'"]+)/.exec(t)[1],i=b.getElementById(r),i.attributes&&(e.save(),i.attributes.transform&&n.startTransform(i.attributes.transform.value,e)),s=i.childNodes;for(u in s)s.hasOwnProperty(u)&&s[u].tagName&&s[u].constructor!==Array&&(l="draw"+s[u].tagName,s[u].attributes&&(e.save(),s[u].attributes.transform&&n.startTransform(s[u].attributes.transform.value,e)),o[l]&&(o[l](s[u],e,a,"clip"),e.closePath()),s[u].attributes&&e.restore());i.attributes&&e.restore(),e.clip()}},n.getFillStyleById=function(t,e,a,r){var i=a.getSVG(),o=i.getElementById(t);return"linearGradient"==o.tagName?n.getLinearGradient(o,e,r):"radialGradient"==o.tagName?n.getRadialGradient(o,e,r):"#FFFFFF"},n.getLinearGradient=function(t,e,a){var r,i,o,s,u,l=t.attributes.x1?n.getPercentValue(t.attributes.x1.value,a.xMax-a.xMin,a.xMin):0,b=t.attributes.y1?n.getPercentValue(t.attributes.y1.value,a.yMax-a.yMin,a.yMin):0,f=t.attributes.x2?n.getPercentValue(t.attributes.x2.value,a.xMax-a.xMin,a.xMin):0,c=t.attributes.y2?n.getPercentValue(t.attributes.y2.value,a.yMax-a.yMin,a.yMin):0;r=e.createLinearGradient(l,b,f,c),i=t.childNodes;for(o in i)i.hasOwnProperty(o)&&i[o].attributes&&i[o].attributes["stop-color"]&&(s=n.toRGB(i[o].attributes["stop-color"].value),u=i[o].attributes["stop-opacity"]?i[o].attributes["stop-opacity"].value:1,s.status?r.addColorStop(n.getPercentValue(i[o].attributes.offset.value,1,0),"rgba("+s.r+","+s.g+","+s.b+","+Number(u)+")"):r.addColorStop(n.getPercentValue(i[o].attributes.offset.value,1,0),i[o].attributes["stop-color"].value));return r},n.getRadialGradient=function(t,e,a){var r,i,o,s,u,l=t.attributes.cx?n.getPercentValue(t.attributes.cx.value,a.xMax-a.xMin,a.xMin):a.xMin+.5*(a.xMax-a.xMin),b=t.attributes.cy?n.getPercentValue(t.attributes.cy.value,a.yMax-a.yMin,a.yMin):a.yMin+.5*(a.yMax-a.yMin),f=t.attributes.fx?n.getPercentValue(t.attributes.fx.value,a.xMax-a.xMin,a.xMin):a.xMin+.5*(a.xMax-a.xMin),c=t.attributes.fy?n.getPercentValue(t.attributes.fy.value,a.yMax-a.yMin,a.yMin):a.yMin+.5*(a.yMax-a.yMin),h=t.attributes.r?n.getPercentValue(t.attributes.r.value,(a.yMax-a.yMin+a.xMax-a.xMin)/2,0):n.getPercentValue("50%",(a.yMax-a.yMin+a.xMax-a.xMin)/2,0);r=e.createRadialGradient(f,c,0,l,b,h),i=t.childNodes;for(o in i)i.hasOwnProperty(o)&&i[o].attributes&&i[o].attributes["stop-color"]&&(s=n.toRGB(i[o].attributes["stop-color"].value),u=i[o].attributes["stop-opacity"]?i[o].attributes["stop-opacity"].value:1,s.status?r.addColorStop(n.getPercentValue(i[o].attributes.offset.value,1,0),"rgba("+s.r+","+s.g+","+s.b+","+Number(u)+")"):r.addColorStop(n.getPercentValue(i[o].attributes.offset.value,1,0),i[o].attributes["stop-color"].value));return r},n.getPercentValue=function(t,e,a){var r;return-1!=t.indexOf("%")?(r=/(\d.*)%/.exec(t)[1],r>100&&(r=100),r*e/100+1*a):t>1?t:t*e+1*a},n.bBoxFromPoint=function(t,e,a){void 0!==a.xMin&&(t.push(a.xMin,a.xMax),e.push(a.yMin,a.yMax)),a.xMin=Math.min.apply(this,t),a.xMax=Math.max.apply(this,t),a.yMin=Math.min.apply(this,e),a.yMax=Math.max.apply(this,e)},n.arcBBox=function(t,e,a,r,i,o,n,s){var u,l,b,f,c,h,p,M,m,v,x,d,y;n instanceof Array&&(t=t*n[0]+t*n[2]+n[4],e=e*n[1]+e*n[3]+n[5]),y=function(t,e,a){return t=(t+2*Math.PI)%(2*Math.PI),e=(e+2*Math.PI)%(2*Math.PI),t<=e?t<=a&&a<=e:t>=e?!(t>=a&&a>=e):void 0},u=r%(2*Math.PI),l=i%(2*Math.PI),o&&(u=i%(2*Math.PI),l=r%(2*Math.PI)),b=t+a*Math.cos(u),c=e+a*Math.sin(u),f=t+a*Math.cos(l),h=e+a*Math.sin(l),x=[b,f],d=[c,h],y(u,l,0)&&(x.push(1*t+1*a),d.push(e)),y(u,l,.5*Math.PI)&&(x.push(t),d.push(1*e+1*a)),y(u,l,Math.PI)&&(x.push(t-1*a),d.push(e)),y(u,l,1.5*Math.PI)&&(x.push(t),d.push(e-1*a)),m=Math.max.apply(this,x),p=Math.min.apply(this,x),v=Math.max.apply(this,d),M=Math.min.apply(this,d),void 0!==s.xMin?(s.xMin=Math.min(p,s.xMin),s.xMax=Math.max(m,s.xMax),s.yMin=Math.min(M,s.yMin),s.yMax=Math.max(v,s.yMax)):(s.xMin=p,s.xMax=m,s.yMin=M,s.yMax=v)},n.qBezierBBox=function(t,e,a,r,i,o,n){var s,u,l,b,f,c,h,p,M=1*t-2*a+1*i,m=1*e-2*r+1*o;0==M||0==m?(f=Math.max(t,i),l=Math.min(t,i),c=Math.max(e,o),b=Math.min(e,o)):(s=(t-a)/M,u=(e-r)/m,h=t*Math.pow(1-s,2)+2*a*(1-s)*s+i*Math.pow(s,2),p=e*Math.pow(1-u,2)+2*r*(1-u)*u+o*Math.pow(u,2),f=Math.max(t,i,h),l=Math.min(t,i,h),c=Math.max(e,o,p),b=Math.min(e,o,p)),void 0!==n.xMin?(n.xMin=Math.min(l,n.xMin),n.xMax=Math.max(f,n.xMax),n.yMin=Math.min(b,n.yMin),n.yMax=Math.max(c,n.yMax)):(n.xMin=l,n.xMax=f,n.yMin=b,n.yMax=c)},n.cBezierBBox=function(t,e,a,r,i,o,n,s,u){var l,b,f,c,h,p,M,m,v,x,d,y,g;null==i&&null==o&&(a=t+2/3*(a-t),i=e+2/3*(r-e),r=a+1/3*(n-t),o=i+1/3*(s-e)),d=function(t,e,a,r,i){return t*Math.pow(1-i,3)+3*e*i*Math.pow(1-i,2)+3*a*i*i*(1-i)+r*i*i*i},h=3*n-9*i+9*a-3*t,p=6*t-12*a+6*i,M=3*a-3*t,m=Math.pow(p,2)-4*h*M,l=t,b=t,n<l&&(l=n),n>b&&(b=n),m>=0&&(v=(-p+Math.sqrt(m))/(2*h),v>0&&v<1&&(y=d(t,a,i,n,v),y<l&&(l=y),y>b&&(b=y)),(x=(-p-Math.sqrt(m))/(2*h))>0&&x<1&&(y=d(t,a,i,n,x),y<l&&(l=y),y>b&&(b=y))),h=3*s-9*o+9*r-3*e,p=6*e-12*r+6*o,M=3*r-3*e,m=Math.pow(p,2)-4*h*M;var f=e,c=e;s<f&&(f=s),s>c&&(c=s),m>=0&&(v=(-p+Math.sqrt(m))/(2*h),v>0&&v<1&&(g=d(e,r,o,s,v),g<f&&(f=g),g>c&&(c=g)),(x=(-p-Math.sqrt(m))/(2*h))>0&&x<1&&(g=d(e,r,o,s,x),g<f&&(f=g),g>c&&(c=g))),void 0!==u.xMin?(u.xMin=Math.min(l,u.xMin),u.xMax=Math.max(b,u.xMax),u.yMin=Math.min(f,u.yMin),u.yMax=Math.max(c,u.yMax)):(u.xMin=l,u.xMax=b,u.yMin=f,u.yMax=c)},n.combineTransformMatrix=function(t){var e,a,r=t.length-1;if(r<=0)return t[0];for(a=t[0],e=1;e<=r;e++)a[0]=a[0]*t[e][0]+a[1]*t[e][3],a[1]=a[0]*t[e][1]+a[1]*t[e][4],a[2]=a[0]*t[e][2]+a[1]*t[e][5]+1*a[2],a[3]=a[3]*t[e][0]+a[4]*t[e][3],a[4]=a[3]*t[e][1]+a[4]*t[e][4],a[5]=a[3]*t[e][2]+a[4]*t[e][5]+1*a[5];return a},n.angleBetweenVectors=function(t,e,a,r){var i=t*r<e*a?-1:1,o=t*a+e*r,n=Math.sqrt(Math.pow(t,2)+Math.pow(e,2)),s=Math.sqrt(Math.pow(a,2)+Math.pow(r,2));return i*Math.acos(o/(n*s))},n.toRGB=function(t){var e,a,r,i={r:0,g:0,b:0,status:0};return a=function(t){for(r in t)t.hasOwnProperty(r)&&(t[r]<0||isNaN(t[r])?t[r]=0:t[r]>255&&(t[r]=255));return i={r:t[0],g:t[1],b:t[2],status:1}},t=t.trim(),t.match(/^rgb\(|^rgba\(/i)?(e=/\(\s*(\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})/.exec(t),a([parseInt(e[1]),parseInt(e[2]),parseInt(e[3])])):t.match(/^#/)&&(e=/(\w{2})(\w{2})(\w{2})/.exec(t),a([parseInt(e[1],16),parseInt(e[2],16),parseInt(e[3],16)])),i},n.StrToDom=function(t){var e,a;return r.DOMParser?(e=new DOMParser,a=e.parseFromString(t,"text/xml")):(a=new ActiveXObject("Microsoft.XMLDOM"),a.async=!1,a.loadXML(t)),a},e.exports=a}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}]},{},[1]);