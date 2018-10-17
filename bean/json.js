var xiaoming = {
    name: '小明',
    age: 14,
    gender: true,
    height: 1.65,
    grade: null,
    'middle-school': '\"W3C\" Middle School',
    skills: ['JavaScript', 'Java', 'Python', 'Lisp']
};

var s = JSON.stringify(xiaoming);
// console.log(s);
var s2 = JSON.stringify(xiaoming, null, '  ');
// console.log(s2);
var s3 = JSON.stringify(xiaoming, ['name', 'age'], '  ');  //第二个参数指定查询哪个字端
// console.log(s3);

function convert(key, value){
    if(typeof value === 'string'){
        return value.toUpperCase();
    }
    return value;
}

var s4 = JSON.stringify(xiaoming, convert, '  ');  //也可以传入函数，对json做一些操作


console.log(s4);

// 反序列化  JSON.parse()可以直接将json转化为对象
var bean = JSON.parse('{"name":"小明", "age":14}');
//还可以接收一个函数 对json进行处理
var obj = JSON.parse('{"name":"小明", "age":14}', (key, value) => {
    if (key === 'name'){
        return value + '同学';
    }
    return value;
})
console.log(obj);