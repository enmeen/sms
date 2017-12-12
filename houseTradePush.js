/**
 * Created by desen on 2017/12/12.
 */
console.log('开始运行。。。。');


let smsSdk = require('./lib/smsSdk');
let getHouseInfo = require('./lib/getHouseInfo');

// schedule 部分
let schedule = require('node-schedule');

schedule.scheduleJob('0 0 6 * * *', function () {
	getHouseInfo((number) => {
		let option = {
			PhoneNumbers: '',
			TemplateCode: 'SMS_116567016',
			TemplateParam: {
				code: 'HTYS新成交' + number
			}
		};
		smsSdk(option);
	})
});


