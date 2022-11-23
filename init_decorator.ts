/**
 * 装饰器：一种特殊类型的声明，能够被附加到类声明，方法，属性或参数上
 */

// 类装饰器

// 普通装饰器
function logClass(params: any) {
  // 接受一个对象：类本身
  console.log(params);
  params.prototype.apiUrl = 'xxxx';
}

@logClass // 不修改类的前提下给类扩展方法
class HttpClient {
  getData() {
  }
}
const http: any = new HttpClient();
console.log(http.apiUrl);

// 装饰器工厂
function logClasses(params: string) {
  return function (target: any) {
    // 接受两个对象，传入的参数，类本身
    console.log(target);
    console.log(params);
    target.prototype.apiUrl = params;
  }
}

@logClasses('hello')
class HttpsClient {
  constructor() {
  }
  getData() {
  }
}

const https: any = new HttpsClient();
console.log(https.apiUrl);

// 类装饰器重载构造函数
function logClass2(target: any) {
  // 接受一个对象：类本身
  return class extends target {
    apiUrl: any = "i'm new api url"; // 起一个新类继承老类，啥都能改
    getData() {
      console.log(this.apiUrl);
    }
  }
}

@logClass2
class WsClient {
  public apiUrl: string | undefined;
  constructor() {
    this.apiUrl = "i'm api url"
  }
  getData() {
    console.log(this.apiUrl);
  }
}
const ht = new WsClient();
ht.getData(); // "i'm new api url"

// 属性装饰器
// 类
function logClass3(params: string) {
  return function (target: any) {
    console.log(params);
  }
}
// 属性
function logProperty(params: any) {
  // 三个参数：传入值，类的prototype，属性名
  return function (target: any, attr: any) {
    console.log(attr); // url
    target.attr = params;
  }
}

// 属性装饰器的targe是class的prototype
// 属性装饰器的attr是属性本身【的key？】
@logClass3('http://www.baidu.com')
class WsClient2 {
  @logProperty('http://itying.com')
  public url: any | undefined;
  constructor() {
  }
  getData() {
    console.log(this.url);
  }
}

// 方法装饰器
function logClass4(params: any) {
  // 四个参数：传入参数，累的原型，方法名称，方法描述
  return function (target: any, methodName: any, desc: any) {
    console.log(params);
    target.apiUrl = 'xxxx'; // 给类加新属性
    target.run = function () { // 给类加新方法
      console.log('run');
    }
    const oMethod = desc.value;
    desc.value = function (...args: any[]) {
      args = args.map((value) => {
        return String(value); // 传入任意改为string
      });
      // 不加下面的话方法就直接被替换了
      oMethod.apply(this, args); // 用args继续执行原来的函数，且全部转为string
    }
  }
}
class WsClient3 {
  public url: any | undefined;
  constructor() {
  }
  @logClass4('http')
  getData(...args: any[]) { // 原来返回的值不管是不是string
    console.log(args);
  }
}

const ws = new WsClient3();
ws.getData(123123, '123123');


// 方法参数装饰器[用的不多]

function logClass5(params: any) {
  // 四个参数：传入参数，累的原型，方法的名称，参数的index
  return function (target: any, MothedName: any, paramsIndex: any) {
    target.apiUrl = params;
  }
}

class WsClient4 {
  public url: any | undefined;
  constructor() {
  }
  getData(@logClass5('xxxx') uuid: any) {
    console.log(uuid);
  }
}

// 装饰器的执行顺序
// 属性装饰器 > 方法装饰器 > 方法参数装饰器【后一个】 > 方法参数装饰器【前一个】 > 类装饰器【下一个】 > 类装饰器【上一个】