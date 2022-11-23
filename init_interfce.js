/***
 * 接口
 * 作用：一种规范，定义了行为和动作的范围，起到限制规范作用，但不关心内部数据和具体实现方法
 */
// 1.属性接口
// 单个方法参数约束
function printLabel(labelInfo) {
    console.log(labelInfo.label);
}
printLabel({
    label: '123123'
});
function printName(name) {
    console.log(name.firstName + name.lastName);
}
const names = {
    firstName: 'zhang',
    lastName: 'san',
    age: 20
};
printName(names);
function printName2(name) {
    console.log(name.firstName + name.lastName);
}
// 参数顺序可以不一样
printName2({
    firstName: 'zhang'
});
const md5 = function (key, value) {
    // 模拟操作
    return key + value;
};
//函数类型接口，可批量约束
md5('name', 'zhangsan');
const sha1 = (key, value) => key + value;
// 可索引接口：
// 数组的约束 定义数组内容为数字
const arr1 = [1, 2, 3];
const arra = [1, 2, 3];
const arrb = ['12313'];
const obj1 = { 1: 'zhangsan' };
class Dogs {
    constructor(name) {
        this.name = name;
    }
    eat() {
        console.log(this.name + 'eat');
    }
}
const d = new Dog('black');
d.eat();
// 扩展
class Programmer {
    constructor(name) {
        this.name = name;
    }
    coding(code) {
        console.log(this.name + code);
    }
}
class Weber extends Programmer {
    constructor(name) {
        super(name);
    }
    eat() {
        console.log(this.name + 'eat');
    }
    work() {
        console.log(this.name + 'coding');
    }
}
const lei = new Weber('xiaolei');
lei.work();
lei.coding('ts');
