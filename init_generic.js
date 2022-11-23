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
function getData(value) {
    return value;
}
getData(123);
getData('123');
// 泛型类
class MinClass {
    constructor() {
        this.list = [];
        this.max = () => this.list.reduce((max, num) => max > num ? max : num);
    }
    add(num) {
        this.list.push(num);
    }
    min() {
        let minNum = this.list[0];
        for (let i = 0; i < this.list.length; i++) {
            if (minNum > this.list[i])
                minNum = this.list[i];
        }
        return minNum;
    }
}
// 传入数字返回数字，传入字符串返回字符串
const m1 = new MinClass(); // 实例化类并指定了类型为number
const m2 = new MinClass();
const getData2 = (value1) => value1;
getData2('name');
getData2(123);
const getData3 = (value) => value;
const myGetData = getData3;
myGetData('123123');
