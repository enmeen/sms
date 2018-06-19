# 玩转短信

### 说明
+ 使用阿里云提供的短信服务
+ pm2 常驻线程
+ index.js 爱情长跑短信服务
+ houseTradePush.js 小区新成交短信提醒服务
+ licensePlatePricePush.js 杭州车牌竞价每月价格提醒服务
+ start

### start
+ git clone
+ npm i
+ npm i pm2 -g
+ 阿里云注册短信服务获取sms key
+ pm2 start index.js
+ pm2 start houseTradePush.js
+ pm2 start licensePlatePricePush.js
