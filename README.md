# swiper_go

**Start your presentation with a Swipe.**

`swiper_go` 是一个基于 **Swiper.js** 的交互式 Web 演示框架，专为 **影刀 RPA** 解决方案的展示而设计。通过 iframe 架构加载独立 HTML 幻灯片页面，支持丰富媒体、逐步动画、品牌定制和 macOS 风格的页面 Dock 导航，打造类 App 的沉浸式演示体验。

---

## ✨ 核心特性

- **Swiper 驱动**：基于 Swiper.js 实现流畅的淡入淡出切换、鼠标滚轮 / 键盘 / 触控多种交互方式。
- **iframe 架构**：每张幻灯片为独立 HTML 页面，通过 iframe 嵌入主页面，页面间完全隔离，便于独立开发和维护。
- **逐步动画系统**：幻灯片内部支持 `.fragment` 元素渐进式展示，可通过 `animation_step` 属性控制播放顺序与分组。
- **品牌模板注入**：支持 `{{CLIENT_NAME}}` 等占位符，在 `config.js` 中设置品牌信息后自动替换到所有子页面。
- **类 macOS Dock 导航**：右侧悬停呼出缩略图 Dock 栏，实时预览所有页面并支持一键跳转。
- **Lazy Load**：幻灯片按需加载，仅渲染当前页面及相邻页面，优化性能。
- **离线就绪**：所有资源本地化（Swiper 库、字体、图片、视频等），无需网络即可演示。
- **AI 辅助内容生产**：内置 AI Skills 体系，支持风格总结和基于素材自动生成 HTML 页面。

---

## 🚀 快速开始

### 1. 克隆仓库

```bash
git clone https://github.com/yourusername/swiper_go.git
cd swiper_go
```

### 2. 安装依赖

```bash
npm install
```

### 3. 启动演示

本项目为纯静态 HTML 项目，直接用浏览器打开 `index.html`，或使用本地静态服务器：

```bash
npx serve .
```

> **Tip**: 推荐使用全屏模式以获得最佳展示效果。

---

## 📂 项目结构

```
swiper_go/
├── index.html                 # 主入口，Swiper 容器 + Dock 导航
├── js/
│   ├── config.js              # 品牌配置 & 幻灯片列表（slideConfig）
│   └── slide-core.js          # 幻灯片核心引擎（缩放 / 动画 / 导航 / 品牌注入）
├── pages/
│   ├── common/                # 通用幻灯片（RPA 简介、学习路径、Q&A 等）
│   ├── custom/                # 定制幻灯片（行业场景、案例详情等）
│   └── 启动会首页.html          # 启动会首页
├── assets/                    # 图片、视频等媒体资源
├── lib/                       # 第三方库（Swiper CSS/JS 等）
├── html_style_summary/        # HTML 风格总结模板（5 种页面风格）
├── .agent/
│   ├── skills/                # AI Skills（风格总结、素材生成 HTML）
│   └── workflows/             # 自动化工作流
├── scripts/
│   └── pdf_to_images.py       # PDF 转图片工具脚本
├── package.json
├── requirements.txt           # Python 依赖（pymupdf）
└── .gitignore
```

---

## ⚙️ 配置说明

### 品牌配置

编辑 `js/config.js` 中的 `brandConfig` 对象即可自定义品牌信息：

```js
var brandConfig = {
    clientName: "客户名称",
    presentationTitle: "演示标题"
};
```

在幻灯片 HTML 中使用 `{{CLIENT_NAME}}` 占位符，`slide-core.js` 会在页面加载时自动替换。

### 幻灯片管理

在 `js/config.js` 的 `slideConfig` 数组中添加、删除或重排幻灯片路径：

```js
const slideConfig = [
    "pages/启动会首页.html",
    "pages/common/影刀RPA简介.html",
    "pages/custom/RPA制造业挑战.html",
    // ...更多幻灯片
];
```

---

## 🎞️ 幻灯片开发

### 页面结构

每个幻灯片页面是独立的 HTML 文件，需包含基本结构：

```html
<div id="page-shell">
    <div id="slide-scale-wrapper">
        <!-- 页面内容，设计尺寸 1280×720 -->
    </div>
</div>
<script src="../js/slide-core.js"></script>
```

`slide-core.js` 会自动将内容等比缩放以适配屏幕。

### Fragment 动画

为元素添加 `fragment` 类使其初始隐藏，按键或滚轮时渐进式呈现：

```html
<div class="fragment">第一步显示的内容</div>
<div class="fragment">第二步显示的内容</div>
```

使用 `animation_step` 属性可控制播放顺序，相同 step 值的元素同时出现：

```html
<div class="fragment" animation_step="1">与下方元素同时出现</div>
<div class="fragment" animation_step="1">与上方元素同时出现</div>
<div class="fragment" animation_step="2">第二步出现</div>
```

### 页面分类

| 目录 | 用途 | 示例 |
|------|------|------|
| `pages/common/` | 通用复用页面 | RPA 简介、学习路径、Q&A |
| `pages/custom/` | 客户定制页面 | 行业挑战、场景案例、方案详情 |

---

## 🤖 AI Skills 体系

项目内置两个 AI Skill，用于辅助内容生产：

| Skill | 说明 |
|-------|------|
| **HTML 风格总结** | 分析指定 HTML 页面，提取风格规范，输出固化的模板文件至 `html_style_summary/` |
| **根据资料生成 HTML 页面** | 根据上传素材（文字、图片、视频）和指定风格，自动生成符合规范的幻灯片 HTML |

风格模板存放在 `html_style_summary/` 目录下，目前包含 5 种页面风格。

---

## 🛠️ 辅助工具

| 工具 | 路径 | 说明 |
|------|------|------|
| PDF 转图片 | `scripts/pdf_to_images.py` | 将 PDF 文件转换为图片，需要 `pymupdf` 依赖 |

安装 Python 依赖：

```bash
pip install -r requirements.txt
```

---

## 📄 License

[MIT](LICENSE)
