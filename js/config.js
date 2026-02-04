/**
 * Project Configuration
 */
var brandConfig = {
    clientName: "常熟通润汽车零部件股份有限公司",
    presentationTitle: "影刀演示文稿"
};
window.brandConfig = brandConfig; // Explicitly attach to window for iframe access

/**
 * Slide Show Configuration
 * Add or remove slides here. Supports comments and easy reordering.
 */
const slideConfig = [
    // 首页
    "pages/custom/跨境汽配领军者启动会首页.html",

    // RPA简介
    "pages/common/影刀RPA简介.html",
    "pages/common/影刀能做什么.html",
    "pages/common/影刀能做什么2.html",

    // 行业挑战和 RPA 价值
    "pages/custom/RPA制造业挑战.html",
    "pages/custom/业务挑战_流程断点多海量非结构数据.html",
    "pages/custom/制造业RPA场景地图.html",

    // 简单实操
    "pages/common/小试影刀.html",

    // 核心场景场景案例 - 财务部门
    "pages/custom/核心场景相关案例2.html",
    "pages/custom/场景_财务部痛点.html",
    "pages/custom/场景_财务部方案.html",

    // 核心场景场景案例 - 电商部门
    "pages/custom/核心场景相关案例1.html",

    // 核心场景场景案例 - 研发部门
    "pages/custom/其他部门场景相关案例4.html",
    "pages/custom/BOM物料清单自动化.html",
    "pages/custom/BOM数据自动化维护.html",

    // 其他部门场景案例 - 生产部门
    "pages/custom/其他部门场景相关案例1.html",
    "pages/custom/生产日报自动化汇总.html",
    "pages/custom/工单自动化批量管理.html",
    "pages/custom/制造业_文件内容对比.html",
    "pages/custom/制造业_超复杂表单识别.html",

    // 其他部门场景案例 - 计划部门
    // "pages/custom/制造业_采购月度原料用量计算.html",
    // "pages/custom/制造业_延期订单查询跟进.html",

    // 其他部门场景案例 - 采购部门
    "pages/custom/其他部门场景相关案例3.html",
    "pages/custom/制造业_采购每日原材料价格获取.html",
    "pages/custom/制造业_物料到货计划拆分.html",
    // "pages/custom/制造业_采购份额调整分配.html",

    // 其他部门场景案例 - 销售部门
    "pages/custom/其他部门场景相关案例2.html",
    "pages/custom/制造业_EDI订单信息提取.html",
    "pages/custom/制造业_OMS销售订单录入.html",
    // "pages/custom/自动化创建销售订单.html",
    // "pages/custom/采购入库自动化.html",

    // 其他部门场景案例 - 仓储部门
    // "pages/custom/制造业_仓储部出货标签制作.html",
    // "pages/custom/制造业_每日发货流程自动化.html",

    // "pages/custom/RPA+AI文件处理助手_案例1_文件内容对比.html",
    // "pages/custom/RPA+AI文件处理助手_案例2_表单识别填写.html",
    // "pages/custom/制造业RPA场景地图_PMC部.html",

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
