function abs(x){

}

var abs2 = function(x){
    return x;
};
// console.log(abs2(2));

// arguments 只在函数内部使用，并且永远指向当前函数的调用者传入的所有参数 类似Array但不是

function foo(x){
    console.log('x = ' + x);
    for(var i = 0; i < arguments.length; i++){
        console.log(arguments[i]);
    }
}

// foo(1, 2, 3, 4);
//rest值除了定义的以外额外的参数
function foo_two(a, b, ...rest){
    console.log(a);
    console.log(b);
    console.log(rest);
}

foo_two(1, 2, 3, 4, 5);