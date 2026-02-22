---
description: 根据提供的资料和指定风格生成标准化 HTML 页面
---

# 步骤 1：确认输入与前置信息

1. 向用户确认以下几项必要信息，如果用户未完整提供，请主动询问补齐：
   - **页面风格**：必须是“章节页”、“标准含视频详情页”或“一般详情页”之一。
   - **核心文案**：主标题文字和副标题。
   - **资料内容**：功能要点、描述文字、上传的图片、视频素材等。
   - **相关资源的具体路径**：例如视频和图片的路径（建议统一放入 `assets` 或根目录相对层级下）。

# 步骤 2：查阅页面风格指导文件

1. 如果你是第一次执行此工作流或不清楚具体的布局细节，请使用 `view_file` 查阅对应的风格总结：
   - **章节页**：参考 `.agent/skills/html_style_summary/01_章节页风格.md`
   - **标准含视频详情页**：参考 `.agent/skills/html_style_summary/02_标准含视频详情页风格.md`
   - **一般详情页**：参考 `.agent/skills/html_style_summary/03_一般详情页风格.md`

# 步骤 3：处理用户资料

1. **文字解析**：从用户提供的截图中解析有效文本或根据大纲提炼结构化文案。
2. **多媒体梳理**：确定使用的展示图或背景图，将提取出的图标转化为素材；如果是视频页面，确定视频实际路径、格式和是否需要静音或自动循环。

# 步骤 4：生成 HTML 页面

1. **输出基础 HTML 骨架**结构，必须确保引入了项目约定的 Tailwind CSS 和公共资源库：

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>[页面标题] - [CLIENT_NAME]</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="../../assets/style.css">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Noto+Sans+SC:wght@400;500;700&display=swap" rel="stylesheet">
</head>
<body class="page-wrapper">
    <main class="page-container">
        <!-- 内容区域 -->
    </main>
    <script src="../../assets/script.js"></script>
</body>
</html>
```

2. **根据具体的页面风格类型植入内页版型模板**（放入上述的 `<main>` 区块中并替换占位符）：

**类型 A - 章节页模板**：
```html
<main class="page-container relative flex items-center justify-center">
    <div class="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-gradient-to-br from-[#C00000]/20 to-transparent rounded-full blur-3xl"></div>
    <div class="text-center z-10 animate-fadeInUp">
        <h1 class="text-6xl font-bold text-gray-800 mb-4">[主标题]</h1>
        <div class="w-24 h-1 bg-[#C00000] mx-auto mb-4"></div>
        <p class="text-xl text-gray-500">[副标题]</p>
    </div>
</main>
```

**类型 B - 标准含视频详情页模板**：
```html
<main class="page-container flex flex-col p-12">
    <header class="mb-8 flex items-start gap-4 animate-fadeInDown">
        <div class="w-1.5 h-16 bg-[#C00000] rounded-full"></div>
        <div>
            <h1 class="text-3xl font-bold text-gray-800">[主标题]</h1>
            <p class="text-lg text-gray-500 mt-2">[副标题]</p>
        </div>
    </header>
    <div class="flex-1 grid grid-cols-2 gap-8">
        <div class="space-y-4">
            <!-- 功能卡片组 -->
        </div>
        <div class="flex items-center justify-center">
            <video class="rounded-2xl shadow-lg max-h-full" src="[视频路径]" controls></video>
        </div>
    </div>
    <footer class="mt-4 text-right text-gray-400 text-sm">
        <span class="text-[#C00000] font-bold">[当前页码]</span> / [总页数]
    </footer>
</main>
```

**类型 C - 一般详情页模板**：需严格参照 `03_一般详情页风格.md` 灵活选择其预设的卡片列表样式、对比布局或痛点说明组件。

3. **打磨规范细节**：
   - 主题色点缀采用品牌红 (`#C00000`)；
   - 对卡片等主要元素增加进入动画（`animate-fadeInUp` / `animate-fadeInDown` 等）；
   - 卡片或内容区块的圆角统一使用 `rounded-2xl`，通用外边距统一使用 `p-12`。

# 步骤 5：输出文件并验收测试

1. 根据页面性质（如共用页面与具体业务详情页），确定保存路径（`./pages/common/` 或 `./pages/custom/`）。
2. 写出完整的 HTML 页面代码并保存到磁盘上。
3. **补充步骤**：如果要使页面可展示，须将对应的页面路径同步补充进 `js/config.js` 的 `slides` 配置中。

// turbo
4. 运行服务来帮助用户在浏览器中检查样式和渲染情况：
```bash
python3 -m http.server 8000
```
