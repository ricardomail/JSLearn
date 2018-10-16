/**filter 将Array的某些元素过滤掉，返回剩下的元素 */
var arr = [1, 2, 4, 5, 6, 9, 10, 15];
var r = arr.filter(function (x){
    return x % 2 !== 0;
})

/**sort 排序 */
var arr = [10, 20, 1, 2];
arr.sort(function (x, y){
    if(x < y){
        return -1;
    }else if(x > y){
        return 1;
    }else{
        return 0;
    }
});

console.log(arr);