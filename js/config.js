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
    "pages/common/影刀RPA简介.html",
    "pages/common/影刀能做什么.html",
    "pages/common/影刀能做什么2.html",

    // 跨境RPA+AI场景
    "pages/common/影刀RPA简介.html",
    "pages/custom/跨境_广告智能投手.html",
    "pages/custom/跨境_运营规则动态知识库.html",
    "pages/custom/跨境_物流多模态单据识别.html",
    "pages/custom/跨境_视觉全自动化工坊.html",
    "pages/custom/跨境_AI标题优化.html",

    // 简单实操
    "pages/common/小试影刀.html",

    // 痛点场景案例
    // "pages/核心场景相关案例1.html",

    // 通用场景案例
    "pages/custom/更多场景案例2.html",
    "pages/custom/场景_运营部方案.html",
    "pages/custom/场景_电商客服方案.html",
    "pages/custom/场景_财务部痛点.html",
    "pages/custom/场景_财务部方案.html",

    // 课程体系介绍
    "pages/common/从何开始.html",
    "pages/common/学习路径规划.html",

    // 答疑体系介绍
    "pages/common/答疑体系介绍1.html",
    "pages/common/答疑体系介绍2.html",

    // 如何提需求
    "pages/common/如何提需求1.html",
    "pages/common/如何提需求2.html",

    // 时间节点
    "pages/common/里程碑.html",
    "pages/common/下一步行动.html",

    // 结束
    "pages/common/QA.html",
    "pages/common/感谢观看.html",
];

// If you need to export this for potential build tools, you can add:
// if (typeof module !== 'undefined') module.exports = slideConfig;
