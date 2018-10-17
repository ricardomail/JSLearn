/**Date对象用来表示日期和时间 */

//获取系统当前时间
var now = new Date();
console.log(now);
console.log(now.getFullYear());
console.log(now.getMonth()); //5表示6月份
console.log(now.getDate());
console.log(now.getDay()); // 表示星期
console.log(now.getTime());


var d = new Date(2018, 9, 17, 01, 05, 10, 123);
console.log(d);


