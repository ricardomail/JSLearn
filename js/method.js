//方法 在一个对象中绑定函数，成为这个对象的方法
var person = {
    name: 'xiaoming',
    birth: 1990,
    age: function(){
        var that = this;
        function getAge(){
            var y = new Date().getFullYear();
            return y - that.birth;
        }
        return getAge(); //闭包
        
    }
}

var count = 0;
var oldParseInt = parseInt;

window.parseInt = function(){
    count += 1;
    return oldParseInt.apply(null, arguments);
}