/**
 * Project Configuration
 */
var brandConfig = {
    clientName: "华孚精密科技",
    presentationTitle: "影刀演示文稿"
};
window.brandConfig = brandConfig; // Explicitly attach to window for iframe access

/**
 * Slide Show Configuration
 * Add or remove slides here. Supports comments and easy reordering.
 */
const slideConfig = [
    // 首页
    "pages/启动会首页.html",

    // RPA简介
    "pages/影刀RPA简介.html",
    "pages/影刀能做什么.html",
    "pages/影刀能做什么2.html",

    // 行业挑战和 RPA 价值
    "pages/RPA制造业挑战.html",
    "pages/RPA制造业场景列表.html",
    "pages/RPA制造业间接价值.html",
    "pages/RPA制造业直接价值.html",

    // 简单实操
    "pages/小试影刀.html",

    // 痛点场景案例
    "pages/核心场景相关案例1.html",
    "pages/生产日报自动化汇总.html",
    "pages/工单自动化批量管理.html",
    "pages/小红书笔记批量采集.html",
    "pages/影刀AI Power介绍.html",
    "pages/AI音频克隆.html",

    // 核心场景场景案例
    "pages/更多场景案例1.html",
    "pages/小红书达人批量采集.html",
    "pages/直播自动化.html",
    "pages/舆情监测自动化.html",

    // 通用场景案例
    "pages/更多场景案例2.html",
    "pages/场景_运营部方案.html",
    "pages/场景_电商客服方案.html",
    "pages/场景_财务部痛点.html",
    "pages/场景_财务部方案.html",

    // 课程体系介绍
    "pages/从何开始.html",
    "pages/学习路径规划.html",

    // 答疑体系介绍
    "pages/答疑体系介绍1.html",
    "pages/答疑体系介绍2.html",

    // 如何提需求
    "pages/如何提需求1.html",
    "pages/如何提需求2.html",

    // 时间节点
    "pages/里程碑.html",
    "pages/下一步行动.html",

    // 结束
    "pages/QA.html",
    "pages/感谢观看.html",
];

// If you need to export this for potential build tools, you can add:
// if (typeof module !== 'undefined') module.exports = slideConfig;
