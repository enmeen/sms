console.log('车牌竞价服务开启。。。')

let smsSdk = require('./lib/smsSdk');
let schedule = require('node-schedule');
let getLicensePlatePrice = require('./lib/getLicensePlatePrice');

schedule.scheduleJob('0 5 15 * * *', function () {
    console.log('开始拉取车牌价格数据')
    getLicensePlatePrice((err,res)=>{
        let option = {
            PhoneNumbers: '',
            TemplateCode: 'SMS_137686316',
            TemplateParam: {
                currentMonthPrice: res.currentMonthPrice,
                ringRatio: res.ringRatio
            }
        };
        smsSdk(option);
    })	
});
