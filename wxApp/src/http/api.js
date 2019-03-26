import fly from './config'
import qs from 'qs'

//let baseUrl = getStorage('requestHost'); 


//配置API接口地址

let baseUrl = 'https://www.i-plc.cn';

// 配置API接口地址
//let baseUrl ='接口域名';

/**
 * 接口模版====post
 *
 * export const test = params => {return fly.post(`${root}/xx/xx`, qs.stringify(params))};
 *
 * 接口模版====get
 *
 * export const test1 = function(){return fly.get(`${root}/api/getNewsList`)}
 *
 *
 * 用法：
 * 在 页面用引入  test
 * import {test} from '../../http/api.js'
 *
 * test(params).then(res=>{ console.log(res) })
 */
/**
 * 2018-6-22
 * 新增需求将host域名改为变量
 */



//登录
// export const login = (params,baseUrl) => {return fly.post(baseUrl+'/api/request?rname=i_plc.Page.report_wechat.report.Login', qs.stringify(params))};
// //

// //根据桶号获取桶号信息
// export const getBucketInfo = params => {return fly.post(`${baseUrl}/api/request?rname=i_plc.Page.report_wechat.report.requestBucketCodeInfo`, qs.stringify(params))};
// //根据桶号获取工单对应的产品编码及头标
// export const getPartInfo = params => {return fly.post(`${baseUrl}/api/request?rname=i_plc.Page.report_wechat.report.requestcInvCode_partID`, qs.stringify(params))};
// //获取桶工艺路线
// export const getOpse = params => {return fly.post(`${baseUrl}/api/request?rname=i_plc.Page.report_wechat.report.requestBucketCodeOpse`, qs.stringify(params))};
// //报工界面信息
// export const getReportInfo = params => {return fly.post(`${baseUrl}/api/request?rname=i_plc.Page.report_wechat.report.requestReportInfo`, qs.stringify(params))};
// //确认报工
// export const submitReport = params => {return fly.post(`${baseUrl}/api/request?rname=i_plc.Page.report_wechat.report.confirmreportorder`, qs.stringify(params))};

// //校验所填工号是否有报工权限
// export const checkJobID = params => {return fly.post(`${baseUrl}/api/request?rname=i_plc.Page.report_wechat.report.checkJobID`, qs.stringify(params))};

// // 称重报工MQTT同步数据

// export const scanWeight = params => {return fly.post(`${baseUrl}/api/request?rname=i_plc.Page.mobile.manufacturing.scales.toCall`, qs.stringify(params))};

// //扫码称重获取数据录入重量

// export const getWeight = params => {return fly.post(`${baseUrl}/api/request?rname=i_plc.Page.mobile.manufacturing.scales.fromCall`, qs.stringify(params))};




//登录
export const login = (params,requestUrl) => {return fly.post(baseUrl+'/api/request?rname=i_plc.Page.report_wechat.report.Login&WxHost='+requestUrl, qs.stringify(params))};

//根据桶号获取桶号信息
export const getBucketInfo = (params,requestUrl) => {return fly.post(baseUrl+'/api/request?rname=i_plc.Page.report_wechat.report.requestBucketCodeInfo&WxHost='+requestUrl, qs.stringify(params))};
//根据桶号获取工单对应的产品编码及头标
export const getPartInfo = (params,requestUrl) => {return fly.post(baseUrl+'/api/request?rname=i_plc.Page.report_wechat.report.requestcInvCode_partID&WxHost='+requestUrl, qs.stringify(params))};
//获取桶工艺路线
export const getOpse = (params,requestUrl) => {return fly.post(baseUrl+'/api/request?rname=i_plc.Page.report_wechat.report.requestBucketCodeOpse&WxHost='+requestUrl, qs.stringify(params))};
//报工界面信息
export const getReportInfo = (params,requestUrl) => {return fly.post(baseUrl+'/api/request?rname=i_plc.Page.report_wechat.report.requestReportInfo&WxHost='+requestUrl, qs.stringify(params))};
//确认报工
export const submitReport = (params,requestUrl) => {return fly.post(baseUrl+'/api/request?rname=i_plc.Page.report_wechat.report.confirmreportorder&WxHost='+requestUrl, qs.stringify(params))};

//校验所填工号是否有报工权限
export const checkJobID = (params,requestUrl) => {return fly.post(baseUrl+'/api/request?rname=i_plc.Page.report_wechat.report.checkJobID&WxHost='+requestUrl, qs.stringify(params))};

// 称重报工MQTT同步数据

export const scanWeight = (params,requestUrl) => {return fly.post(baseUrl+'/api/request?rname=i_plc.Page.mobile.manufacturing.scales.toCall&WxHost='+requestUrl, qs.stringify(params))};

//扫码称重获取数据录入重量

export const getWeight = (params,requestUrl) => {return fly.post(baseUrl+'/api/request?rname=i_plc.Page.mobile.manufacturing.scales.fromCall&WxHost='+requestUrl, qs.stringify(params))};

//获取所有设备信息

export const getAllMachineInfo = (params,requestUrl) => {return fly.post(`${baseUrl}/api/request?rname=i_plc.Page.basicinfo.basicinfo.get_machine_data&WxHost=${requestUrl}`,qs.stringify(params) )};

//获取设备停机原因列表

export const getAllReason = (params,requestUrl) => {return fly.post(`${baseUrl}/api/request?rname=i_plc.Page.stationCenter.baseInfo.get_faultReason_Info&WxHost=${requestUrl}`, qs.stringify(params))};

