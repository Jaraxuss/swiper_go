---
name: HTML 风格总结
description: 分析 pages 目录下的 HTML 页面，按类型进行风格总结，输出固化的 HTML 片段模板
---

# HTML 风格总结 Skill

本 Skill 用于分析项目 `pages/` 目录下的 HTML 页面，按照分类（章节页、标准含视频详情页、一般详情页）进行风格总结，并输出可复用的 HTML 片段模板。

## 使用场景

当需要创建新的 HTML 页面时，可以参考本 Skill 生成的风格总结，确保所有页面风格一致。

---

## 步骤 1：启动本地服务

```bash
cd /Users/velen/Desktop/Velen/NodeJS/swiper_go && python3 -m http.server 8000
```

服务启动后，可通过 `http://localhost:8000/pages/` 访问所有页面。

---

## 步骤 2：逐个访问页面并进行风格分析

### 2.1 章节页分析

章节页用于作为内容分隔/过渡页面，以极简设计为主。

**代表页面：**
- `./pages/common/小试影刀.html`
- `./pages/common/QA.html`
- `./pages/common/从何开始.html`
- `./pages/common/感谢观看.html`

**访问方式：**
```
http://localhost:8000/pages/common/小试影刀.html
http://localhost:8000/pages/common/QA.html
```

使用浏览器访问上述页面，截图并分析以下要素：
- 背景样式（颜色、渐变光晕）
- 标题样式（字体大小、字重、颜色）
- 副标题/装饰元素样式
- 动画效果
- 整体布局

### 2.2 标准含视频详情页分析

含视频详情页具有统一的左右分栏布局，左侧为功能说明卡片，右侧为视频播放器。

**代表页面：**
- `./pages/custom/直播自动化.html`
- `./pages/custom/舆情监测自动化.html`
- `./pages/custom/场景_财务部方案.html`
- `./pages/custom/影刀AI Power介绍.html`
- `./pages/custom/小红书笔记批量采集.html`

**访问方式：**
```
http://localhost:8000/pages/custom/直播自动化.html
http://localhost:8000/pages/custom/舆情监测自动化.html
```

分析要素：
- 头部标题区样式（红色竖条 + 主标题 + 副标题）
- 左侧功能卡片组样式
- 右侧视频播放器样式
- 底部页码装饰
- 动画与交互效果

### 2.3 一般详情页分析

一般详情页内容较为灵活，可能包含：痛点/方案对比布局、场景列表卡片、数据统计卡片、工作流视图等。

**代表页面：**
- `./pages/custom/BOM物料清单自动化.html`（痛点+方案+工作流视图）
- `./pages/custom/RPA制造业场景列表.html`（多列场景卡片）
- `./pages/custom/RPA制造业间接价值.html`（价值卡片组）
- `./pages/custom/场景_财务部痛点.html`（痛点卡片组）

**访问方式：**
```
http://localhost:8000/pages/custom/BOM物料清单自动化.html
http://localhost:8000/pages/custom/RPA制造业场景列表.html
```

分析要素：
- 页面整体框架
- 卡片类型与样式
- 数据展示区块
- 工作流/流程图视图
- 统计/效益数据展示

---

## 步骤 3：输出风格总结

分析完成后，将每个分类的风格总结保存到 `./html_style_summary/` 目录：

### 3.1 章节页总结

输出到：`./html_style_summary/01_章节页风格.md`

总结内容应包含：
1. **设计规范**
   - 画布尺寸：1280x720px
   - 背景色：#F8F9FA
   - 品牌色：#C00000 (影刀红)
   - 字体：Inter + Noto Sans SC

2. **布局模板**
   - 居中垂直布局
   - 超大标题 + 装饰线 + 副标题

3. **固化 HTML 片段**
   - 完整的可复用 HTML 模板代码

### 3.2 标准含视频详情页总结

输出到：`./html_style_summary/02_标准含视频详情页风格.md`

总结内容应包含：
1. **设计规范**
2. **布局模板**（头部 + 左右分栏 + 底部）
3. **组件清单**
   - 头部标题组件
   - 功能卡片组件
   - 价值条组件
   - 视频播放器组件
   - 底部页码组件
4. **固化 HTML 片段**

### 3.3 一般详情页总结

输出到：`./html_style_summary/03_一般详情页风格.md`

总结内容应包含：
1. **设计规范**
2. **布局模板变体**
   - 痛点+方案+工作流布局
   - 多列卡片布局
   - 统计数据布局
3. **可复用组件**
   - 痛点卡片
   - 方案卡片
   - 统计卡片
   - 工作流视图
   - 场景列表卡片
4. **固化 HTML 片段**

---

## 风格总结要求

每个总结文档必须包含：

1. **设计令牌 (Design Tokens)**
   ```css
   /* 关键颜色 */
   --rpa-red: #C00000;
   --bg-light: #F8F9FA;
   --text-primary: #1F2937;
   --text-secondary: #6B7280;
   
   /* 关键间距 */
   --page-padding: 48px (p-12);
   --card-padding: 24px (p-6);
   
   /* 关键圆角 */
   --radius-card: 16px (rounded-2xl);
   --radius-icon: 12px (rounded-xl);
   ```

2. **HTML 结构框架**
   - 页面外壳结构
   - 内容区域划分
   - 响应式处理

3. **CSS 类名约定**
   - 使用 Tailwind CSS
   - 自定义类名规范

4. **动画约定**
   - 入场动画
   - 交互动画
   - 动画延迟规则

5. **完整可复用代码片段**
   - 可直接复制使用的 HTML 模板
   - 包含所有必要的 CSS 和引用

---

## 注意事项

1. 确保 Python HTTP 服务在后台运行
2. 使用浏览器截图工具记录关键样式
3. 所有输出使用 Markdown 格式
4. 代码片段使用围栏代码块，标注语言类型
5. 风格总结要具体、可操作，便于后续 Skill 直接使用
