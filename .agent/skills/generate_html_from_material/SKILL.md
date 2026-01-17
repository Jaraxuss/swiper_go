---
name: 根据资料生成 HTML 页面
description: 根据用户上传的资料（文字、图片、视频等）和指定的风格类型，查找 html_style_summary 目录下的风格总结文件，生成符合规范的 HTML 页面
---

# 根据资料生成 HTML 页面 Skill

本 Skill 用于根据用户提供的资料（文字、图片、视频等）和指定的页面风格类型，参考 `html_style_summary/` 目录下的风格总结文件，生成符合项目规范的 HTML 页面。

## 适用场景

- 需要快速创建新的 HTML 演示页面
- 确保所有页面风格统一
- 将产品资料转换为标准化的展示页面

---

## 前置条件

1. 用户需要提供：
   - **资料内容**：文字描述、图片、视频等素材
   - **页面风格类型**：章节页 / 标准含视频详情页 / 一般详情页
   - **页面文件名**：目标 HTML 文件的名称

2. 确保 `html_style_summary/` 目录下存在对应的风格总结文件：
   - `01_章节页风格.md`
   - `02_标准含视频详情页风格.md`
   - `03_一般详情页风格.md`

---

## 步骤 1：确认用户输入

### 1.1 收集必要信息

向用户确认以下信息：

| 信息项 | 说明 | 示例 |
|--------|------|------|
| **页面风格** | 三种类型之一 | 标准含视频详情页 |
| **页面标题** | 主标题文字 | 直播自动化 |
| **副标题** | 可选，辅助说明 | 实现直播间智能互动 |
| **功能要点** | 核心功能列表 | 1. 自动回复 2. 数据统计 |
| **视频路径** | 仅视频详情页需要 | ./assets/videos/demo.mp4 |
| **图片素材** | 用户上传的图片 | [用户上传图片] |
| **文字描述** | 详细内容描述 | [用户提供文字] |

### 1.2 确定页面类型

根据用户指定的风格类型，确定要参考的风格总结文件：

- **章节页** → 查看 `./html_style_summary/01_章节页风格.md`
- **标准含视频详情页** → 查看 `./html_style_summary/02_标准含视频详情页风格.md`
- **一般详情页** → 查看 `./html_style_summary/03_一般详情页风格.md`

---

## 步骤 2：查阅风格总结文件

根据用户指定的页面类型，读取对应的风格总结文件。

### 2.1 章节页风格

如果用户选择「章节页」风格，执行：

```
view_file ./html_style_summary/01_章节页风格.md
```

重点关注：
- 页面布局结构（居中垂直布局）
- 标题样式（超大字体、品牌色装饰）
- 动画效果（fadeInUp 等）
- 可复用的 HTML 模板代码

### 2.2 标准含视频详情页风格

如果用户选择「标准含视频详情页」风格，执行：

```
view_file ./html_style_summary/02_标准含视频详情页风格.md
```

重点关注：
- 头部标题区结构（红色竖条 + 主标题 + 副标题）
- 左右分栏布局（左侧卡片 + 右侧视频）
- 功能卡片组件样式
- 视频播放器组件
- 底部页码装饰
- 动画与入场效果

### 2.3 一般详情页风格

如果用户选择「一般详情页」风格，执行：

```
view_file ./html_style_summary/03_一般详情页风格.md
```

重点关注：
- 多种布局变体（痛点+方案、多列卡片、统计数据等）
- 卡片组件类型与样式
- 工作流视图组件
- 数据展示区块样式
- 可复用组件清单

---

## 步骤 3：处理用户资料

### 3.1 文字内容处理

将用户提供的文字内容结构化：

- **提取标题**：识别主标题和副标题
- **提取要点**：识别功能列表、价值点、痛点等
- **提取数据**：识别统计数字、效益指标等

### 3.2 图片资料处理

如果用户上传了图片：

1. **分析图片内容**：理解图片中的布局、颜色、元素
2. **提取关键信息**：文字、图标、数据等
3. **确定使用方式**：
   - 作为背景图
   - 作为功能展示图
   - 作为图标素材
   - 需要转换为 HTML 元素

### 3.3 视频资料处理

如果用户提供了视频：

1. **确认视频路径**：相对于项目根目录的路径
2. **确认视频格式**：MP4 等
3. **确认播放设置**：自动播放、循环、静音等

---

## 步骤 4：生成 HTML 页面

### 4.1 基础结构

所有页面都需要包含以下基础结构：

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
        <!-- 页面内容 -->
    </main>
    <script src="../../assets/script.js"></script>
</body>
</html>
```

### 4.2 根据风格类型填充内容

#### 章节页模板

```html
<main class="page-container relative flex items-center justify-center">
    <!-- 背景光晕效果 -->
    <div class="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-gradient-to-br from-[#C00000]/20 to-transparent rounded-full blur-3xl"></div>
    
    <!-- 主标题区 -->
    <div class="text-center z-10 animate-fadeInUp">
        <h1 class="text-6xl font-bold text-gray-800 mb-4">[主标题]</h1>
        <div class="w-24 h-1 bg-[#C00000] mx-auto mb-4"></div>
        <p class="text-xl text-gray-500">[副标题]</p>
    </div>
