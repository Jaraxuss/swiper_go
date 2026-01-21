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
    "pages/custom/跨境电商_启动会首页.html",

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

];

// If you need to export this for potential build tools, you can add:
// if (typeof module !== 'undefined') module.exports = slideConfig;
