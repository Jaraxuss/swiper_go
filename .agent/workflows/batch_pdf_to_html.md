---
description: 自动将 PDF 文档批量转换为带动画的 HTML 页面
---

// turbo-all
1. 准备环境与工具
   - 检查 `package.json`。
   - 安装 PDF 处理工具 (Mac): `brew install poppler`。这将提供 `pdftoppm` 命令。

2. 执行 PDF 拆分
   - 确保 `temp_pages/` 目录存在：`mkdir -p temp_pages`。
   - 查找当前工作区内的 PDF 文件。
   - 运行转换命令：`pdftoppm -png "<你的PDF文件名.pdf>" temp_pages/page`。
     - 这将生成 `temp_pages/page-1.png`, `temp_pages/page-2.png` 等。

3. 批量生成 HTML 页面
   - 获取 `temp_pages/` 目录下的所有 PNG 图片列表。
   - **对于每一张图片（按顺序处理，除非出错，否则不要暂停等待用户确认）**：
     1. **视觉分析（关键步骤）：**
        - 使用 `view_file` 查看图片。
        - **必须在心中列出该页面的 3 个关键视觉特征**（例如：特殊的箭头标题、红色的弧形背景、左右各半的布局）。
        - 思考如何用 Tailwind CSS 完美复刻这些特征，而不是套用通用模板。
     2. 创建对应的 HTML 文件在 `pages/` 目录下（例如 `page_1.html`）。
     3. **执行代码生成（高标准）：**
        - 应用规则 '风格复刻'：背景渐变白、影刀红 (#C00000) 分隔符。
        - 应用规则 '支持容器飞入动画'。
        - **质量红线**：如果页面有特殊的复杂的布局（如复杂的流程图、时间轴），优先使用 HTML/CSS 绘制。如果实在太复杂且无法还原，才使用图片(`<img>`)兜底，但必须裁剪得当。
     4. **注册配置**：
        - 每次生成完一个 HTML，**立即**将其添加到 `js/config.js` 的 `slideConfig` 数组最前面。

4. 结果清理与验证
   - 统计 `pages/` 下生成的 HTML 文件数量是否符合预期。
   - 告知用户处理完成（仅在所有页面全部生成完毕后）。