/***
 * 接口
 * 作用：一种规范，定义了行为和动作的范围，起到限制规范作用，但不关心内部数据和具体实现方法
 */

// 1.属性接口

// 单个方法参数约束
function printLabel(labelInfo: { label: string }): void {
  console.log(labelInfo.label);
}

printLabel({
  label: '123123'
});

// 批量方法参数约束，对象约束，属性接口
interface FullName {
  firstName: string; // 以分号结束和对象不一样
  lastName: string;
}
function printName(name: FullName): void {
  console.log(name.firstName + name.lastName);
}

const names = { // 把传入参数放在外面定义可以实现传入额外数据，但不能少定义数据，但函数取值还是会报错
  firstName: 'zhang',
  lastName: 'san',
  age: 20
}
printName(names);

// 可选属性

interface FullName2 {
  firstName: string; // 以分号结束和对象不一样
  lastName?: string; // 加问号表示可不传
}

function printName2(name: FullName2): void {
  console.log(name.firstName + name.lastName);
}
// 参数顺序可以不一样
printName2({
  firstName: 'zhang'
});

// 加密方法实例

interface encrypt {
  (key: string, value: string): string;
}

const md5: encrypt = function (key: string, value: string): string {
  // 模拟操作
  return key + value;
}

//函数类型接口，可批量约束

md5('name', 'zhangsan');

const sha1: encrypt = (key: string, value: string): string => key + value;


// 可索引接口：
// 数组的约束 定义数组内容为数字
const arr1: number[] = [1, 2, 3]

const arra: Array<number> = [1, 2, 3]

interface UserArr {
  [index: number]: string
}
const arrb: UserArr = ['12313']

// 对象约束
interface UserObj {
  [index: number]: string
}
const obj1: UserObj = { 1: 'zhangsan' }

// 类的约束：和抽象类有些相似
interface Animal {
  name: string;
  eat(str: string): void
}

class Dogs implements Animal { // 非继承，实现方法
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  eat() {
    console.log(this.name + 'eat');
  }
}

const d = new Dog('black');

d.eat();

// 接口的扩展(继承)
interface Animals {
  eat(): void;
}

interface Persons extends Animals {
  work(): void;
}

// 扩展

class Programmer {
  public name:string;
  constructor(name:string) {
    this.name = name;
  }
  coding(code:string) {
    console.log(this.name + code);
  }
}


class Weber extends Programmer implements Persons { // 继承实现可同时进行[extends 才用super]
  constructor(name: string) {
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

