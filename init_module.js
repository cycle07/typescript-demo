"use strict";
/***
 * 模块
 * 内部模块：命名空间，外部模块：模块
 */
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("./module/db");
db_1.getData();
var A;
(function (A) {
    class Dog {
        eat() {
            console.log(123);
        }
    }
    A.Dog = Dog;
})(A || (A = {}));
const d1 = new A.Dog();
var B;
(function (B) {
    class Dog {
        bark() {
            console.log(123);
        }
    }
    B.Dog = Dog;
})(B || (B = {}));
const d2 = new B.Dog();
const c1 = new db_1.C.Cat();
