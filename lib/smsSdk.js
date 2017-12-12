/**
 * Created by desen on 2017/12/12.
 */
const SMSClient = require('@alicloud/sms-sdk');
// ACCESS_KEY_ID/ACCESS_KEY_SECRET 根据实际申请的账号信息进行替换
const accessKeyId = '';
const secretAccessKey = '';
//初始化sms_client
let smsClient = new SMSClient({accessKeyId, secretAccessKey});
//发送短信
function sendSMS(option) {

	const PhoneNumbers = option.PhoneNumbers;
	const TemplateCode = option.TemplateCode || 'SMS_116592591';
	const TemplateParam = JSON.stringify(option.TemplateParam || '');

	smsClient.sendSMS({
		PhoneNumbers: PhoneNumbers,
		SignName: '大气说',
		TemplateCode: TemplateCode,
		TemplateParam:TemplateParam
	}).then(function (res) {
		let {Code} = res;
		if (Code === 'OK') {
			console.log('发送成功');
		}
	}, function (err) {
		console.log(err)
	});
}

module.exports = sendSMS;