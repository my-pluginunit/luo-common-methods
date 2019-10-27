"use strict";
!function (e, f) {
  typeof exports === "object" && typeof module === "object" ? module.exports = f() : typeof define === "function" && define.amd ? define([], f) : typeof exports === "object" ? exports.luoCommonMethods = f() : e.luoCommonMethods = f();
}(this, function () {
  var dataURLtoFile = function (dataurl, filename) { 
    var fileData;
    var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
    while(n--){
        u8arr[n] = bstr.charCodeAt(n);
    }
    try {fileData = new File([u8arr], filename, {type: mime});} catch (e) {
      var blob = dataURLtoBlob(dataurl);
      fileData = blobToFile(blob, filename);
    }
    return fileData;
  };

  var dataURLtoBlob = function (dataurl) {
    var arr = dataurl.split(','),
        mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]),
        n = bstr.length,
        u8arr = new Uint8Array(n);
    while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], { type: mime });
  };

  var blobToFile = function (theBlob, fileName){
    theBlob.lastModifiedDate = new Date();
    theBlob.name = fileName;
    return theBlob;
  };

  var genUuid = function genUuid (len, radix) {
    var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
    var uuid = [],
    i;
    radix = radix || chars.length;
    if (len) {
        for (i = 0; i < len; i++) {
            uuid[i] = chars[0 | Math.random() * radix]
        }
    } else {
        var r;
        uuid[8] = uuid[13] = uuid[18] = uuid[23] = "-";
        uuid[14] = "4";
        for (i = 0; i < 36; i++) {
            if (!uuid[i]) {
                r = 0 | Math.random() * 16;
                uuid[i] = chars[(i == 19) ? (r & 3) | 8 : r]
            }
        }
    }
    return "luo-" + uuid.join("")
  };

  var getEnvScien = function () {
    var o = {ie: 0, ieStr: '0', firefox: 0, firefoxStr: '0', opera: 0, operaStr: '0', chrome: 0, chromeStr: '0', safari: 0, safariStr: '0'};
    var a = navigator.userAgent.toLowerCase();

    o.isMobile = function () {
      return !!window.navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i);
    };

    o.isIpad = function () {
      return (/ipad/i).test(a);
    };

    o.isAndroidOrIos = function () {
      var os = "android";
      var u = navigator.userAgent;
      if (u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) {
        os = "ios";
      } else if (u.indexOf("Android") > -1) { 
        os = "android";
      }
      return os;
    };

    o.isSystem = function () {
      var p = navigator.platform;
      os = p.indexOf("Win") === 0 ? 'window' :
           p.indexOf("Mac") === 0 ? 'mac' :
           p.indexOf("Linux") === 0 ? 'linux' : 
           p.indexOf("iPhone") === 0 ? 'iphone' :
           p.indexOf("android") === 0 ? 'android' : '';
      return os;
    };

    o.isWeixin = function () {
      var is = a.match(/MicroMessenger/i);
      return is && is.length && is[0] === 'micromessenger' ? true : false;
    };

    o.isAlipay = function () {
      var is = a.match(/alipayclient/i);
      return is && is.length && is[0] === "alipayclient" ? true : false;
    };

    o.isApp = function (appIdent) {
      if (!appIdent || typeof appIdent !== 'string') throw new Error('[isApp]参数不对！');
      var rega = new RegExp(appIdent.toLowerCase(), "i");
      return a.match(rega) === appIdent.toLowerCase();
    };
    
    try {
      o.ie = a.match(/((rv:([\d.]+)\) like gecko?)|msie ([\d.]+))/);
      if (o.ie && o.ie.length) {
        var str = o.ie[0].replace(/(rv:|\) like gecko|msie )/g, '');
        o.ieStr = str;
        o.ie = Number(str.replace(/\..*/g, ''));
        return o;
      } else {o.ie = 0;}

      o.firefox = a.match(/firefox\/([\d.]+)/);
      if (o.firefox && o.firefox.length) {
        var str = o.firefox[0].replace(/firefox\//, '');
        o.firefoxStr = str;
        o.firefox = Number(str.replace(/\..*/g, ''));
        return o;
      } else {o.firefox = 0;}

      o.opera = a.match(/opr\/[\d.]+\s*/);
      if (o.opera && o.opera.length) {
        var str = o.opera[0].replace(/(opr\/|\s)/g, '');
        o.operaStr = str;
        o.opera = Number(str.replace(/\..*/g, ''));
        return o;
      } else {o.opera = 0;}
      
      o.safari = a.match(/version\/([\d.]+).*safari/);
      if (o.safari && o.safari.length) {
        var str = o.safari[0].replace(/(version\/| safari)/g, '');
        o.safariStr = str
        o.safari = Number(str.replace(/\..*/g, ''));
        return o;
      } else {o.safari = 0;}

      o.chrome = a.match(/chrome\/([\d.]+) /);
      if (o.chrome && o.chrome.length) {
        var str = o.chrome[0].replace(/(chrome\/| )/g, '');
        o.chromeStr = str;
        o.chrome = Number(str.replace(/\..*/g, ''));
        return o;
      } else {o.chrome = 0;}
      
    } catch (e) {}
    return o;
  };
  
  return {
    dataURLtoFile: dataURLtoFile,
    dataURLtoBlob: dataURLtoBlob,
    blobToFile: blobToFile,
    genUuid: genUuid,
    getEnvScien: getEnvScien
  }
});
