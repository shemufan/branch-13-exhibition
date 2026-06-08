# 计算机科学与技术学院十三支部对标项目

这是一个本地静态展示项目，使用纯 HTML、CSS、JavaScript 搭建，不需要数据库、构建工具或网络依赖。

## 目录说明

```text
.
├─ index.html
├─ pages/
│  ├─ school-history.html
│  ├─ college-history.html
│  └─ symposium.html
├─ assets/
│  ├─ css/
│  │  ├─ base.css
│  │  ├─ components.css
│  │  └─ pages.css
│  ├─ js/
│  │  └─ main.js
│  ├─ images/
│  │  ├─ school/
│  │  ├─ college/
│  │  └─ symposium/
│  └─ documents/
│     ├─ school/
│     ├─ college/
│     └─ symposium/
└─ README.md
```

## 协作规范

- 首页 `index.html` 负责项目入口、统一视觉和页面导航。
- 校史页面由 `pages/school-history.html` 维护。
- 院史页面由 `pages/college-history.html` 维护。
- 座谈会记录页面由 `pages/symposium.html` 维护。
- 图片按页面放入 `assets/images/` 下的对应目录。
- 文档/PDF 资料放入到 `assets/documents/` 下的对应目录。
- 各页面统一引用公共 CSS 和 JS，避免重复写一套导航、配色和基础样式。

## 使用方式

直接用浏览器打开 `index.html` 即可本地展示。项目也适合直接发布到 GitHub Pages。
