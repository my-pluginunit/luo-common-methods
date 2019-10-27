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

  return {
    dataURLtoFile: dataURLtoFile,
    dataURLtoBlob: dataURLtoBlob,
    blobToFile: blobToFile,
    genUuid: genUuid
  }
});
