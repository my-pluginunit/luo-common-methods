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

# License

This content is released under the [MIT](http://opensource.org/licenses/MIT) License.
