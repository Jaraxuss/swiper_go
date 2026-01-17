帮我创建一个「HTML 风格总结 Skill」：

这个 Skill 的大致步骤：
1. 使用 `python3 -m http.server 8000` 起服务；
2. 使用浏览器逐个访问 http://localhost:8000/pages/ 以下的页面，根据我分好的类型，进行页面风格总结：
    - 章节页。如：
        - ./pages/common/小试影刀.html
        - ./pages/common/QA.html 等
    - 标准含视频详情页。如：
        - ./pages/custom/直播自动化.html
        - ./pages/custom/舆情监测自动化.html 
        - ./pages/custom/场景_财务部方案.html 
        - ./pages/custom/影刀AI Power介绍.html 等
    - 一般详情页（正文部分内容往往不太固定，需要根据来源的资料内容生成），如：
        - ./pages/custom/BOM物料清单自动化.html
        - ./pages/custom/RPA制造业场景列表.html
        - ./pages/custom/RPA制造业间接价值.html
        - ./pages/custom/场景_财务部痛点.html 等

3. 输出每个分类的 HTML 风格总结，保存到 ./html_style_summary 目录下。要求总结出固化的 HTML 片段，可以被后续的 Skill 使用；

---

1. 我会给定 PDF 文件放在 ./pdf 目录下，读取目录下的 PDF 文件；
2. 