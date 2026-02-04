/**
 * Project Configuration
 */
var brandConfig = {
    clientName: "华医大健康",
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

    "pages/custom/舆情监测自动化.html",

    // RPA简介
    "pages/common/影刀RPA简介.html",
    "pages/common/影刀能做什么.html",
    "pages/common/影刀能做什么2.html",

    // 跨境RPA+AI场景
    "pages/common/影刀RPA简介.html",
    "pages/custom/卫健委网站查询医生执业信息1.html",
    "pages/custom/卫健委网站查询医生执业信息2.html",
    "pages/custom/微信精准触达方案.html",
    "pages/custom/企微AI客服机器人.html",

];

// If you need to export this for potential build tools, you can add:
// if (typeof module !== 'undefined') module.exports = slideConfig;