</main>
```

#### 标准含视频详情页模板

```html
<main class="page-container flex flex-col p-12">
    <!-- 头部标题区 -->
    <header class="mb-8 flex items-start gap-4 animate-fadeInDown">
        <div class="w-1.5 h-16 bg-[#C00000] rounded-full"></div>
        <div>
            <h1 class="text-3xl font-bold text-gray-800">[主标题]</h1>
            <p class="text-lg text-gray-500 mt-2">[副标题]</p>
        </div>
    </header>
    
    <!-- 内容区：左右分栏 -->
    <div class="flex-1 grid grid-cols-2 gap-8">
        <!-- 左侧：功能卡片 -->
        <div class="space-y-4">
            <!-- 功能卡片组 -->
        </div>
        
        <!-- 右侧：视频区 -->
        <div class="flex items-center justify-center">
            <video class="rounded-2xl shadow-lg max-h-full" src="[视频路径]" controls></video>
        </div>
    </div>
    
    <!-- 底部页码 -->
    <footer class="mt-4 text-right text-gray-400 text-sm">
        <span class="text-[#C00000] font-bold">[当前页码]</span> / [总页数]
    </footer>
</main>
```

#### 一般详情页模板

根据内容类型选择合适的布局变体，参考 `03_一般详情页风格.md` 中的具体模板。

### 4.3 填充具体内容

1. 替换占位符为实际内容
2. 调整卡片数量和布局
3. 添加适当的动画延迟
4. 确保颜色和间距符合设计规范

---

## 步骤 5：保存和验证

### 5.1 确定保存路径

根据页面类型确定保存路径：

- **通用页面**（如章节页）：`./pages/common/[文件名].html`
- **定制页面**（如详情页）：`./pages/custom/[文件名].html`

### 5.2 保存文件

使用 `write_to_file` 工具保存生成的 HTML 文件。

### 5.3 验证页面

1. 启动本地服务（如果尚未启动）：
   ```bash
   cd /Users/velen/Desktop/Velen/NodeJS/swiper_go && python3 -m http.server 8000
   ```

2. 使用浏览器访问页面验证效果：
   ```
   http://localhost:8000/pages/[路径]/[文件名].html
   ```

3. 检查要点：
   - 布局是否正确
   - 样式是否符合规范
   - 动画是否流畅
   - 内容是否完整

---

## 风格对应关系速查表

| 用户需求 | 推荐风格类型 | 参考文件 |
|----------|--------------|----------|
| 章节过渡、分隔页 | 章节页 | `01_章节页风格.md` |
| 功能介绍 + 演示视频 | 标准含视频详情页 | `02_标准含视频详情页风格.md` |
| 痛点分析、方案对比 | 一般详情页 | `03_一般详情页风格.md` |
| 场景列表、功能矩阵 | 一般详情页 | `03_一般详情页风格.md` |
| 价值展示、数据统计 | 一般详情页 | `03_一般详情页风格.md` |

---

## 设计规范速查

### 关键颜色

| 颜色名称 | 色值 | 用途 |
|----------|------|------|
| 品牌红 | `#C00000` | 标题装饰、强调色 |
| 背景色 | `#F8F9FA` | 页面背景 |
| 主文字 | `#1F2937` | 标题、正文 |
| 辅助文字 | `#6B7280` | 副标题、说明 |
| 卡片背景 | `rgba(255,255,255,0.7)` | 毛玻璃卡片 |

### 关键间距

| 间距类型 | 数值 | Tailwind 类 |
|----------|------|-------------|
| 页面边距 | 48px | `p-12` |
| 卡片内边距 | 24px | `p-6` |
| 元素间距 | 16px | `gap-4` |

### 关键圆角

| 元素类型 | 数值 | Tailwind 类 |
|----------|------|-------------|
| 卡片圆角 | 16px | `rounded-2xl` |
| 小元素圆角 | 12px | `rounded-xl` |
| 按钮圆角 | 8px | `rounded-lg` |

### 标准动画

| 动画名称 | 效果 | 常用场景 |
|----------|------|----------|
| `animate-fadeInUp` | 从下往上淡入 | 卡片入场 |
| `animate-fadeInDown` | 从上往下淡入 | 标题入场 |
| `animate-fadeInLeft` | 从左往右淡入 | 左侧内容 |
| `animate-fadeInRight` | 从右往左淡入 | 右侧内容 |

---

## 注意事项

1. **保持风格一致**：严格参考风格总结文件中的规范
2. **响应式考虑**：优先保证 1280x720 展示效果
3. **动画适度**：不要过度使用动画，保持简洁
4. **语义化标签**：使用正确的 HTML5 语义标签
5. **资源路径**：确保图片、视频等资源路径正确
6. **变量替换**：使用 `[CLIENT_NAME]` 等占位符，由 script.js 自动替换

---

## 常见问题

### Q: 如何确定使用哪种详情页布局？

A: 根据内容类型判断：
- 有视频演示 → 标准含视频详情页
- 痛点+方案分析 → 一般详情页（对比布局）
- 多个场景/功能列表 → 一般详情页（卡片网格布局）
- 数据/价值展示 → 一般详情页（统计卡片布局）

### Q: 图片素材如何处理？

A: 
1. 如果是展示用途，保存到 `./assets/images/` 目录
2. 如果是设计参考，分析后转换为 HTML/CSS 实现
3. 确保使用相对路径引用

### Q: 页面需要添加到配置吗？

A: 是的，新页面需要添加到 `./config.js` 的 slides 数组中才能在幻灯片中展示。
