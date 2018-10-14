//初始化map需要一个二维数组,或者一个空的map
var m = new Map([['bob', 10],['haven', 9]]);
console.log(m.get('bob'));

m.set('lothar', 100);
console.log(m);
//判断是否存在
console.log(m.has('lothar'));
m.delete('lothar');
console.log(m.has('lothar'));

//Set初始化需要一个一维数组或者一个空的 set中的key不可重复
var s1 = new Set();
var s2 = new Set([1, 2, 3, 3]);
console.log(s2);