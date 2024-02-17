// ts类

class Person {
  name: string; // 属性 前面省略了public
  constructor(n: string) {
    this.name = n;
  }

  run(): void {
    alert(this.name);
  }
  getName(): string { return this.name; }
}


const p = new Person('aaa');
console.log(p.getName());

// ts类继承

class Web extends Person {
  constructor(name: string) {
    super(name); // super用初始化父类的构造函数
  }
  show(): string {
    return this.name;
  }
}

// 类的修饰符

/***
 * public：公有，在类里面、子类、类外面都可以访问
 * protected：保护类型，在类里面，子类可以访问
 * private：私有，在类里面可以访问
 * 不加修饰符默认算public
 * 强行访问编译不得过
 * */

// 静态属性 静态方法
// Es5
// function Person() {
//   this.aaaa = () => 'ddd'; // 实例方法
// }
// Person.name='111'; //静态属性
// Person.run=()=>'aaa'; // 静态方法

class Person2 {
  public name: string
  static sex: 'men' // 静态属性
  constructor(name) {
    this.name = name;
  }
  run() { // 实例方法
    return this.name;
  }
  static print() { // 静态方法【静态方法无法直接调用类的属性，只能调用静态属性】
    return this.sex;
  }
}

// 多态：父类定义一个方法不去实现，让子类去实现，每一个子类有不同的表现

// 多态属于继承

class Animal {
  name: string
  constructor(name: string) {
    this.name = name;
  }
  eat() {
    console.log('eat moth');
  }
}

class Dog extends Animal {
  constructor(name: string) {
    super(name)
  }
  eat() {
    return this.name + 'eat bone'
  }
}

class Cat extends Animal {
  constructor(name: string) {
    super(name)
  }
  eat() {
    return this.name + 'eat fish'
  }
}

// typescript中的抽象类：提供其他类继承的基类，不能被直接实例化
// abstract [只能放在抽象类里面]

abstract class Animal2 { // 抽象类，抽象类不能被创建实例只有继承抽象类的子类才能创建实例
  name: string
  constructor(name: string) {
    this.name = name;
  }
  abstract eat():any; // 抽象方法，抽象类里面必须有抽象方法，且子类必须声明这个多态方法，其他方法子类可以不定义
}

// const a = new Animal2(); // 报错

class Wolf extends Animal2 {
  constructor(name: string) {
    super(name)
  }
  eat() { // 不写eat就会报错
    return this.name + 'eat bone'
  }
}