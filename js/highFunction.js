//高阶函数 函数可以接收另一个函数作为参数
function add(x, y, f) {
    return f(x) + f(y);
}

var sum = add(-5, 6, Math.abs);
console.log(sum);

/**map reduce */
//map的方法定义在array中，调用map方法，传入自己的函数，得到新的函数
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function pow(x) {
    return x * x;
}
var results = arr.map(pow);
console.log(results);

//reduce 累加， 传入两个参数 求出数组的合
var sumArr = arr.reduce(function (x, y) {
    return x + y;
})
console.log(sumArr);

var arrName = ['adam', 'LISA', 'barT'];
var names = arrName.map(function (x) {
    return x.substring(0, 1).toUpperCase() + x.substring(1).toLowerCase();
})
console.log(names);
