/***
 * 模块
 * 内部模块：命名空间，外部模块：模块
 */

import { getData, C } from './module/db';

getData();

namespace A { // 命名空间
  interface Animal {
    name: string;
    eat(): void;
  }
  export class Dog implements Animal { //在命名空间里暴露出去
    name: string;
    eat() {
      console.log(123);
    }
  }
}

const d1 = new A.Dog();

namespace B {
  interface Animal {
    name: string;
    bark(): void;
  }
  export class Dog implements Animal { //在命名空间里暴露出去
    name: string;
    bark() {
      console.log(123);
    }
  }
}

const d2 = new B.Dog();

const c1 = new C.Cat();