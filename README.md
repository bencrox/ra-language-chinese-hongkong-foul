# React-Admin 廣東話溝埋粗口翻譯

用廣東話溝咁啲粗口演繹 [react-admin](https://github.com/marmelab/react-admin), 搭響 REST/GraphQL 上面果層網頁皮

## 版本

專登整俾 3.3.4

## 安裝

```sh
npm install --save ra-language-chinese-hongkong-foul
```

## 用法

```js
import hkfoulMessages from 'ra-language-chinese-hongkong-foul';

const messages = {
    'zh_hk_foul': hkfoulMessages
};

<Admin locale="zh_hk_foul" messages={messages}>
  ...
</Admin>
```

## 牌照

呢抽翻譯係跟著 MIT 模式許可發行
