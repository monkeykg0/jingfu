  const BASEURL='http://192.168.0.133:8099';//dev
// const BASEURL='http://192.168.0.133:9001';//test
// const BASEURL='https://www.jingfuapp.com/preapp'//pre
// const BASEURL='https://www.jingfuapp.com/proapp'//pro
// var uuid=location.href.split("uuid=")[1].slice(0,36);
const uuid='1f5fe653-5fa6-4254-8751-b867521c94e2';
const URL={
    taskList:BASEURL+'/taskUser/list'+"?uuid="+uuid,
    taskinfo:BASEURL+'/projectTask/projectTaskInfo'+"?uuid="+uuid,
    tasksharedetail:BASEURL+'/taskSource/taskSourceInfo'+"?uuid="+uuid,
    taskquestiondetail:BASEURL+'/taskSource/taskSourceInfo'+"?uuid="+uuid,
    taskredpackage:BASEURL+'/projectTask/receiveTaskReward'+"?uuid="+uuid,
    questioncallback:BASEURL+'/projectTask/callback'+"?uuid="+uuid,
    simpleProjectInfo:BASEURL+'/projectTask/simpleProjectInfo'+"?uuid="+uuid,//获得项目的名称图像
    rewarddetailed:BASEURL+'/projectTask/reward/detailed'+"?uuid="+uuid,//领取明细
    checkUserTask:BASEURL+'/taskSource/checkUserTask'+"?uuid="+uuid,//判断是否可以做任务
}