//上传设备及停机原因

export const submitReason = (params,requestUrl) => {return fly.post(`${baseUrl}/api/request?rname=i_plc.Page.stationCenter.stationMachineDouble.wechatsubmitReason&WxHost=${requestUrl}`, qs.stringify(params))};

//扫码获取产品工序信息

export const getGxInfo = (params,requestUrl) => {return fly.post(`${baseUrl}/api/request?rname=i_plc.Page.apss.technicprocedure.product_get&WxHost=${requestUrl}`, qs.stringify(params))};

//工艺报工

export const submitGxReport= (params,requestUrl) => {return fly.post(`${baseUrl}/api/request?rname=i_plc.Page.apss.technicprocedure.procedure_record_save&WxHost=${requestUrl}`, qs.stringify(params))};


//获取某个工序下的记录列表

export const getGxListDetail= (params,requestUrl) => {return fly.post(`${baseUrl}/api/request?rname=i_plc.Page.apss.technicprocedure.procedure_record_list_get&WxHost=${requestUrl}`, qs.stringify(params))};

//获取产品下，有报工的工序列表

export const getGxList = (params,requestUrl) => {return fly.post(`${baseUrl}/api/request?rname=i_plc.Page.apss.technicprocedure.procedure_list_get&WxHost=${requestUrl}`, qs.stringify(params))};


//获取所以机器开停机数量

export const getTotalStatus = (params,requestUrl) => {return fly.post(`${baseUrl}/api/request?rname=i_plc.Page.wechat_api.wechat.getTotalStatus&WxHost=${requestUrl}`, qs.stringify(params))};

//获取设备列表信息

export const getMachineList = (params,requestUrl) => {return fly.post(`${baseUrl}/api/request?rname=i_plc.Page.wechat_api.wechat.getMachineList&WxHost=${requestUrl}`, qs.stringify(params))};

//获取设备故障信息

export const getMachineMalfunctionInfo = (params,requestUrl) => {return fly.post(`${baseUrl}/api/request?rname=i_plc.Page.wechat_api.wechat.getMachineMalfunctionInfo&WxHost=${requestUrl}`, qs.stringify(params))};

//获取产量排名

export const getRanking = (params,requestUrl) => {return fly.post(`${baseUrl}/api/request?rname=i_plc.Page.wechat_api.wechat.getWokerOutput&WxHost=${requestUrl}`, qs.stringify(params))};

//获取设备产量信息

export const getMachineOutput = (params,requestUrl) => {return fly.post(`${baseUrl}/api/request?rname=i_plc.Page.wechat_api.wechat.getMachineOutput&WxHost=${requestUrl}`, qs.stringify(params))};

//微信登录

export const getWXLogin = (params,requestUrl) => {return fly.post(`${baseUrl}/api/request?rname=i_plc.Page.ZW_zhihuitong_login.login.get_login_authorization1`, qs.stringify(params))};

//发送短信

export const getSMS = (params) => {return fly.post(`${baseUrl}/api/request?rname=i_plc.Page.register.register.getSMS`, qs.stringify(params))};

//管理端注册(管理员)

export const registerAccount = (params) => {return fly.post(`${baseUrl}/api/request?rname=i_plc.Page.ZW_zhihuitong_login.register.wx_register_leader`, qs.stringify(params))};

//管理端注册(工人)

export const workerRegisterAccount = (params) => {return fly.post(`${baseUrl}/api/request?rname=i_plc.Page.ZW_zhihuitong_login.register.wx_register_staff`, qs.stringify(params))};

//获取小程序码

export const getWxCode = (params) => {return fly.post(`${baseUrl}/api/request?rname=i_plc.Page.ZW_zhihuitong_login.register.get_wxCode`, qs.stringify(params))};

//校验用户

export const checkUser = (params,requestUrl) => {return fly.post(`${baseUrl}/api/request?rname=i_plc.Page.ZW_zhihuitong_login.login.is_user_exist`, qs.stringify(params))};

//获取停机原因分析

export const getStopMachineReasonInfo = (params,requestUrl) => {return fly.post(`${baseUrl}/api/request?rname=i_plc.Page.basicinfo.basicinfo.wx_machine_data_get&WxHost=${requestUrl}`, qs.stringify(params))};

//获取监控曲线

export const getMonitorData = (params,requestUrl) => {return fly.post(`${baseUrl}/api/request?rname=i_plc.Page.wechat_api.wechat.getHistoryData&WxHost=${requestUrl}`, qs.stringify(params))};

//获取团队编号

export const getTeamCode = (params,requestUrl) => {return fly.post(`${baseUrl}/api/request?rname=i_plc.Page.ZW_zhihuitong_login.login.create_teamcode`, qs.stringify(params))};


//根据teamcode获取公司信息

export const getCompInfoByCode = (params,requestUrl) => {return fly.post(`${baseUrl}/api/request?rname=i_plc.Page.ZW_zhihuitong_login.login.get_company_info`, qs.stringify(params))};

//根据jobId获取所报的停机原因列表

export const getStopReasonList = (params,requestUrl) => {return fly.post(`${baseUrl}/api/request?rname=i_plc.Page.basicinfo.basicinfo.machine_stop_reasons_get&WxHost=${requestUrl}`, qs.stringify(params))};


//称重报工新接口

export const getScanWeight = (params,requestUrl) => {return fly.post(`${baseUrl}/api/request?rname=i_plc.Page.mobile.manufacturing.scales.get_weight_by_bucketcode&WxHost=${requestUrl}`, qs.stringify(params))};


