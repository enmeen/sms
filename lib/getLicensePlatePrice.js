// 从杭州小客车官网查询的价格信息
// 官网：http://www.hzqcjj.com/jjjg.shtml


let fetchUrl = require("fetch").fetchUrl;
let cheerio = require('cheerio');

let oldTime = '';

// 数据获取
function getFerchUrl (cb){
    fetchUrl("http://www.hzqcjj.com/jjjg.shtml", (error, meta, body)=>{
            cb && cb(error, body);
    });
}


function getLicensePlatePrice(cb){
    getFerchUrl((err,body)=>{
        const $ = cheerio.load(body.toString());
        let html = $('.cytab tbody tr').not('.title');
        let currentTime = html.eq(0).children().eq(0).text();
        if(currentTime === oldTime){
            return false;
        }
        oldTime = currentTime;
        let currentMonthPrice = html.eq(0).children().eq(1).text();
        let lastMonthPrice = html.eq(1).children().eq(1).text()
        let ringRatio = ((currentMonthPrice - lastMonthPrice)/lastMonthPrice * 100).toFixed(2) + '%';
        cb && cb(err,{
            currentMonthPrice,
            ringRatio
        })
    })
}


module.exports = getLicensePlatePrice;

