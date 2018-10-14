'use strict'
var xiaoming = {
    name: '小明',
    age: 18,
    height: 178,
    'middle-school': 'No.1 middle school'
};
console.log(xiaoming.age);
//对象中包含特殊字符的key需要用这种模式获取
console.log(xiaoming["middle-school"])

//js中对象是动态的，所以也可以增加或者删除
xiaoming.house = 'xxx';
//删除对象属性
delete xiaoming.height;
console.log(xiaoming);
//判断属性是否在对象中 继承的也算
console.log('name' in xiaoming);
//判断属性是否是自身拥有
console.log(xiaoming.hasOwnProperty('name'));

//for in循环遍历对象
for(var key in xiaoming){
    if(!xiaoming.hasOwnProperty(key)) console.log(key);
}

var arr = ['Bart', 'Lisa', 'Adam'];
for(var i in arr){
    console.log('hello ' + arr[i]);
}

