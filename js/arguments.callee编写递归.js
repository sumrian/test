// function factorial(num)  {
//     if (num <= 1) {
//         return 1
//     } else {
//         return num * arguments.callee(num - 1)
//     }
// }

const factorial = (function f(num) {
    if (num <= 1) {
        return 1;
    } else {
        return num * f(num - 1);
    }
}); //因为 return 还有一个乘的操作，所以没有尾递归优化
