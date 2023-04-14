/*
 * @Author: tianhong
 * @Date: 2023-04-13 11:04:29
 * @LastEditTime: 2023-04-13 14:36:12
 * @LastEditors: tianhong
 * @Description: Describe the function of this file
 */
// never 底部类型
// 类型直接的并集会向上取顶部的类型

type A = never | 1 // 1
type B = unknown | 1 // unknown

// unknown 顶部类型
// 类型直接的交集会向下取顶部的类型

type C = never & 1 // never
type D = unknown & 1 // 1

// any既是底部类型也是顶部类型，万物皆可any

type E = any | 1 // any
type F = any & 1 // any

// extends
// 作为泛型约束使用
interface Lengthwise {
  length: number;
}
function loggingIdentity<T extends Lengthwise>(arg: T) {
  console.log(arg.length);
  return arg;
}

// 作为条件类型使用
interface Animal {
  live(): void;
}
interface Dog extends Animal {
  woof(): void;
}
type Example1 = Dog extends Animal ? number : string; // number
type Example2 = RegExp extends Animal ? number : string; // string
type Example9<T> = T extends string ? 'true' : 'false';
type boolStringTrue = Example9<''> // 'true'
type boolStringFalse = Example9<1> // 'false'
type Example10 = Example9<1 | ''> // "true" | "false"