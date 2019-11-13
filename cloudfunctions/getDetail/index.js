// 云函数入口文件
const cloud = require('wx-server-sdk');
const rp = require('request-promise');
cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  return rp(`https://api.douban.com/v2/movie/subject/${event.movieid}?apikey=0df993c66c0c636e29ecbb5344252a4a`)
    .then(function (res) {
      console.log(res);//在调用云函数的时候也看看这个值
      return res;
    })
    .catch(function (err) {
      console.error(err);
    });
}