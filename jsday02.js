var str = 'I\'m "OK"!';
// console.log(str);
var arr = [1, 2, 3];
// console.log(arr.length)
//直接改变数组的索引，或改变该数组的大小

//数组也可以通过以下方式搜索指定元素位置
arr.indexOf(1);

//slice对应String的substring方法,不传参数相当于复制数组
arr.slice(0, 1);  //返回一个数组，从0开始到1结束

var arr2 = ['A', 'B', 'C', 'D', 'E'];
//push and pop
//push向数组末尾添加若干元素，返回元素新的长度
//pop则把数组最后一个元素删除
arr2.push('F', 'G');
arr2.pop();

/**
 * unshift and shift
 * unshift向数组头部添加若干元素
 * shift将数组的第一个元素删除
 */
arr2.unshift('hello');
arr2.shift();

/**
 * sort 对数组进行排序，直接更改数组中元素的位置
 */
arr2.sort();

/**
 * reverse 反转数组
 */
arr2.reverse();
console.log(arr2);

/**
 * splice 修改数组的万能方法
 */
var arr3 = ['Microsoft', 'Apple', 'Yahoo', 'AOL'];
//从索引2开始删除3个元素，然后再添加两个
arr3.splice(2, 3, 'Google', 'FaceBook');
//只删除，不添加
arr3.splice(2, 2);
//只添加，不删除
arr3.splice(2, 0, 'Oracle');

/**concat 拼接字符串 */
var arr4 = ['A', 'B', 'C'];
var added = arr4.concat([1, 2, 3]);

/**join 将当前数组用指定的字符串链接起来，然后返回链接后的字符串 */
console.log(arr4.join('-'));
console.log(arr4);

/**多维数组 */
var arr5 = [[1, 2, 3], [400, 500, 600], '-'];
console.log(arr5[1][1]);


/**test */

//不知道为什么没看见