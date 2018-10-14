//js中函数可以嵌套，内部函数可以访问外部函数定义的变量
'use strict';
function foo(){
    var x = 1;
    function bar(){
        var y = x + 1;
    }
    //var z = y + x;  错误，不能访问y
}

// foo();

//变量提升
/** 全局变量 不在任何函数内定义的变量就具有全局作用域
 * js 默认有一个全局对象window，全局作用域的变量实际上
 * 被绑定到window的一个属性
 * */

 var course = 'Learn js';
 console.log(course);
//  console.log(window.course);

 //解决命名冲突的一个方法就是把所有的变量和函数全部绑定到一个全局变量中
 var MYAPP = {};

 MYAPP.name = 'myapp';
 MYAPP.version = '1.0';
 MYAPP.foo = function(x){
     return 'foo';
 }

 //局部作用域
 /**
  * js中 for循环等语句块无法定义具有局部定义作用域的变量
  * 为了解决块级作用域 ES6引入了新的关键字let，用let替代var
  * 可以神明一个块级作用域变量
  */

  function foo2(){
      var sum = 0;
      for (let i = 0; i < 100; i++){
          sum += i;
      }
  }

  //const 定义常量， 具有块级作用域
  /**解构赋值 
   * ES6中可以使用解构赋值，直接对多个变量同时赋值
   * 注意层次要保持一致
  */

  var array = ['hello', 'JavaScript', 'ES6'];
  var [x, y, z] = array;
  console.log(x);

  //解构时还可以忽略某些元素
  let [, , q] = array;
  console.log(q);

  //从一个对象中取出若干属性，也可以使用解构赋值
  var person = {
      name: 'xiaoming',
      age: 20,
      gender: 'male'
  }

  var {name, age, gender} = person;
  person.name = 'hello';
  console.log(person);

  //解构也可以使用默认值 避免返回underfined

  function buildDate({year, month, day, hour=0, minute=0, second=0}) {
    return new Date(year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second);
}