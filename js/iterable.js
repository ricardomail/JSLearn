//iterable用于 for ...of遍历  Map and Set都属于这个类型
var a = ['A', 'B', 'C'];
var s = new Set(['A', 'B', 'C']);
var m = new Map([[1, 'x'], [2, 'y'], [3, 'z']]);

// for (var x of a) { // 遍历Array
//     console.log(x);
// }
// for (var x of s) { // 遍历Set
//     console.log(x);
// }
// for (var x of m) { // 遍历Map
//     console.log(x[0] + '=' + x[1]);
// }

s.forEach(function(element, index, array){
    console.log(element + ', index = ' + index);  //set没有索引，所以第一个和第二个参数都是元素本身
})
m.forEach(function (value, key, map) {
    console.log(key + " " + value);
});