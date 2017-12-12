/**
 * Created by desen on 2017/12/12.
 */
const https = require('https');
let saleNumber = 30; // 20171212 看到的最新销售量

function getHouseInfo(callback) {
	//喝汤小区的接口
	https.get('https://ta.2boss.cn/estimate/customer/house/3305/realSales?cityId=626&page=1&size=60&sortType=2', (res) => {
		let pageData = '';
		let newSaleNumber = 0;
		res.setEncoding('utf8');
		res.on('data', (chunk) => {
			pageData += chunk;
		});
		res.on('end', () => {
			pageData = JSON.parse(pageData);
			newSaleNumber = pageData && pageData.body && pageData.body.totalCount;
			if (newSaleNumber !== saleNumber) {
				callback(newSaleNumber - saleNumber);
				saleNumber = newSaleNumber;
			}
		});
	}).on('error', (e) => {
		console.error(e);
	});
}

module.exports = getHouseInfo;