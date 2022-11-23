// es5
// 函数声明
// function run() {
//     return 'run';
// }
// 匿名函数
// const run2 = function() {
//     return 'run2';
// }
// ts
// 函数声明
function run(): string {
  return "run";
}
// 匿名函数
const run2 = function(): string {
  return "run2";
};
// 定义方法传参
// function getInfo(name:string, age:number):string {
//     return `${name}====${age}`;
// }
// alert(getInfo('xiaoming', 12));

function getInfo(name: string = "默认参数", age?: number): string {
  // ?表示可选参数
  return `${name}====${age}`;
}
alert(getInfo("xiaoming"));
//
function getMain(a: string, ...res: string[]): string {
  let out = a;
  for (let i of res) {
    out += i;
  }
  return out;
}

//函数重载
// es56中同名方法会被重新覆盖
function cssd(margin: string): string;
function cssd(padding: number): string;
function cssd(all: any): any {
  if (typeof all === "string") {
    return "margin" + all;
  } else {
    return "padding" + all;
  }
}

cssd("10px");
cssd(0.001); // 根据传入参数对应输出，只能在string和number范围里传值
// cssd(false); // 错误

// 箭头函数[同ES6]
setTimeout(() => {
  alert("12313");
}, 1000);

const fileArrC = (val: string, fileArr: Array<any>, index: number):boolean => {
  return true;
};
