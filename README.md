# luo-common-methods

> Common method


## Install

```bash
npm install luo-common-methods -S
```

## Props 

| 参数类型 | 说明 |
| ---------- | ----------- |
| -- | ------------ |

## 将base64转换为文件

```js
import { dataURLtoFile } from 'luo-common-methods';
var base64 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAACMAAAAPqCAYAAAB/';   // 非真实base64（演示用）
let file = dataURLtoFile(base64, '测试文件.txt');
console.log(file);

```

## 将base64转换为blob

```js
import { dataURLtoBlob } from 'luo-common-methods';
var base64 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAACMAAAAPqCAYAAAB/';   // 非真实base64（演示用）
var blob = dataURLtoBlob(base64);
console.log(blob);

```

## 将blob转换为file

```js
import { blobToFile } from 'luo-common-methods';
var blob = new Blob([JSON.stringify({hello: "world"}, null, 2)], {type : 'application/json'})
var file = blobToFile(blob, '测试文件.txt');
console.log(file);

```

## 生成唯一标识

```js
import { genUuid } from 'luo-common-methods';
var uuid = genUuid();
console.log(uuid);

```

## 获取浏览器和系统信息

```js
import { getEnvScien } from 'luo-common-methods';
let sys = getEnvScien();

一：浏览器
  // ie
  console.log(sys.ie);
  console.log(sys.ieStr);

  // firefox
  console.log(sys.firefox);
  console.log(sys.firefoxStr);

  // opera
  console.log(sys.opera);
  console.log(sys.operaStr);

  // safari
  console.log(sys.safari);
  console.log(sys.safariStr);

  // chrome
  console.log(sys.chrome);
  console.log(sys.chromeStr);

二：判断是移动端还是pc端
  let is = sys.isMobile() ? 'mobile' : 'pc';

三：判断是否是ipad
  let is = sys.isIpad();

四：判断安卓还是ios
  let is = sys.isAndroidOrIos();
  console.log(is);     // android   or    ios

五：判断系统
  let is = sys.isSystem();
  console.log(is)      // window  mac  linux  iphone  android

六：判断是否是微信
  let is = sys.isWeixin();

七：判断是否是支付宝
  let is = sys.isAlipay();

八：判断是否为app  （注：需app开发人员设置标识）
  let is = isApp('myApp');

```

# License

This content is released under the [MIT](http://opensource.org/licenses/MIT) License.
