/**generator 生成器 
 * 一个 generator看上去像函数，但可以返回多次
 */

 function* foo(x){
     yield x + 1;
     yield x + 2;
     return x + 3;
 }

 var nums = foo(1);
//  console.log(nums.next());
 for (const x of nums) {
     console.log(x);
 }