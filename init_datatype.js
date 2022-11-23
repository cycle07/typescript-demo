let flag = true;
flag = false;
let num = 123;
num = 0;
// console.log(num > '1');
let str = "123";
str = "dfsdf";
// let arr = ['1', '2'] // ES5
let arr = [11, 22, 33]; // 内容都为字符串的数组
let arr2 = [11, 22, 33];
let arr3 = [1, '12', false];
// 元组 tuple
let tup = [123, "234"]; // 元组和python的不一样，是一个数组每一个位置定义类型，但可以修改
// 枚举 enum
// 杀死魔法数字
// enum 枚举名 {
// 标识符[=整型常数]
// }
var Flag;
(function (Flag) {
    Flag[Flag["init"] = 0] = "init";
    Flag[Flag["about"] = 1] = "about";
    Flag[Flag["success"] = 1] = "success";
    Flag[Flag["error"] = 0] = "error";
})(Flag || (Flag = {}));
let s = Flag.success; // 0
let s1 = Flag.about; // 1 [没有负值就是下标，或者前一个下标+1]
// any 用于获取dom节点
let yoo = 123;
yoo = '123';
// let dom:any = document.getElementById('box');
// dom.style.color = 'tomato';
// null&undefined [never类型的子类型]
let n; // console.log(n) // 报错
let n2; // console.log(n2) // 不报错
let n3; // 是否赋值都不影响
let n4; // 不报错
// void 无任何类型，定义方法没有返回值，反之都一定要返回值
function go() {
    console.log('go');
}
// never 其他类型，代表从不会出现的值，never类型只能被never类型赋值，一般用any替代
let un;
un = null;
let abc;
// abe=123; // 报错
abc = (() => {
    throw new Error('错误');
})();
