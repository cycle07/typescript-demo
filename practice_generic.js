/**
 * 泛型类高阶【强行】
 */
class User {
}
class Article {
}
class MysqlDb {
    add(user) {
        return true;
    }
}
const u = new User();
u.username = 'zhangsan';
u.password = '123456';
const a = new Article();
a.title = 'sea';
a.desc = 'big sea';
a.num = 3;
const Db = new MysqlDb(); // 泛型类，可对User进行数据合法性校验
Db.add(u);
class Mysql {
    add(info) {
        throw new Error("Method not implemented.");
    }
    update(info, id) {
        throw new Error("Method not implemented.");
    }
    delete(id) {
        throw new Error("Method not implemented.");
    }
    get(id) {
        throw new Error("Method not implemented.");
    }
}
class Mssql {
    add(info) {
        throw new Error("Method not implemented.");
    }
    update(info, id) {
        throw new Error("Method not implemented.");
    }
    delete(id) {
        throw new Error("Method not implemented.");
    }
    get(id) {
        throw new Error("Method not implemented.");
    }
}
class MongoDb {
    add(info) {
        throw new Error("Method not implemented.");
    }
    update(info, id) {
        throw new Error("Method not implemented.");
    }
    delete(id) {
        throw new Error("Method not implemented.");
    }
    get(id) {
        throw new Error("Method not implemented.");
    }
}
// 操作用户表
class User2 {
}
const u2 = new User();
u2.username = 'zhangsan';
u2.password = '123123';
const mysql = new Mysql();
mysql.add(u);
mysql.update(u, 123);
