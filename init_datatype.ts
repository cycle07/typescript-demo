let flag: boolean = true;
flag = false;

let num: number = 123;
num = 0;
// console.log(num > '1');

let str: string = "123";
str = "dfsdf";

// let arr = ['1', '2'] // ES5
let arr: number[] = [11, 22, 33]; // 内容都为字符串的数组
let arr2: Array<number> = [11, 22, 33];
let arr3: any[] = [1, '12', false];

// 元组 tuple

let tup: [number, string] = [123, "234"]; // 元组和python的不一样，是一个数组每一个位置定义类型，但可以修改

// 枚举 enum
// 杀死魔法数字
// enum 枚举名 {
// 标识符[=整型常数]
// }

enum Flag {
  init,
  about,
  success = 1,
  error = 0
}
let s: Flag = Flag.success; // 0
let s1: Flag = Flag.about; // 1 [没有负值就是下标，或者前一个下标+1]

// any 用于获取dom节点
let yoo:any = 123;
yoo = '123';
// let dom:any = document.getElementById('box');
// dom.style.color = 'tomato';

// null&undefined [never类型的子类型]

let n:number; // console.log(n) // 报错
let n2:undefined; // console.log(n2) // 不报错
let n3:number | undefined; // 是否赋值都不影响
let n4:number | null; // 不报错

// void 无任何类型，定义方法没有返回值，反之都一定要返回值
function go():void {
    console.log('go')
}

// never 其他类型，代表从不会出现的值，never类型只能被never类型赋值，一般用any替代
let un:undefined;
un=null;

let abc:never;
// abe=123; // 报错
abc = (() => {
    throw new Error('错误');
})()