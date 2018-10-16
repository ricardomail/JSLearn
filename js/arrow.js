/**箭头函数 */
var fn = x => x * x; //如果只有一个表达式，可以省略{}and return
var result = fn(1);
console.log(result);

var check = y => {
    if (y > 0) {
        return y + y;
    } else {
        return y;
    }
}
console.log(check(1));
//用箭头函数可以省略 var that = this