// ts类
class Person {
    constructor(n) {
        this.name = n;
    }
    run() {
        alert(this.name);
    }
    getName() { return this.name; }
}
const p = new Person('aaa');
console.log(p.getName());
// ts类继承
class Web extends Person {
    constructor(name) {
        super(name); // super用初始化父类的构造函数
    }
    show() {
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
    constructor(name) {
        this.name = name;
    }
    run() {
        return this.name;
    }
    static print() {
        return this.sex;
    }
}
// 多态：父类定义一个方法不去实现，让子类去实现，每一个子类有不同的表现
// 多态属于继承
class Animal {
    constructor(name) {
        this.name = name;
    }
    eat() {
        console.log('eat moth');
    }
}
class Dog extends Animal {
    constructor(name) {
        super(name);
    }
    eat() {
        return this.name + 'eat bone';
    }
}
class Cat extends Animal {
    constructor(name) {
        super(name);
    }
    eat() {
        return this.name + 'eat fish';
    }
}
// typescript中的抽象类：提供其他类继承的基类，不能被直接实例化
// abstract [只能放在抽象类里面]
class Animal2 {
    constructor(name) {
        this.name = name;
    }
}
// const a = new Animal2(); // 报错
class Wolf extends Animal2 {
    constructor(name) {
        super(name);
    }
    eat() {
        return this.name + 'eat bone';
    }
}
