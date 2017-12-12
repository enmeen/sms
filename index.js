console.log('开始运行。。。。');
let smsSdk = require('./lib/smsSdk');
let schedule = require('node-schedule');

function numberOfDate() {
	let oldDate = +new Date(2015, 5, 22);
	let nowDate = +new Date();
	return parseInt((nowDate - oldDate) / (1000 * 60 * 60 * 24));
}
schedule.scheduleJob('0 50 18 * * *', function () {
	let option = {
		PhoneNumbers: '',
		TemplateCode: 'SMS_116562666',
		TemplateParam: {
			code: numberOfDate()
		}
	};
	smsSdk(option);
});


