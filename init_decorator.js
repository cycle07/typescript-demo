/**
 * 装饰器：一种特殊类型的声明，能够被附加到类声明，方法，属性或参数上
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
// 类装饰器
// 普通装饰器
function logClass(params) {
    // 接受一个对象：类本身
    console.log(params);
    params.prototype.apiUrl = 'xxxx';
}
let HttpClient = class HttpClient {
    getData() {
    }
};
HttpClient = __decorate([
    logClass // 不修改类的前提下给类扩展方法
], HttpClient);
const http = new HttpClient();
console.log(http.apiUrl);
// 装饰器工厂
function logClasses(params) {
    return function (target) {
        // 接受两个对象，传入的参数，类本身
        console.log(target);
        console.log(params);
        target.prototype.apiUrl = params;
    };
}
let HttpsClient = class HttpsClient {
    constructor() {
    }
    getData() {
    }
};
HttpsClient = __decorate([
    logClasses('hello')
], HttpsClient);
const https = new HttpsClient();
console.log(https.apiUrl);
// 类装饰器重载构造函数
function logClass2(target) {
    // 接受一个对象：类本身
    return class extends target {
        constructor() {
            super(...arguments);
            this.apiUrl = "i'm new api url"; // 起一个新类继承老类，啥都能改
        }
        getData() {
            console.log(this.apiUrl);
        }
    };
}
let WsClient = class WsClient {
    constructor() {
        this.apiUrl = "i'm api url";
    }
    getData() {
        console.log(this.apiUrl);
    }
};
WsClient = __decorate([
    logClass2
], WsClient);
const ht = new WsClient();
ht.getData(); // "i'm new api url"
// 属性装饰器
// 类
function logClass3(params) {
    return function (target) {
        console.log(params);
    };
}
// 属性
function logProperty(params) {
    // 三个参数：传入值，类的prototype，属性名
    return function (target, attr) {
        console.log(attr); // url
        target.attr = params;
    };
}
// 属性装饰器的targe是class的prototype
// 属性装饰器的attr是属性本身【的key？】
let WsClient2 = class WsClient2 {
    constructor() {
    }
    getData() {
        console.log(this.url);
    }
};
__decorate([
    logProperty('http://itying.com')
], WsClient2.prototype, "url", void 0);
WsClient2 = __decorate([
    logClass3('http://www.baidu.com')
], WsClient2);
// 方法装饰器
function logClass4(params) {
    // 四个参数：传入参数，累的原型，方法名称，方法描述
    return function (target, methodName, desc) {
        console.log(params);
        target.apiUrl = 'xxxx'; // 给类加新属性
        target.run = function () {
            console.log('run');
        };
        const oMethod = desc.value;
        desc.value = function (...args) {
            args = args.map((value) => {
                return String(value); // 传入任意改为string
            });
            // 不加下面的话方法就直接被替换了
            oMethod.apply(this, args); // 用args继续执行原来的函数，且全部转为string
        };
    };
}
class WsClient3 {
    constructor() {
    }
    getData(...args) {
        console.log(args);
    }
}
__decorate([
    logClass4('http')
], WsClient3.prototype, "getData", null);
const ws = new WsClient3();
ws.getData(123123, '123123');
// 方法参数装饰器[用的不多]
function logClass5(params) {
    // 四个参数：传入参数，累的原型，方法的名称，参数的index
    return function (target, MothedName, paramsIndex) {
        target.apiUrl = params;
    };
}
class WsClient4 {
    constructor() {
    }
    getData(uuid) {
        console.log(uuid);
    }
}
__decorate([
    __param(0, logClass5('xxxx'))
], WsClient4.prototype, "getData", null);
// 装饰器的执行顺序
// 属性装饰器 > 方法装饰器 > 方法参数装饰器【后一个】 > 方法参数装饰器【前一个】 > 类装饰器【下一个】 > 类装饰器【上一个】
