/**
 * 泛型
 */

// 泛型：解决类，接口 方法的复用性、以及对不特定数据类型的支持

// 泛型定义与泛型函数
// 只能返回string
// function getData(value:string):string {
//   return value;
// }

// 传入string返回string，传入number返回number[参数前写泛型，参数后写返回类型]
function getData<T>(value: T): T {
  return value;
}

getData<number>(123);
getData<string>('123');

// 泛型类
class MinClass<T> {
  public list: T[] = [];
  add(num: T): void {
    this.list.push(num);
  }
  min(): T {
    let minNum = this.list[0];
    for (let i = 0; i < this.list.length; i++) {
      if (minNum > this.list[i]) minNum = this.list[i];
    }
    return minNum;
  }
  max = (): T => this.list.reduce((max, num) => max > num ? max : num);
}

// 传入数字返回数字，传入字符串返回字符串
const m1 = new MinClass<number>(); // 实例化类并指定了类型为number
const m2 = new MinClass<string>();

// 泛型接口

// interface Config { // 函数类型接口
//   (value1: string, value2: string): string;
// }
// const setData: Config = (value1: string, value2: string): string => value1 + value2;
// setData('name', 'zhangsan');

// 写法1
interface Config { // 泛型接口
  <T>(value1: T): T;
}
const getData2: Config = <T>(value1: T): T => value1;
getData2<string>('name');
getData2<number>(123);

// 写法2
interface Config2<T> { // 具体取决于泛型的覆盖范围
  (value: T): T;
}
const getData3 = <T>(value:T):T => value;
const myGetData: Config2<string> = getData3;
myGetData('123123');


