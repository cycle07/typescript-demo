/**
 * 泛型类高阶【强行】
 */

class User { // user表
  username: string | undefined;
  password: string | undefined; // 表示两种都有
}

class Article { // article表
  title: string | undefined;
  desc: string | undefined;
  num: number | undefined;
}

class MysqlDb<T> {
  add(user: T): boolean { // 返回这个数据是否成功传入数据库
    return true;
  }
}

const u = new User();
u.username='zhangsan';
u.password='123456';

const a = new Article();
a.title = 'sea';
a.desc = 'big sea';
a.num = 3

const Db = new MysqlDb<User>(); // 泛型类，可对User进行数据合法性校验
Db.add(u);
// Db.add(a); // 报错

// 实践：
// 定一个操作数据库的库，支持Mysql Mssql MongoDb，都有add update delete get方法
// 1.接口：一种规范的定义
// 2.泛型：解决接口 类 方法的复用性

interface DBI<T> {
  add(info:T):boolean;
  update(info:T, id:number):boolean;
  delete(id:number):boolean;
  get(id:number):any[];
}

class Mysql<T> implements DBI<T> { // 要实现泛型接口，该类也是泛型类
  add(info: T): boolean {
    throw new Error("Method not implemented.");
  }
  update(info: T, id: number): boolean {
    throw new Error("Method not implemented.");
  }
  delete(id: number): boolean {
    throw new Error("Method not implemented.");
  }
  get(id: number): any[] {
    throw new Error("Method not implemented.");
  }
}

class Mssql<T> implements DBI<T> { // 要实现泛型接口，该类也是泛型类
  add(info: T): boolean {
    throw new Error("Method not implemented.");
  }
  update(info: T, id: number): boolean {
    throw new Error("Method not implemented.");
  }
  delete(id: number): boolean {
    throw new Error("Method not implemented.");
  }
  get(id: number): any[] {
    throw new Error("Method not implemented.");
  }
}

class MongoDb<T> implements DBI<T> { // 要实现泛型接口，该类也是泛型类
  add(info: T): boolean {
    throw new Error("Method not implemented.");
  }
  update(info: T, id: number): boolean {
    throw new Error("Method not implemented.");
  }
  delete(id: number): boolean {
    throw new Error("Method not implemented.");
  }
  get(id: number): any[] {
    throw new Error("Method not implemented.");
  }
}

// 操作用户表
class User2 {
  username: string | undefined;
  password: string | undefined;
}

const u2 = new User();

u2.username = 'zhangsan';
u2.password = '123123';

const mysql = new Mysql<User2>();
mysql.add(u);
mysql.update(u, 123);