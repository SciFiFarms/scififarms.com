//     Underscore.js 1.8.3
//     http://underscorejs.org
//     (c) 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.
(function(){function n(n){function t(t,r,e,u,i,o){for(;i>=0&&o>i;i+=n){var a=u?u[i]:i;e=r(e,t[a],a,t)}return e}return function(r,e,u,i){e=b(e,i,4);var o=!k(r)&&m.keys(r),a=(o||r).length,c=n>0?0:a-1;return arguments.length<3&&(u=r[o?o[c]:c],c+=n),t(r,e,u,o,c,a)}}function t(n){return function(t,r,e){r=x(r,e);for(var u=O(t),i=n>0?0:u-1;i>=0&&u>i;i+=n)if(r(t[i],i,t))return i;return-1}}function r(n,t,r){return function(e,u,i){var o=0,a=O(e);if("number"==typeof i)n>0?o=i>=0?i:Math.max(i+a,o):a=i>=0?Math.min(i+1,a):i+a+1;else if(r&&i&&a)return i=r(e,u),e[i]===u?i:-1;if(u!==u)return i=t(l.call(e,o,a),m.isNaN),i>=0?i+o:-1;for(i=n>0?o:a-1;i>=0&&a>i;i+=n)if(e[i]===u)return i;return-1}}function e(n,t){var r=I.length,e=n.constructor,u=m.isFunction(e)&&e.prototype||a,i="constructor";for(m.has(n,i)&&!m.contains(t,i)&&t.push(i);r--;)i=I[r],i in n&&n[i]!==u[i]&&!m.contains(t,i)&&t.push(i)}var u=this,i=u._,o=Array.prototype,a=Object.prototype,c=Function.prototype,f=o.push,l=o.slice,s=a.toString,p=a.hasOwnProperty,h=Array.isArray,v=Object.keys,g=c.bind,y=Object.create,d=function(){},m=function(n){return n instanceof m?n:this instanceof m?void(this._wrapped=n):new m(n)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=m),exports._=m):u._=m,m.VERSION="1.8.3";var b=function(n,t,r){if(t===void 0)return n;switch(null==r?3:r){case 1:return function(r){return n.call(t,r)};case 2:return function(r,e){return n.call(t,r,e)};case 3:return function(r,e,u){return n.call(t,r,e,u)};case 4:return function(r,e,u,i){return n.call(t,r,e,u,i)}}return function(){return n.apply(t,arguments)}},x=function(n,t,r){return null==n?m.identity:m.isFunction(n)?b(n,t,r):m.isObject(n)?m.matcher(n):m.property(n)};m.iteratee=function(n,t){return x(n,t,1/0)};var _=function(n,t){return function(r){var e=arguments.length;if(2>e||null==r)return r;for(var u=1;e>u;u++)for(var i=arguments[u],o=n(i),a=o.length,c=0;a>c;c++){var f=o[c];t&&r[f]!==void 0||(r[f]=i[f])}return r}},j=function(n){if(!m.isObject(n))return{};if(y)return y(n);d.prototype=n;var t=new d;return d.prototype=null,t},w=function(n){return function(t){return null==t?void 0:t[n]}},A=Math.pow(2,53)-1,O=w("length"),k=function(n){var t=O(n);return"number"==typeof t&&t>=0&&A>=t};m.each=m.forEach=function(n,t,r){t=b(t,r);var e,u;if(k(n))for(e=0,u=n.length;u>e;e++)t(n[e],e,n);else{var i=m.keys(n);for(e=0,u=i.length;u>e;e++)t(n[i[e]],i[e],n)}return n},m.map=m.collect=function(n,t,r){t=x(t,r);for(var e=!k(n)&&m.keys(n),u=(e||n).length,i=Array(u),o=0;u>o;o++){var a=e?e[o]:o;i[o]=t(n[a],a,n)}return i},m.reduce=m.foldl=m.inject=n(1),m.reduceRight=m.foldr=n(-1),m.find=m.detect=function(n,t,r){var e;return e=k(n)?m.findIndex(n,t,r):m.findKey(n,t,r),e!==void 0&&e!==-1?n[e]:void 0},m.filter=m.select=function(n,t,r){var e=[];return t=x(t,r),m.each(n,function(n,r,u){t(n,r,u)&&e.push(n)}),e},m.reject=function(n,t,r){return m.filter(n,m.negate(x(t)),r)},m.every=m.all=function(n,t,r){t=x(t,r);for(var e=!k(n)&&m.keys(n),u=(e||n).length,i=0;u>i;i++){var o=e?e[i]:i;if(!t(n[o],o,n))return!1}return!0},m.some=m.any=function(n,t,r){t=x(t,r);for(var e=!k(n)&&m.keys(n),u=(e||n).length,i=0;u>i;i++){var o=e?e[i]:i;if(t(n[o],o,n))return!0}return!1},m.contains=m.includes=m.include=function(n,t,r,e){return k(n)||(n=m.values(n)),("number"!=typeof r||e)&&(r=0),m.indexOf(n,t,r)>=0},m.invoke=function(n,t){var r=l.call(arguments,2),e=m.isFunction(t);return m.map(n,function(n){var u=e?t:n[t];return null==u?u:u.apply(n,r)})},m.pluck=function(n,t){return m.map(n,m.property(t))},m.where=function(n,t){return m.filter(n,m.matcher(t))},m.findWhere=function(n,t){return m.find(n,m.matcher(t))},m.max=function(n,t,r){var e,u,i=-1/0,o=-1/0;if(null==t&&null!=n){n=k(n)?n:m.values(n);for(var a=0,c=n.length;c>a;a++)e=n[a],e>i&&(i=e)}else t=x(t,r),m.each(n,function(n,r,e){u=t(n,r,e),(u>o||u===-1/0&&i===-1/0)&&(i=n,o=u)});return i},m.min=function(n,t,r){var e,u,i=1/0,o=1/0;if(null==t&&null!=n){n=k(n)?n:m.values(n);for(var a=0,c=n.length;c>a;a++)e=n[a],i>e&&(i=e)}else t=x(t,r),m.each(n,function(n,r,e){u=t(n,r,e),(o>u||1/0===u&&1/0===i)&&(i=n,o=u)});return i},m.shuffle=function(n){for(var t,r=k(n)?n:m.values(n),e=r.length,u=Array(e),i=0;e>i;i++)t=m.random(0,i),t!==i&&(u[i]=u[t]),u[t]=r[i];return u},m.sample=function(n,t,r){return null==t||r?(k(n)||(n=m.values(n)),n[m.random(n.length-1)]):m.shuffle(n).slice(0,Math.max(0,t))},m.sortBy=function(n,t,r){return t=x(t,r),m.pluck(m.map(n,function(n,r,e){return{value:n,index:r,criteria:t(n,r,e)}}).sort(function(n,t){var r=n.criteria,e=t.criteria;if(r!==e){if(r>e||r===void 0)return 1;if(e>r||e===void 0)return-1}return n.index-t.index}),"value")};var F=function(n){return function(t,r,e){var u={};return r=x(r,e),m.each(t,function(e,i){var o=r(e,i,t);n(u,e,o)}),u}};m.groupBy=F(function(n,t,r){m.has(n,r)?n[r].push(t):n[r]=[t]}),m.indexBy=F(function(n,t,r){n[r]=t}),m.countBy=F(function(n,t,r){m.has(n,r)?n[r]++:n[r]=1}),m.toArray=function(n){return n?m.isArray(n)?l.call(n):k(n)?m.map(n,m.identity):m.values(n):[]},m.size=function(n){return null==n?0:k(n)?n.length:m.keys(n).length},m.partition=function(n,t,r){t=x(t,r);var e=[],u=[];return m.each(n,function(n,r,i){(t(n,r,i)?e:u).push(n)}),[e,u]},m.first=m.head=m.take=function(n,t,r){return null==n?void 0:null==t||r?n[0]:m.initial(n,n.length-t)},m.initial=function(n,t,r){return l.call(n,0,Math.max(0,n.length-(null==t||r?1:t)))},m.last=function(n,t,r){return null==n?void 0:null==t||r?n[n.length-1]:m.rest(n,Math.max(0,n.length-t))},m.rest=m.tail=m.drop=function(n,t,r){return l.call(n,null==t||r?1:t)},m.compact=function(n){return m.filter(n,m.identity)};var S=function(n,t,r,e){for(var u=[],i=0,o=e||0,a=O(n);a>o;o++){var c=n[o];if(k(c)&&(m.isArray(c)||m.isArguments(c))){t||(c=S(c,t,r));var f=0,l=c.length;for(u.length+=l;l>f;)u[i++]=c[f++]}else r||(u[i++]=c)}return u};m.flatten=function(n,t){return S(n,t,!1)},m.without=function(n){return m.difference(n,l.call(arguments,1))},m.uniq=m.unique=function(n,t,r,e){m.isBoolean(t)||(e=r,r=t,t=!1),null!=r&&(r=x(r,e));for(var u=[],i=[],o=0,a=O(n);a>o;o++){var c=n[o],f=r?r(c,o,n):c;t?(o&&i===f||u.push(c),i=f):r?m.contains(i,f)||(i.push(f),u.push(c)):m.contains(u,c)||u.push(c)}return u},m.union=function(){return m.uniq(S(arguments,!0,!0))},m.intersection=function(n){for(var t=[],r=arguments.length,e=0,u=O(n);u>e;e++){var i=n[e];if(!m.contains(t,i)){for(var o=1;r>o&&m.contains(arguments[o],i);o++);o===r&&t.push(i)}}return t},m.difference=function(n){var t=S(arguments,!0,!0,1);return m.filter(n,function(n){return!m.contains(t,n)})},m.zip=function(){return m.unzip(arguments)},m.unzip=function(n){for(var t=n&&m.max(n,O).length||0,r=Array(t),e=0;t>e;e++)r[e]=m.pluck(n,e);return r},m.object=function(n,t){for(var r={},e=0,u=O(n);u>e;e++)t?r[n[e]]=t[e]:r[n[e][0]]=n[e][1];return r},m.findIndex=t(1),m.findLastIndex=t(-1),m.sortedIndex=function(n,t,r,e){r=x(r,e,1);for(var u=r(t),i=0,o=O(n);o>i;){var a=Math.floor((i+o)/2);r(n[a])<u?i=a+1:o=a}return i},m.indexOf=r(1,m.findIndex,m.sortedIndex),m.lastIndexOf=r(-1,m.findLastIndex),m.range=function(n,t,r){null==t&&(t=n||0,n=0),r=r||1;for(var e=Math.max(Math.ceil((t-n)/r),0),u=Array(e),i=0;e>i;i++,n+=r)u[i]=n;return u};var E=function(n,t,r,e,u){if(!(e instanceof t))return n.apply(r,u);var i=j(n.prototype),o=n.apply(i,u);return m.isObject(o)?o:i};m.bind=function(n,t){if(g&&n.bind===g)return g.apply(n,l.call(arguments,1));if(!m.isFunction(n))throw new TypeError("Bind must be called on a function");var r=l.call(arguments,2),e=function(){return E(n,e,t,this,r.concat(l.call(arguments)))};return e},m.partial=function(n){var t=l.call(arguments,1),r=function(){for(var e=0,u=t.length,i=Array(u),o=0;u>o;o++)i[o]=t[o]===m?arguments[e++]:t[o];for(;e<arguments.length;)i.push(arguments[e++]);return E(n,r,this,this,i)};return r},m.bindAll=function(n){var t,r,e=arguments.length;if(1>=e)throw new Error("bindAll must be passed function names");for(t=1;e>t;t++)r=arguments[t],n[r]=m.bind(n[r],n);return n},m.memoize=function(n,t){var r=function(e){var u=r.cache,i=""+(t?t.apply(this,arguments):e);return m.has(u,i)||(u[i]=n.apply(this,arguments)),u[i]};return r.cache={},r},m.delay=function(n,t){var r=l.call(arguments,2);return setTimeout(function(){return n.apply(null,r)},t)},m.defer=m.partial(m.delay,m,1),m.throttle=function(n,t,r){var e,u,i,o=null,a=0;r||(r={});var c=function(){a=r.leading===!1?0:m.now(),o=null,i=n.apply(e,u),o||(e=u=null)};return function(){var f=m.now();a||r.leading!==!1||(a=f);var l=t-(f-a);return e=this,u=arguments,0>=l||l>t?(o&&(clearTimeout(o),o=null),a=f,i=n.apply(e,u),o||(e=u=null)):o||r.trailing===!1||(o=setTimeout(c,l)),i}},m.debounce=function(n,t,r){var e,u,i,o,a,c=function(){var f=m.now()-o;t>f&&f>=0?e=setTimeout(c,t-f):(e=null,r||(a=n.apply(i,u),e||(i=u=null)))};return function(){i=this,u=arguments,o=m.now();var f=r&&!e;return e||(e=setTimeout(c,t)),f&&(a=n.apply(i,u),i=u=null),a}},m.wrap=function(n,t){return m.partial(t,n)},m.negate=function(n){return function(){return!n.apply(this,arguments)}},m.compose=function(){var n=arguments,t=n.length-1;return function(){for(var r=t,e=n[t].apply(this,arguments);r--;)e=n[r].call(this,e);return e}},m.after=function(n,t){return function(){return--n<1?t.apply(this,arguments):void 0}},m.before=function(n,t){var r;return function(){return--n>0&&(r=t.apply(this,arguments)),1>=n&&(t=null),r}},m.once=m.partial(m.before,2);var M=!{toString:null}.propertyIsEnumerable("toString"),I=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"];m.keys=function(n){if(!m.isObject(n))return[];if(v)return v(n);var t=[];for(var r in n)m.has(n,r)&&t.push(r);return M&&e(n,t),t},m.allKeys=function(n){if(!m.isObject(n))return[];var t=[];for(var r in n)t.push(r);return M&&e(n,t),t},m.values=function(n){for(var t=m.keys(n),r=t.length,e=Array(r),u=0;r>u;u++)e[u]=n[t[u]];return e},m.mapObject=function(n,t,r){t=x(t,r);for(var e,u=m.keys(n),i=u.length,o={},a=0;i>a;a++)e=u[a],o[e]=t(n[e],e,n);return o},m.pairs=function(n){for(var t=m.keys(n),r=t.length,e=Array(r),u=0;r>u;u++)e[u]=[t[u],n[t[u]]];return e},m.invert=function(n){for(var t={},r=m.keys(n),e=0,u=r.length;u>e;e++)t[n[r[e]]]=r[e];return t},m.functions=m.methods=function(n){var t=[];for(var r in n)m.isFunction(n[r])&&t.push(r);return t.sort()},m.extend=_(m.allKeys),m.extendOwn=m.assign=_(m.keys),m.findKey=function(n,t,r){t=x(t,r);for(var e,u=m.keys(n),i=0,o=u.length;o>i;i++)if(e=u[i],t(n[e],e,n))return e},m.pick=function(n,t,r){var e,u,i={},o=n;if(null==o)return i;m.isFunction(t)?(u=m.allKeys(o),e=b(t,r)):(u=S(arguments,!1,!1,1),e=function(n,t,r){return t in r},o=Object(o));for(var a=0,c=u.length;c>a;a++){var f=u[a],l=o[f];e(l,f,o)&&(i[f]=l)}return i},m.omit=function(n,t,r){if(m.isFunction(t))t=m.negate(t);else{var e=m.map(S(arguments,!1,!1,1),String);t=function(n,t){return!m.contains(e,t)}}return m.pick(n,t,r)},m.defaults=_(m.allKeys,!0),m.create=function(n,t){var r=j(n);return t&&m.extendOwn(r,t),r},m.clone=function(n){return m.isObject(n)?m.isArray(n)?n.slice():m.extend({},n):n},m.tap=function(n,t){return t(n),n},m.isMatch=function(n,t){var r=m.keys(t),e=r.length;if(null==n)return!e;for(var u=Object(n),i=0;e>i;i++){var o=r[i];if(t[o]!==u[o]||!(o in u))return!1}return!0};var N=function(n,t,r,e){if(n===t)return 0!==n||1/n===1/t;if(null==n||null==t)return n===t;n instanceof m&&(n=n._wrapped),t instanceof m&&(t=t._wrapped);var u=s.call(n);if(u!==s.call(t))return!1;switch(u){case"[object RegExp]":case"[object String]":return""+n==""+t;case"[object Number]":return+n!==+n?+t!==+t:0===+n?1/+n===1/t:+n===+t;case"[object Date]":case"[object Boolean]":return+n===+t}var i="[object Array]"===u;if(!i){if("object"!=typeof n||"object"!=typeof t)return!1;var o=n.constructor,a=t.constructor;if(o!==a&&!(m.isFunction(o)&&o instanceof o&&m.isFunction(a)&&a instanceof a)&&"constructor"in n&&"constructor"in t)return!1}r=r||[],e=e||[];for(var c=r.length;c--;)if(r[c]===n)return e[c]===t;if(r.push(n),e.push(t),i){if(c=n.length,c!==t.length)return!1;for(;c--;)if(!N(n[c],t[c],r,e))return!1}else{var f,l=m.keys(n);if(c=l.length,m.keys(t).length!==c)return!1;for(;c--;)if(f=l[c],!m.has(t,f)||!N(n[f],t[f],r,e))return!1}return r.pop(),e.pop(),!0};m.isEqual=function(n,t){return N(n,t)},m.isEmpty=function(n){return null==n?!0:k(n)&&(m.isArray(n)||m.isString(n)||m.isArguments(n))?0===n.length:0===m.keys(n).length},m.isElement=function(n){return!(!n||1!==n.nodeType)},m.isArray=h||function(n){return"[object Array]"===s.call(n)},m.isObject=function(n){var t=typeof n;return"function"===t||"object"===t&&!!n},m.each(["Arguments","Function","String","Number","Date","RegExp","Error"],function(n){m["is"+n]=function(t){return s.call(t)==="[object "+n+"]"}}),m.isArguments(arguments)||(m.isArguments=function(n){return m.has(n,"callee")}),"function"!=typeof/./&&"object"!=typeof Int8Array&&(m.isFunction=function(n){return"function"==typeof n||!1}),m.isFinite=function(n){return isFinite(n)&&!isNaN(parseFloat(n))},m.isNaN=function(n){return m.isNumber(n)&&n!==+n},m.isBoolean=function(n){return n===!0||n===!1||"[object Boolean]"===s.call(n)},m.isNull=function(n){return null===n},m.isUndefined=function(n){return n===void 0},m.has=function(n,t){return null!=n&&p.call(n,t)},m.noConflict=function(){return u._=i,this},m.identity=function(n){return n},m.constant=function(n){return function(){return n}},m.noop=function(){},m.property=w,m.propertyOf=function(n){return null==n?function(){}:function(t){return n[t]}},m.matcher=m.matches=function(n){return n=m.extendOwn({},n),function(t){return m.isMatch(t,n)}},m.times=function(n,t,r){var e=Array(Math.max(0,n));t=b(t,r,1);for(var u=0;n>u;u++)e[u]=t(u);return e},m.random=function(n,t){return null==t&&(t=n,n=0),n+Math.floor(Math.random()*(t-n+1))},m.now=Date.now||function(){return(new Date).getTime()};var B={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},T=m.invert(B),R=function(n){var t=function(t){return n[t]},r="(?:"+m.keys(n).join("|")+")",e=RegExp(r),u=RegExp(r,"g");return function(n){return n=null==n?"":""+n,e.test(n)?n.replace(u,t):n}};m.escape=R(B),m.unescape=R(T),m.result=function(n,t,r){var e=null==n?void 0:n[t];return e===void 0&&(e=r),m.isFunction(e)?e.call(n):e};var q=0;m.uniqueId=function(n){var t=++q+"";return n?n+t:t},m.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var K=/(.)^/,z={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},D=/\\|'|\r|\n|\u2028|\u2029/g,L=function(n){return"\\"+z[n]};m.template=function(n,t,r){!t&&r&&(t=r),t=m.defaults({},t,m.templateSettings);var e=RegExp([(t.escape||K).source,(t.interpolate||K).source,(t.evaluate||K).source].join("|")+"|$","g"),u=0,i="__p+='";n.replace(e,function(t,r,e,o,a){return i+=n.slice(u,a).replace(D,L),u=a+t.length,r?i+="'+\n((__t=("+r+"))==null?'':_.escape(__t))+\n'":e?i+="'+\n((__t=("+e+"))==null?'':__t)+\n'":o&&(i+="';\n"+o+"\n__p+='"),t}),i+="';\n",t.variable||(i="with(obj||{}){\n"+i+"}\n"),i="var __t,__p='',__j=Array.prototype.join,"+"print=function(){__p+=__j.call(arguments,'');};\n"+i+"return __p;\n";try{var o=new Function(t.variable||"obj","_",i)}catch(a){throw a.source=i,a}var c=function(n){return o.call(this,n,m)},f=t.variable||"obj";return c.source="function("+f+"){\n"+i+"}",c},m.chain=function(n){var t=m(n);return t._chain=!0,t};var P=function(n,t){return n._chain?m(t).chain():t};m.mixin=function(n){m.each(m.functions(n),function(t){var r=m[t]=n[t];m.prototype[t]=function(){var n=[this._wrapped];return f.apply(n,arguments),P(this,r.apply(m,n))}})},m.mixin(m),m.each(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var t=o[n];m.prototype[n]=function(){var r=this._wrapped;return t.apply(r,arguments),"shift"!==n&&"splice"!==n||0!==r.length||delete r[0],P(this,r)}}),m.each(["concat","join","slice"],function(n){var t=o[n];m.prototype[n]=function(){return P(this,t.apply(this._wrapped,arguments))}}),m.prototype.value=function(){return this._wrapped},m.prototype.valueOf=m.prototype.toJSON=m.prototype.value,m.prototype.toString=function(){return""+this._wrapped},"function"==typeof define&&define.amd&&define("underscore",[],function(){return m})}).call(this);
//# sourceMappingURL=underscore-min.map

/**
 *               ~ CLNDR v1.4.7 ~
 * ==============================================
 *       https://github.com/kylestetz/CLNDR
 * ==============================================
 *  Created by kyle stetz (github.com/kylestetz)
 *       & available under the MIT license
 * http://opensource.org/licenses/mit-license.php
 * ==============================================
 *
 * This is the fully-commented development version of CLNDR.
 * For the production version, check out clndr.min.js
 * at https://github.com/kylestetz/CLNDR
 *
 * This work is based on the
 * jQuery lightweight plugin boilerplate
 * Original author: @ajpiano
 * Further changes, comments: @addyosmani
 * Licensed under the MIT license
 */
(function (factory) {
    // Multiple loading methods are supported depending on
    // what is available globally. While moment is loaded
    // here, the instance can be passed in at config time.
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['jquery', 'moment'], factory);
    }
    else if (typeof exports === 'object') {
        // Node/CommonJS
        factory(require('jquery'), require('moment'));
    }
    else {
        // Browser globals
        factory(jQuery, moment);
    }
}(function ($, moment) {
    // Namespace
    var pluginName = 'clndr';

    // This is the default calendar template. This can be overridden.
    var clndrTemplate =
        "<div class='clndr-controls'>" +
            "<div class='clndr-control-button'>" +
                "<span class='clndr-previous-button'>previous</span>" +
            "</div>" +
            "<div class='month'><%= month %> <%= year %></div>" +
            "<div class='clndr-control-button rightalign'>" +
                "<span class='clndr-next-button'>next</span>" +
            "</div>" +
        "</div>" +
        "<table class='clndr-table' border='0' cellspacing='0' cellpadding='0'>" +
            "<thead>" +
                "<tr class='header-days'>" +
                "<% for(var i = 0; i < daysOfTheWeek.length; i++) { %>" +
                    "<td class='header-day'><%= daysOfTheWeek[i] %></td>" +
                "<% } %>" +
                "</tr>" +
            "</thead>" +
            "<tbody>" +
            "<% for(var i = 0; i < numberOfRows; i++){ %>" +
                "<tr>" +
                "<% for(var j = 0; j < 7; j++){ %>" +
                "<% var d = j + i * 7; %>" +
                    "<td class='<%= days[d].classes %>'>" +
                        "<div class='day-contents'><%= days[d].day %></div>" +
                    "</td>" +
                "<% } %>" +
                "</tr>" +
            "<% } %>" +
            "</tbody>" +
        "</table>";

    // Defaults used throughout the application, see docs.
    var defaults = {
        events: [],
        ready: null,
        extras: null,
        render: null,
        moment: null,
        weekOffset: 0,
        constraints: null,
        forceSixRows: null,
        selectedDate: null,
        doneRendering: null,
        daysOfTheWeek: null,
        multiDayEvents: null,
        startWithMonth: null,
        dateParameter: 'date',
        template: clndrTemplate,
        showAdjacentMonths: true,
        trackSelectedDate: false,
        adjacentDaysChangeMonth: false,
        ignoreInactiveDaysInSelection: null,
        lengthOfTime: {
            days: null,
            interval: 1,
            months: null
        },
        clickEvents: {
            click: null,
            today: null,
            nextYear: null,
            nextMonth: null,
            nextInterval: null,
            previousYear: null,
            onYearChange: null,
            previousMonth: null,
            onMonthChange: null,
            previousInterval: null,
            onIntervalChange: null
        },
        targets: {
            day: 'day',
            empty: 'empty',
            nextButton: 'clndr-next-button',
            todayButton: 'clndr-today-button',
            previousButton: 'clndr-previous-button',
            nextYearButton: 'clndr-next-year-button',
            previousYearButton: 'clndr-previous-year-button'
        },
        classes: {
            past: "past",
            today: "today",
            event: "event",
            inactive: "inactive",
            selected: "selected",
            lastMonth: "last-month",
            nextMonth: "next-month",
            adjacentMonth: "adjacent-month"
        },
    };

    /**
     * The actual plugin constructor.
     * Parses the events and lengthOfTime options to build a calendar of day
     * objects containing event information from the events array.
     */
    function Clndr(element, options) {
        var dayDiff;
        var constraintEnd;
        var constraintStart;

        this.element = element;

        // Merge the default options with user-provided options
        this.options = $.extend(true, {}, defaults, options);

        // Check if moment was passed in as a dependency
        if (this.options.moment) {
            moment = this.options.moment;
        }

        // Boolean values used to log if any contraints are met
        this.constraints = {
            next: true,
            today: true,
            previous: true,
            nextYear: true,
            previousYear: true
        };

        // If there are events, we should run them through our
        // addMomentObjectToEvents function which will add a date object that
        // we can use to make life easier. This is only necessarywhen events
        // are provided on instantiation, since our setEvents function uses
        // addMomentObjectToEvents.
        if (this.options.events.length) {
            if (this.options.multiDayEvents) {
                this.options.events =
                    this.addMultiDayMomentObjectsToEvents(this.options.events);
            } else {
                this.options.events =
                    this.addMomentObjectToEvents(this.options.events);
            }
        }

        // This used to be a place where we'd figure out the current month,
        // but since we want to open up support for arbitrary lengths of time
        // we're going to store the current range in addition to the current
        // month.
        if (this.options.lengthOfTime.months || this.options.lengthOfTime.days) {
            // We want to establish intervalStart and intervalEnd, which will
            // keep track of our boundaries. Let's look at the possibilities...
            if (this.options.lengthOfTime.months) {
                // Gonna go right ahead and annihilate any chance for bugs here
                this.options.lengthOfTime.days = null;

                // The length is specified in months. Is there a start date?
                if (this.options.lengthOfTime.startDate) {
                    this.intervalStart =
                        moment(this.options.lengthOfTime.startDate)
                            .startOf('month');
                } else if (this.options.startWithMonth) {
                    this.intervalStart =
                        moment(this.options.startWithMonth)
                            .startOf('month');
                } else {
                    this.intervalStart = moment().startOf('month');
                }

                // Subtract a day so that we are at the end of the interval. We
                // always want intervalEnd to be inclusive.
                this.intervalEnd = moment(this.intervalStart)
                    .add(this.options.lengthOfTime.months, 'months')
                    .subtract(1, 'days');
                this.month = this.intervalStart.clone();
            }
            else if (this.options.lengthOfTime.days) {
                // The length is specified in days. Start date?
                if (this.options.lengthOfTime.startDate) {
                    this.intervalStart =
                        moment(this.options.lengthOfTime.startDate)
                            .startOf('day');
                } else {
                    this.intervalStart = moment().weekday(0).startOf('day');
                }

                this.intervalEnd = moment(this.intervalStart)
                    .add(this.options.lengthOfTime.days - 1, 'days')
                    .endOf('day');
                this.month = this.intervalStart.clone();
            }
        // No length of time specified so we're going to default into using the
        // current month as the time period.
        } else {
            this.month = moment().startOf('month');
            this.intervalStart = moment(this.month);
            this.intervalEnd = moment(this.month).endOf('month');
        }

        if (this.options.startWithMonth) {
            this.month = moment(this.options.startWithMonth).startOf('month');
            this.intervalStart = moment(this.month);
            this.intervalEnd = (this.options.lengthOfTime.days)
                ? moment(this.month)
                    .add(this.options.lengthOfTime.days - 1, 'days')
                    .endOf('day')
                : moment(this.month).endOf('month');
        }

        // If we've got constraints set, make sure the interval is within them.
        if (this.options.constraints) {
            // First check if the startDate exists & is later than now.
            if (this.options.constraints.startDate) {
                constraintStart = moment(this.options.constraints.startDate);

                // We need to handle the constraints differently for weekly
                // calendars vs. monthly calendars.
                if (this.options.lengthOfTime.days) {
                    if (this.intervalStart.isBefore(constraintStart, 'week')) {
                        this.intervalStart = constraintStart.startOf('week');
                    }

                    // If the new interval period is less than the desired length
                    // of time, or before the starting interval, then correct it.
                    dayDiff = this.intervalStart.diff(this.intervalEnd, 'days');

                    if (dayDiff < this.options.lengthOfTime.days
                        || this.intervalEnd.isBefore(this.intervalStart))
                    {
                        this.intervalEnd = moment(this.intervalStart)
                            .add(this.options.lengthOfTime.days - 1, 'days')
                            .endOf('day');
                        this.month = this.intervalStart.clone();
                    }
                }
                else {
                    if (this.intervalStart.isBefore(constraintStart, 'month')) {
                        // Try to preserve the date by moving only the month.
                        this.intervalStart
                            .set('month', constraintStart.month())
                            .set('year', constraintStart.year());
                        this.month
                            .set('month', constraintStart.month())
                            .set('year', constraintStart.year());
                    }

                    // Check if the ending interval is earlier than now.
                    if (this.intervalEnd.isBefore(constraintStart, 'month')) {
                        this.intervalEnd
                            .set('month', constraintStart.month())
                            .set('year', constraintStart.year());
                    }
                }
            }

            // Make sure the intervalEnd is before the endDate.
            if (this.options.constraints.endDate) {
                constraintEnd = moment(this.options.constraints.endDate);

                // We need to handle the constraints differently for weekly
                // calendars vs. monthly calendars.
                if (this.options.lengthOfTime.days) {
                    // The starting interval is after our ending constraint.
                    if (this.intervalStart.isAfter(constraintEnd, 'week')) {
                        this.intervalStart = moment(constraintEnd)
                            .endOf('week')
                            .subtract(this.options.lengthOfTime.days - 1, 'days')
                            .startOf('day');
                        this.intervalEnd = moment(constraintEnd)
                            .endOf('week');
                        this.month = this.intervalStart.clone();
                    }
                }
                else {
                    if (this.intervalEnd.isAfter(constraintEnd, 'month')) {
                        this.intervalEnd
                            .set('month', constraintEnd.month())
                            .set('year', constraintEnd.year());
                        this.month
                            .set('month', constraintEnd.month())
                            .set('year', constraintEnd.year());
                    }

                    // Check if the starting interval is later than the ending.
                    if (this.intervalStart.isAfter(constraintEnd, 'month')) {
                        this.intervalStart
                            .set('month', constraintEnd.month())
                            .set('year', constraintEnd.year());
                    }
                }
            }
        }

        this._defaults = defaults;
        this._name = pluginName;

        // Some first-time initialization -> day of the week offset, template
        // compiling, making and storing some elements we'll need later, and
        // event handling for the controller.
        this.init();
    }

    /**
     * Calendar initialization.
     * Sets up the days of the week, the rendering function, binds all of the
     * events to the rendered calendar, and then stores the node locally.
     */
    Clndr.prototype.init = function () {
        // Create the days of the week using moment's current language setting
        this.daysOfTheWeek = this.options.daysOfTheWeek || [];

        if (!this.options.daysOfTheWeek) {
            this.daysOfTheWeek = [];

            for (var i = 0; i < 7; i++) {
                this.daysOfTheWeek.push(
                    moment().weekday(i).format('dd').charAt(0));
            }
        }

        // Shuffle the week if there's an offset
        if (this.options.weekOffset) {
            this.daysOfTheWeek = this.shiftWeekdayLabels(this.options.weekOffset);
        }

        // Quick and dirty test to make sure rendering is possible.
        if (!$.isFunction(this.options.render)) {
            this.options.render = null;

            if (typeof _ === 'undefined') {
                throw new Error(
                    "Underscore was not found. Please include underscore.js " +
                    "OR provide a custom render function.");
            } else {
                // We're just going ahead and using underscore here if no
                // render method has been supplied.
                this.compiledClndrTemplate = _.template(this.options.template);
            }
        }

        // Create the parent element that will hold the plugin and save it
        // for later
        $(this.element).html("<div class='clndr'></div>");
        this.calendarContainer = $('.clndr', this.element);

        // Attach event handlers for clicks on buttons/cells
        this.bindEvents();

        // Do a normal render of the calendar template
        this.render();

        // If a ready callback has been provided, call it.
        if (this.options.ready) {
            this.options.ready.apply(this, []);
        }
    };

    Clndr.prototype.shiftWeekdayLabels = function (offset) {
        var days = this.daysOfTheWeek;

        for (var i = 0; i < offset; i++) {
            days.push(days.shift());
        }

        return days;
    };

    /**
     * This is where the magic happens. Given a starting date and ending date,
     * an array of calendarDay objects is constructed that contains appropriate
     * events and classes depending on the circumstance.
     */
    Clndr.prototype.createDaysObject = function (startDate, endDate) {
        // This array will hold numbers for the entire grid (even the blank
        // spaces).
        var daysArray = [],
            date = startDate.clone(),
            lengthOfInterval = endDate.diff(startDate, 'days'),
            startOfLastMonth, endOfLastMonth, startOfNextMonth,
            endOfNextMonth, diff, dateIterator;

        // This is a helper object so that days can resolve their classes
        // correctly. Don't use it for anything please.
        this._currentIntervalStart = startDate.clone();

        // Filter the events list (if it exists) to events that are happening
        // last month, this month and next month (within the current grid view).
        this.eventsLastMonth = [];
        this.eventsNextMonth = [];
        this.eventsThisInterval = [];

        // Event parsing
        if (this.options.events.length) {
            // Here are the only two cases where we don't get an event in our
            // interval:
            //   startDate | endDate | e.start   | e.end
            //   e.start   | e.end   | startDate | endDate
            this.eventsThisInterval = $(this.options.events).filter(
                function () {
                    var afterEnd = this._clndrStartDateObject.isAfter(endDate),
                        beforeStart = this._clndrEndDateObject.isBefore(startDate);

                    if (beforeStart || afterEnd) {
                        return false;
                    } else {
                        return true;
                    }
                }).toArray();

            if (this.options.showAdjacentMonths) {
                startOfLastMonth = startDate.clone()
                    .subtract(1, 'months')
                    .startOf('month');
                endOfLastMonth = startOfLastMonth.clone().endOf('month');
                startOfNextMonth = endDate.clone()
                    .add(1, 'months')
                    .startOf('month');
                endOfNextMonth = startOfNextMonth.clone().endOf('month');

                this.eventsLastMonth = $(this.options.events).filter(
                    function () {
                        var beforeStart = this._clndrEndDateObject
                            .isBefore(startOfLastMonth);
                        var afterEnd = this._clndrStartDateObject
                            .isAfter(endOfLastMonth);

                        if (beforeStart || afterEnd) {
                            return false;
                        } else {
                            return true;
                        }
                    }).toArray();

                this.eventsNextMonth = $(this.options.events).filter(
                    function () {
                        var beforeStart = this._clndrEndDateObject
                            .isBefore(startOfNextMonth);
                        var afterEnd = this._clndrStartDateObject
                            .isAfter(endOfNextMonth);

                        if (beforeStart || afterEnd) {
                            return false;
                        } else {
                            return true;
                        }
                    }).toArray();
            }
        }

        // If diff is greater than 0, we'll have to fill in last days of the
        // previous month to account for the empty boxes in the grid. We also
        // need to take into account the weekOffset parameter. None of this
        // needs to happen if the interval is being specified in days rather
        // than months.
        if (!this.options.lengthOfTime.days) {
            diff = date.weekday() - this.options.weekOffset;

            if (diff < 0) {
                diff += 7;
            }

            if (this.options.showAdjacentMonths) {
                for (var i = 1; i <= diff; i++) {
                    var day = moment([
                        startDate.year(),
                        startDate.month(),
                        i
                    ]).subtract(diff, 'days');
                    daysArray.push(
                        this.createDayObject(
                            day,
                            this.eventsLastMonth
                        ));
                }
            } else {
                for (var i = 0; i < diff; i++) {
                    daysArray.push(
                        this.calendarDay({
                            classes: this.options.targets.empty +
                                " " + this.options.classes.lastMonth
                        }));
                }
            }
        }

        // Now we push all of the days in the interval
        dateIterator = startDate.clone();

        while (dateIterator.isBefore(endDate) || dateIterator.isSame(endDate, 'day')) {
            daysArray.push(
                this.createDayObject(
                    dateIterator.clone(),
                    this.eventsThisInterval
                ));
            dateIterator.add(1, 'days');
        }

        // ...and if there are any trailing blank boxes, fill those in with the
        // next month first days. Again, we can ignore this if the interval is
        // specified in days.
        if (!this.options.lengthOfTime.days) {
            while (daysArray.length % 7 !== 0) {
                if (this.options.showAdjacentMonths) {
                    daysArray.push(
                        this.createDayObject(
                            dateIterator.clone(),
                            this.eventsNextMonth
                        ));
                } else {
                    daysArray.push(
                        this.calendarDay({
                            classes: this.options.targets.empty + " " +
                                this.options.classes.nextMonth
                        }));
                }
                dateIterator.add(1, 'days');
            }
        }

        // If we want to force six rows of calendar, now's our Last Chance to
        // add another row. If the 42 seems explicit it's because we're
        // creating a 7-row grid and 6 rows of 7 is always 42!
        if (this.options.forceSixRows && daysArray.length !== 42) {
            while (daysArray.length < 42) {
                if (this.options.showAdjacentMonths) {
                    daysArray.push(
                        this.createDayObject(
                            dateIterator.clone(),
                            this.eventsNextMonth
                        ));
                    dateIterator.add(1, 'days');
                } else {
                    daysArray.push(
                        this.calendarDay({
                            classes: this.options.targets.empty + " " +
                                this.options.classes.nextMonth
                    }));
                }
            }
        }

        return daysArray;
    };

    Clndr.prototype.createDayObject = function (day, monthEvents) {
        var j = 0,
            self = this,
            now = moment(),
            eventsToday = [],
            extraClasses = "",
            properties = {
                isToday: false,
                isInactive: false,
                isAdjacentMonth: false
            },
            startMoment, endMoment, selectedMoment;

        // Validate moment date
        if (!day.isValid() && day.hasOwnProperty('_d') && day._d != undefined) {
            day = moment(day._d);
        }

        for (j; j < monthEvents.length; j++) {
            // Keep in mind that the events here already passed the month/year
            // test. Now all we have to compare is the moment.date(), which
            // returns the day of the month.
            var start = monthEvents[j]._clndrStartDateObject,
                end = monthEvents[j]._clndrEndDateObject;
            // If today is the same day as start or is after the start, and
            // if today is the same day as the end or before the end ...
            // woohoo semantics!
            if ( (day.isSame(start, 'day') || day.isAfter(start, 'day'))
                && (day.isSame(end, 'day') || day.isBefore(end, 'day')) )
            {
                eventsToday.push( monthEvents[j] );
            }
        }

        if (now.format("YYYY-MM-DD") == day.format("YYYY-MM-DD")) {
            extraClasses += (" " + this.options.classes.today);
            properties.isToday = true;
        }

        if (day.isBefore(now, 'day')) {
            extraClasses += (" " + this.options.classes.past);
        }

        if (eventsToday.length) {
            extraClasses += (" " + this.options.classes.event);
        }

        if (!this.options.lengthOfTime.days) {
            if (this._currentIntervalStart.month() > day.month()) {
                extraClasses += (" " + this.options.classes.adjacentMonth);
                properties.isAdjacentMonth = true;

                this._currentIntervalStart.year() === day.year()
                    ? extraClasses += (" " + this.options.classes.lastMonth)
                    : extraClasses += (" " + this.options.classes.nextMonth);
            }
            else if (this._currentIntervalStart.month() < day.month()) {
                extraClasses += (" " + this.options.classes.adjacentMonth);
                properties.isAdjacentMonth = true;

                this._currentIntervalStart.year() === day.year()
                    ? extraClasses += (" " + this.options.classes.nextMonth)
                    : extraClasses += (" " + this.options.classes.lastMonth);
            }
        }

        // If there are constraints, we need to add the inactive class to the
        // days outside of them
        if (this.options.constraints) {
            endMoment = moment(this.options.constraints.endDate);
            startMoment = moment(this.options.constraints.startDate);

            if (this.options.constraints.startDate && day.isBefore(startMoment)) {
                extraClasses += (" " + this.options.classes.inactive);
                properties.isInactive = true;
            }

            if (this.options.constraints.endDate && day.isAfter(endMoment)) {
                extraClasses += (" " + this.options.classes.inactive);
                properties.isInactive = true;
            }
        }

        // Validate moment date
        if (!day.isValid() && day.hasOwnProperty('_d') && day._d != undefined) {
            day = moment(day._d);
        }

        // Check whether the day is "selected"
        selectedMoment = moment(this.options.selectedDate);

        if (this.options.selectedDate && day.isSame(selectedMoment, 'day')) {
            extraClasses += (" " + this.options.classes.selected);
        }

        // We're moving away from using IDs in favor of classes, since when
        // using multiple calendars on a page we are technically violating the
        // uniqueness of IDs.
        extraClasses += " calendar-day-" + day.format("YYYY-MM-DD");
        // Day of week
        extraClasses += " calendar-dow-" + day.weekday();

        return this.calendarDay({
            date: day,
            day: day.date(),
            events: eventsToday,
            properties: properties,
            classes: this.options.targets.day + extraClasses
        });
    };

    Clndr.prototype.render = function () {
        // Get rid of the previous set of calendar parts. This should handle garbage
        // collection according to jQuery's docs:
        //   http://api.jquery.com/empty/
        //   To avoid memory leaks, jQuery removes other constructs such as
        //   data and event handlers from the child elements before removing
        //   the elements themselves.
        var data = {},
            end = null,
            start = null,
            oneYearFromEnd = this.intervalEnd.clone().add(1, 'years'),
            oneYearAgo = this.intervalStart.clone().subtract(1, 'years'),
            days, months, currentMonth, eventsThisInterval,
            numberOfRows;
        this.calendarContainer.empty();

        if (this.options.lengthOfTime.days) {
            days = this.createDaysObject(
                this.intervalStart.clone(),
                this.intervalEnd.clone());
            data = {
                days: days,
                months: [],
                year: null,
                month: null,
                eventsLastMonth: [],
                eventsNextMonth: [],
                eventsThisMonth: [],
                extras: this.options.extras,
                daysOfTheWeek: this.daysOfTheWeek,
                intervalEnd: this.intervalEnd.clone(),
                numberOfRows: Math.ceil(days.length / 7),
                intervalStart: this.intervalStart.clone(),
                eventsThisInterval: this.eventsThisInterval
            };
        }
        else if (this.options.lengthOfTime.months) {
            months = [];
            numberOfRows = 0;
            eventsThisInterval = [];

            for (i = 0; i < this.options.lengthOfTime.months; i++) {
                var currentIntervalStart = this.intervalStart
                    .clone()
                    .add(i, 'months');
                var currentIntervalEnd = currentIntervalStart
                    .clone()
                    .endOf('month');
                var days = this.createDaysObject(
                    currentIntervalStart,
                    currentIntervalEnd);
                // Save events processed for each month into a master array of
                // events for this interval
                eventsThisInterval.push(this.eventsThisInterval);
                months.push({
                    days: days,
                    month: currentIntervalStart
                });
            }

            // Get the total number of rows across all months
            for (i in months) {
                numberOfRows += Math.ceil(months[i].days.length / 7);
            }

            data = {
                days: [],
                year: null,
                month: null,
                months: months,
                eventsThisMonth: [],
                numberOfRows: numberOfRows,
                extras: this.options.extras,
                intervalEnd: this.intervalEnd,
                intervalStart: this.intervalStart,
                daysOfTheWeek: this.daysOfTheWeek,
                eventsLastMonth: this.eventsLastMonth,
                eventsNextMonth: this.eventsNextMonth,
                eventsThisInterval: eventsThisInterval,
            };
        }
        else {
            // Get an array of days and blank spaces
            days = this.createDaysObject(
                this.month.clone().startOf('month'),
                this.month.clone().endOf('month'));
            // This is to prevent a scope/naming issue between this.month and
            // data.month
            currentMonth = this.month;

            data = {
                days: days,
                months: [],
                intervalEnd: null,
                intervalStart: null,
                year: this.month.year(),
                eventsThisInterval: null,
                extras: this.options.extras,
                month: this.month.format('MMMM'),
                daysOfTheWeek: this.daysOfTheWeek,
                eventsLastMonth: this.eventsLastMonth,
                eventsNextMonth: this.eventsNextMonth,
                numberOfRows: Math.ceil(days.length / 7),
                eventsThisMonth: this.eventsThisInterval
            };
        }

        // Render the calendar with the data above & bind events to its
        // elements
        if ( !this.options.render) {
            this.calendarContainer.html(
                this.compiledClndrTemplate(data));
        } else {
            this.calendarContainer.html(
                this.options.render.apply(this, [data]));
        }

        // If there are constraints, we need to add the 'inactive' class to
        // the controls.
        if (this.options.constraints) {
            // In the interest of clarity we're just going to remove all
            // inactive classes and re-apply them each render.
            for (var target in this.options.targets) {
                if (target != this.options.targets.day) {
                    this.element.find('.' + this.options.targets[target])
                        .toggleClass(
                            this.options.classes.inactive,
                            false);
                }
            }

            // Just like the classes we'll set this internal state to true and
            // handle the disabling below.
            for (var i in this.constraints) {
                this.constraints[i] = true;
            }

            if (this.options.constraints.startDate) {
                start = moment(this.options.constraints.startDate);
            }

            if (this.options.constraints.endDate) {
                end = moment(this.options.constraints.endDate);
            }

            // Deal with the month controls first. Do we have room to go back?
            if (start
                && (start.isAfter(this.intervalStart)
                    || start.isSame(this.intervalStart, 'day')))
            {
                this.element.find('.' + this.options.targets.previousButton)
                    .toggleClass(this.options.classes.inactive, true);
                this.constraints.previous = !this.constraints.previous;
            }

            // Do we have room to go forward?
            if (end
                && (end.isBefore(this.intervalEnd)
                    || end.isSame(this.intervalEnd, 'day')))
            {
                this.element.find('.' + this.options.targets.nextButton)
                    .toggleClass(this.options.classes.inactive, true);
                this.constraints.next = !this.constraints.next;
            }

            // What's last year looking like?
            if (start && start.isAfter(oneYearAgo)) {
                this.element.find('.' + this.options.targets.previousYearButton)
                    .toggleClass(this.options.classes.inactive, true);
                this.constraints.previousYear = !this.constraints.previousYear;
            }

            // How about next year?
            if (end && end.isBefore(oneYearFromEnd)) {
                this.element.find('.' + this.options.targets.nextYearButton)
                    .toggleClass(this.options.classes.inactive, true);
                this.constraints.nextYear = !this.constraints.nextYear;
            }

            // Today? We could put this in init(), but we want to support the
            // user changing the constraints on a living instance.
            if ( (start && start.isAfter( moment(), 'month' ))
                || (end && end.isBefore( moment(), 'month' )) )
            {
                this.element.find('.' + this.options.targets.today)
                    .toggleClass(this.options.classes.inactive, true);
                this.constraints.today = !this.constraints.today;
            }
        }

        if (this.options.doneRendering) {
            this.options.doneRendering.apply(this, []);
        }
    };

    Clndr.prototype.bindEvents = function () {
        var data = {},
            self = this,
            $container = $(this.element),
            targets = this.options.targets,
            classes = self.options.classes,
            eventType = (this.options.useTouchEvents === true)
                ? 'touchstart'
                : 'click',
            eventName = eventType + '.clndr';

        // Make sure we don't already have events
        $container
            .off(eventName, '.' + targets.day)
            .off(eventName, '.' + targets.empty)
            .off(eventName, '.' + targets.nextButton)
            .off(eventName, '.' + targets.todayButton)
            .off(eventName, '.' + targets.previousButton)
            .off(eventName, '.' + targets.nextYearButton)
            .off(eventName, '.' + targets.previousYearButton);

        // Target the day elements and give them click events
        $container.on(eventName, '.' + targets.day, function (event) {
            var target,
                $currentTarget = $(event.currentTarget);

            if (self.options.clickEvents.click) {
                target = self.buildTargetObject(event.currentTarget, true);
                self.options.clickEvents.click.apply(self, [target]);
            }

            // If adjacentDaysChangeMonth is on, we need to change the
            // month here.
            if (self.options.adjacentDaysChangeMonth) {
                if ($currentTarget.is('.' + classes.lastMonth)) {
                    self.backActionWithContext(self);
                }
                else if ($currentTarget.is('.' + classes.nextMonth)) {
                    self.forwardActionWithContext(self);
                }
            }

            // if trackSelectedDate is on, we need to handle click on a new day
            if (self.options.trackSelectedDate) {
                if (self.options.ignoreInactiveDaysInSelection
                    && $currentTarget.hasClass(classes.inactive))
                {
                    return;
                }

                // Remember new selected date
                self.options.selectedDate =
                    self.getTargetDateString(event.currentTarget);
                // Handle "selected" class. This handles more complex templates
                // that may have the selected elements nested.
                $container.find('.' + classes.selected)
                    .removeClass(classes.selected);
                $currentTarget.addClass(classes.selected);
            }
        });

        // Target the empty calendar boxes as well
        $container.on(eventName, '.' + targets.empty, function (event) {
            var target,
                $eventTarget = $(event.currentTarget);

            if (self.options.clickEvents.click) {
                target = self.buildTargetObject(event.currentTarget, false);
                self.options.clickEvents.click.apply(self, [target]);
            }

            if (self.options.adjacentDaysChangeMonth) {
                if ($eventTarget.is('.' + classes.lastMonth)) {
                    self.backActionWithContext(self);
                }
                else if ($eventTarget.is('.' + classes.nextMonth)) {
                    self.forwardActionWithContext(self);
                }
            }
        });

        // Bind the previous, next and today buttons. We pass the current
        // context along with the event so that it can update this instance.
        data = {
            context: this
        };

        $container
            .on(eventName, '.' + targets.todayButton, data, this.todayAction)
            .on(eventName, '.' + targets.nextButton, data, this.forwardAction)
            .on(eventName, '.' + targets.previousButton, data, this.backAction)
            .on(eventName, '.' + targets.nextYearButton, data, this.nextYearAction)
            .on(eventName, '.' + targets.previousYearButton, data, this.previousYearAction);
    };

    /**
     * If the user provided a click callback we'd like to give them something
     * nice to work with. buildTargetObject takes the DOM element that was
     * clicked and returns an object with the DOM element, events, and the date
     * (if the latter two exist). Currently it is based on the id, however it'd
     * be nice to use a data- attribute in the future.
     */
    Clndr.prototype.buildTargetObject = function (currentTarget, targetWasDay) {
        // This is our default target object, assuming we hit an empty day
        // with no events.
        var target = {
            date: null,
            events: [],
            element: currentTarget
        };
        var dateString, filterFn;

        // Did we click on a day or just an empty box?
        if (targetWasDay) {
            dateString = this.getTargetDateString(currentTarget);
            target.date = (dateString)
                ? moment(dateString)
                : null;

            // Do we have events?
            if (this.options.events) {
                // Are any of the events happening today?
                if (this.options.multiDayEvents) {
                    filterFn = function () {
                        var isSameStart = target.date.isSame(
                            this._clndrStartDateObject,
                            'day');
                        var isAfterStart = target.date.isAfter(
                            this._clndrStartDateObject,
                            'day');
                        var isSameEnd = target.date.isSame(
                            this._clndrEndDateObject,
                            'day');
                        var isBeforeEnd = target.date.isBefore(
                            this._clndrEndDateObject,
                            'day');
                        return (isSameStart || isAfterStart)
                            && (isSameEnd || isBeforeEnd);
                    };
                }
                else {
                    filterFn = function () {
                        var startString = this._clndrStartDateObject
                            .format('YYYY-MM-DD');
                        return startString == dateString;
                    };
                }

                // Filter the dates down to the ones that match.
                target.events = $.makeArray(
                    $(this.options.events).filter(filterFn));
            }
        }

        return target;
    };

    /**
     * Get moment date object of the date associated with the given target.
     * This method is meant to be called on ".day" elements.
     */
    Clndr.prototype.getTargetDateString = function (target) {
        // Our identifier is in the list of classNames. Find it!
        var classNameIndex = target.className.indexOf('calendar-day-');

        if (classNameIndex !== -1) {
            // Our unique identifier is always 23 characters long.
            // If this feels a little wonky, that's probably because it is.
            // Open to suggestions on how to improve this guy.
            return target.className.substring(
                classNameIndex + 13,
                classNameIndex + 23);
        }

        return null;
    };

    /**
     * Triggers any applicable events given a change in the calendar's start
     * and end dates. ctx contains the current (changed) start and end date,
     * orig contains the original start and end dates.
     */
    Clndr.prototype.triggerEvents = function (ctx, orig) {
        var timeOpt = ctx.options.lengthOfTime,
            eventsOpt = ctx.options.clickEvents,
            newInt = {
                end: ctx.intervalEnd,
                start: ctx.intervalStart
            },
            intervalArg = [
                moment(ctx.intervalStart),
                moment(ctx.intervalEnd)
            ],
            monthArg = [moment(ctx.month)],
            nextYear, prevYear, yearChanged,
            nextMonth, prevMonth, monthChanged,
            nextInterval, prevInterval, intervalChanged;

        // We want to determine if any of the change conditions have been
        // hit and then trigger our events based off that.
        nextMonth = newInt.start.isAfter( orig.start )
            && (Math.abs(newInt.start.month() - orig.start.month()) == 1
                || orig.start.month() === 11 && newInt.start.month() === 0);
        prevMonth = newInt.start.isBefore( orig.start )
            && (Math.abs(orig.start.month() - newInt.start.month()) == 1
                || orig.start.month() === 0 && newInt.start.month() === 11);
        monthChanged = newInt.start.month() !== orig.start.month()
            || newInt.start.year() !== orig.start.year();
        nextYear = newInt.start.year() - orig.start.year() === 1
            || newInt.end.year() - orig.end.year() === 1;
        prevYear = orig.start.year() - newInt.start.year() === 1
            || orig.end.year() - newInt.end.year() === 1;
        yearChanged = newInt.start.year() !== orig.start.year();

        // Only configs with a time period will get the interval change event
        if (timeOpt.days || timeOpt.months) {
            nextInterval = newInt.start.isAfter(orig.start);
            prevInterval = newInt.start.isBefore(orig.start);
            intervalChanged = nextInterval || prevInterval;

            if (nextInterval && eventsOpt.nextInterval) {
                eventsOpt.nextInterval.apply(ctx, intervalArg);
            }

            if (prevInterval && eventsOpt.previousInterval) {
                eventsOpt.previousInterval.apply(ctx, intervalArg);
            }

            if (intervalChanged && eventsOpt.onIntervalChange) {
                eventsOpt.onIntervalChange.apply(ctx, intervalArg);
            }
        }
        // @V2-todo see https://github.com/kylestetz/CLNDR/issues/225
        else {
            if (nextMonth && eventsOpt.nextMonth) {
                eventsOpt.nextMonth.apply(ctx, monthArg);
            }

            if (prevMonth && eventsOpt.previousMonth) {
                eventsOpt.previousMonth.apply(ctx, monthArg);
            }

            if (monthChanged && eventsOpt.onMonthChange) {
                eventsOpt.onMonthChange.apply(ctx, monthArg);
            }

            if (nextYear && eventsOpt.nextYear) {
                eventsOpt.nextYear.apply(ctx, monthArg);
            }

            if (prevYear && eventsOpt.previousYear) {
                eventsOpt.previousYear.apply(ctx, monthArg);
            }

            if (yearChanged && eventsOpt.onYearChange) {
                eventsOpt.onYearChange.apply(ctx, monthArg);
            }
        }
    };

    /**
     * Main action to go backward one period. Other methods call these, like
     * backAction which proxies jQuery events, and backActionWithContext which
     * is an internal method that this library uses.
     */
    Clndr.prototype.back = function (options /*, ctx */) {
        var yearChanged = null,
            ctx = (arguments.length > 1)
                ? arguments[ 1 ]
                : this,
            timeOpt = ctx.options.lengthOfTime,
            defaults = {
                withCallbacks: false
            },
            orig = {
                end: ctx.intervalEnd.clone(),
                start: ctx.intervalStart.clone()
            };

        // Extend any options
        options = $.extend(true, {}, defaults, options);

        // Before we do anything, check if any constraints are limiting this
        if (!ctx.constraints.previous) {
            return ctx;
        }

        if (!timeOpt.days) {
            // Shift the interval by a month (or several months)
            ctx.intervalStart
                .subtract(timeOpt.interval, 'months')
                .startOf('month');
            ctx.intervalEnd = ctx.intervalStart.clone()
                .add(timeOpt.months || timeOpt.interval, 'months')
                .subtract(1, 'days')
                .endOf('month');
            ctx.month = ctx.intervalStart.clone();
        }
        else {
            // Shift the interval in days
            ctx.intervalStart
                .subtract(timeOpt.interval, 'days')
                .startOf('day');
            ctx.intervalEnd = ctx.intervalStart.clone()
                .add(timeOpt.days - 1, 'days')
                .endOf('day');
            // @V2-todo Useless, but consistent with API
            ctx.month = ctx.intervalStart.clone();
        }

        ctx.render();

        if (options.withCallbacks) {
            ctx.triggerEvents(ctx, orig);
        }

        return ctx;
    };

    Clndr.prototype.backAction = function (event) {
        var ctx = event.data.context;
        ctx.backActionWithContext(ctx);
    };

    Clndr.prototype.backActionWithContext = function (ctx) {
        ctx.back({
            withCallbacks: true
        }, ctx);
    };

    Clndr.prototype.previous = function (options) {
        // Alias
        return this.back(options);
    };

    /**
     * Main action to go forward one period. Other methods call these, like
     * forwardAction which proxies jQuery events, and backActionWithContext
     * which is an internal method that this library uses.
     */
    Clndr.prototype.forward = function (options /*, ctx */) {
        var ctx = (arguments.length > 1)
                ? arguments[1]
                : this,
            timeOpt = ctx.options.lengthOfTime,
            defaults = {
                withCallbacks: false
            },
            orig = {
                end: ctx.intervalEnd.clone(),
                start: ctx.intervalStart.clone()
            };

        // Extend any options
        options = $.extend(true, {}, defaults, options);

        // Before we do anything, check if any constraints are limiting this
        if (!ctx.constraints.next) {
            return ctx;
        }

        if (ctx.options.lengthOfTime.days) {
            // Shift the interval in days
            ctx.intervalStart
                .add(timeOpt.interval, 'days')
                .startOf('day');
            ctx.intervalEnd = ctx.intervalStart.clone()
                .add(timeOpt.days - 1, 'days')
                .endOf('day');
            // @V2-todo Useless, but consistent with API
            ctx.month = ctx.intervalStart.clone();
        }
        else {
            // Shift the interval by a month (or several months)
            ctx.intervalStart
                .add(timeOpt.interval, 'months')
                .startOf('month');
            ctx.intervalEnd = ctx.intervalStart.clone()
                .add(timeOpt.months || timeOpt.interval, 'months')
                .subtract(1, 'days')
                .endOf('month');
            ctx.month = ctx.intervalStart.clone();
        }

        ctx.render();

        if (options.withCallbacks) {
            ctx.triggerEvents(ctx, orig);
        }

        return ctx;
    };

    Clndr.prototype.forwardAction = function (event) {
        var ctx = event.data.context;
        ctx.forwardActionWithContext(ctx);
    };

    Clndr.prototype.forwardActionWithContext = function (ctx) {
        ctx.forward({
            withCallbacks: true
        }, ctx);
    };

    Clndr.prototype.next = function (options) {
        // Alias
        return this.forward(options);
    };

    /**
     * Main action to go back one year.
     */
    Clndr.prototype.previousYear = function (options /*, ctx */) {
        var ctx = (arguments.length > 1)
                ? arguments[1]
                : this,
            defaults = {
                withCallbacks: false
            },
            orig = {
                end: ctx.intervalEnd.clone(),
                start: ctx.intervalStart.clone()
            };

        // Extend any options
        options = $.extend(true, {}, defaults, options);

        // Before we do anything, check if any constraints are limiting this
        if (!ctx.constraints.previousYear) {
            return ctx;
        }

        ctx.month.subtract(1, 'year');
        ctx.intervalStart.subtract(1, 'year');
        ctx.intervalEnd.subtract(1, 'year');
        ctx.render();

        if (options.withCallbacks) {
            ctx.triggerEvents(ctx, orig);
        }

        return ctx;
    };

    Clndr.prototype.previousYearAction = function (event) {
        var ctx = event.data.context;
        ctx.previousYear({
            withCallbacks: true
        }, ctx);
    };

    /**
     * Main action to go forward one year.
     */
    Clndr.prototype.nextYear = function (options /*, ctx */) {
        var ctx = (arguments.length > 1)
                ? arguments[1]
                : this,
            defaults = {
                withCallbacks: false
            },
            orig = {
                end: ctx.intervalEnd.clone(),
                start: ctx.intervalStart.clone()
            };

        // Extend any options
        options = $.extend(true, {}, defaults, options);

        // Before we do anything, check if any constraints are limiting this
        if (!ctx.constraints.nextYear) {
            return ctx;
        }

        ctx.month.add(1, 'year');
        ctx.intervalStart.add(1, 'year');
        ctx.intervalEnd.add(1, 'year');
        ctx.render();

        if (options.withCallbacks) {
            ctx.triggerEvents(ctx, orig);
        }

        return ctx;
    };

    Clndr.prototype.nextYearAction = function (event) {
        var ctx = event.data.context;
        ctx.nextYear({
            withCallbacks: true
        }, ctx);
    };

    Clndr.prototype.today = function (options /*, ctx */) {
        var ctx = (arguments.length > 1)
                ? arguments[1]
                : this,
            timeOpt = ctx.options.lengthOfTime,
            defaults = {
                withCallbacks: false
            },
            orig = {
                end: ctx.intervalEnd.clone(),
                start: ctx.intervalStart.clone()
            };

        // Extend any options
        options = $.extend(true, {}, defaults, options);
        // @V2-todo Only used for legacy month view
        ctx.month = moment().startOf('month');

        if (timeOpt.days) {
            // If there was a startDate specified, we should figure out what
            // the weekday is and use that as the starting point of our
            // interval. If not, go to today.weekday(0).
            if (timeOpt.startDate) {
                ctx.intervalStart = moment()
                    .weekday(timeOpt.startDate.weekday())
                    .startOf('day');
            } else {
                ctx.intervalStart = moment().weekday(0).startOf('day');
            }

            ctx.intervalEnd = ctx.intervalStart.clone()
                .add(timeOpt.days - 1, 'days')
                .endOf('day');
        }
        else {
            // Set the intervalStart to this month.
            ctx.intervalStart = moment().startOf('month');
            ctx.intervalEnd = ctx.intervalStart.clone()
                .add(timeOpt.months || timeOpt.interval, 'months')
                .subtract(1, 'days')
                .endOf('month');
        }

        // No need to re-render if we didn't change months.
        if (!ctx.intervalStart.isSame(orig.start)
            || !ctx.intervalEnd.isSame(orig.end))
        {
            ctx.render();
        }

        // Fire the today event handler regardless of any change
        if (options.withCallbacks) {
            if (ctx.options.clickEvents.today) {
                ctx.options.clickEvents.today.apply(ctx, [moment(ctx.month)]);
            }

            ctx.triggerEvents(ctx, orig);
        }
    };

    Clndr.prototype.todayAction = function (event) {
        var ctx = event.data.context;
        ctx.today({
            withCallbacks: true
        }, ctx);
    };

    /**
     * Changes the month. Accepts 0-11 or a full/partial month name e.g. "Jan",
     * "February", "Mar", etc.
     */
    Clndr.prototype.setMonth = function (newMonth, options) {
        var timeOpt = this.options.lengthOfTime,
            orig = {
                end: this.intervalEnd.clone(),
                start: this.intervalStart.clone()
            };

        if (timeOpt.days || timeOpt.months) {
            console.log(
                'You are using a custom date interval. Use ' +
                'Clndr.setIntervalStart(startDate) instead.');
            return this;
        }

        this.month.month(newMonth);
        this.intervalStart = this.month.clone().startOf('month');
        this.intervalEnd = this.intervalStart.clone().endOf('month');
        this.render();

        if (options && options.withCallbacks) {
            this.triggerEvents(this, orig);
        }

        return this;
    };

    Clndr.prototype.setYear = function (newYear, options) {
        var orig = {
            end: this.intervalEnd.clone(),
            start: this.intervalStart.clone()
        };

        this.month.year(newYear);
        this.intervalEnd.year(newYear);
        this.intervalStart.year(newYear);
        this.render();

        if (options && options.withCallbacks) {
            this.triggerEvents(this, orig);
        }

        return this;
    };

    /**
     * Sets the start of the time period according to newDate. newDate can be
     * a string or a moment object.
     */
    Clndr.prototype.setIntervalStart = function (newDate, options) {
        var timeOpt = this.options.lengthOfTime,
            orig = {
                end: this.intervalEnd.clone(),
                start: this.intervalStart.clone()
            };

        if (!timeOpt.days && !timeOpt.months) {
            console.log(
                'You are using a custom date interval. Use ' +
                'Clndr.setIntervalStart(startDate) instead.');
            return this;
        }

        if (timeOpt.days) {
            this.intervalStart = moment(newDate).startOf('day');
            this.intervalEnd = this.intervalStart.clone()
                .add(timeOpt - 1, 'days')
                .endOf('day');
        } else {
            this.intervalStart = moment(newDate).startOf('month');
            this.intervalEnd = this.intervalStart.clone()
                .add(timeOpt.months || timeOpt.interval, 'months')
                .subtract(1, 'days')
                .endOf('month');
        }

        this.month = this.intervalStart.clone();
        this.render();

        if (options && options.withCallbacks) {
            this.triggerEvents(this, orig);
        }

        return this;
    };

    /**
     * Overwrites events in the calendar and triggers a render.
     */
    Clndr.prototype.setEvents = function (events) {
        // Go through each event and add a moment object
        if (this.options.multiDayEvents) {
            this.options.events = this.addMultiDayMomentObjectsToEvents(events);
        } else {
            this.options.events = this.addMomentObjectToEvents(events);
        }

        this.render();
        return this;
    };

    /**
     * Adds additional events to the calendar and triggers a render.
     */
    Clndr.prototype.addEvents = function (events /*, reRender*/) {
        var reRender = (arguments.length > 1)
            ? arguments[1]
            : true;

        // Go through each event and add a moment object
        if (this.options.multiDayEvents) {
            this.options.events = $.merge(
                this.options.events,
                this.addMultiDayMomentObjectsToEvents(events));
        } else {
            this.options.events = $.merge(
                this.options.events,
                this.addMomentObjectToEvents(events));
        }

        if (reRender) {
            this.render();
        }

        return this;
    };

    /**
     * Passes all events through a matching function. Any that pass a truth
     * test will be removed from the calendar's events. This triggers a render.
     */
    Clndr.prototype.removeEvents = function (matchingFn) {
        for (var i = this.options.events.length - 1; i >= 0; i--) {
            if (matchingFn(this.options.events[i]) == true) {
                this.options.events.splice(i, 1);
            }
        }

        this.render();
        return this;
    };

    Clndr.prototype.addMomentObjectToEvents = function (events) {
        var i = 0,
            self = this;

        for (i; i < events.length; i++) {
            // Add the date as both start and end, since it's a single-day
            // event by default
            events[i]._clndrStartDateObject =
                moment(events[i][self.options.dateParameter]);
            events[i]._clndrEndDateObject =
                moment(events[i][self.options.dateParameter]);
        }

        return events;
    };

    Clndr.prototype.addMultiDayMomentObjectsToEvents = function (events) {
        var i = 0,
            self = this,
            multiEvents = self.options.multiDayEvents;

        for (i; i < events.length; i++) {
            var end = events[i][multiEvents.endDate],
                start = events[i][multiEvents.startDate];
            // If we don't find the startDate OR endDate fields, look for
            // singleDay
            if (!end && !start) {
                events[i]._clndrEndDateObject =
                    moment(events[i][multiEvents.singleDay]);
                events[i]._clndrStartDateObject =
                    moment(events[i][multiEvents.singleDay]);
            }
            // Otherwise use startDate and endDate, or whichever one is present
            else {
                events[i]._clndrEndDateObject = moment(end || start);
                events[i]._clndrStartDateObject = moment(start || end);
            }
        }

        return events;
    };

    Clndr.prototype.calendarDay = function (options) {
        var defaults = {
            day: "",
            date: null,
            events: [],
            classes: this.options.targets.empty
        };

        return $.extend({}, defaults, options);
    };

    Clndr.prototype.destroy = function () {
        var $container = $(this.calendarContainer);
        $container.parent().data('plugin_clndr', null);
        this.options = defaults;
        $container.empty().remove();
        this.element = null;
    };

    $.fn.clndr = function (options) {
        var clndrInstance;

        if (this.length > 1) {
            throw new Error(
                "CLNDR does not support multiple elements yet. Make sure " +
                "your clndr selector returns only one element.");
        }

        if (!this.length) {
            throw new Error(
                "CLNDR cannot be instantiated on an empty selector.");
        }

        if (!this.data('plugin_clndr')) {
            clndrInstance = new Clndr(this, options);
            this.data('plugin_clndr', clndrInstance);
            return clndrInstance;
        }

        return this.data('plugin_clndr');
    };
}));
