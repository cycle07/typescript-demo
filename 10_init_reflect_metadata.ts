// import "reflect-metadata"

// 元数据键
const PARAM_TYPES_METADATA = 'design:paramtypes';

function GetSubParam(target: Object, propertyKey: string, parameterIndex: number) {
  const parameterTypes = Reflect.getMetadata(PARAM_TYPES_METADATA, target, propertyKey);
  const parameterType = parameterTypes[parameterIndex];
  console.log('parameterType', parameterType)

  // 四个参数：传入参数，累的原型，方法的名称，参数的index
  return function (target: Object, MothedName: string, desc: PropertyDescriptor) {
    console.log(target, MothedName, propertyKey)
    const oMethod = desc.value;
    desc.value = function (...args: any[]) {
        console.log(args[propertyKey])
        // args[propertyKey] = args[propertyKey]?.[params] || args[propertyKey]
        oMethod.apply(this, args); // 用args继续执行原来的函数，且全部转为string
    }
  } as any;
}

class WsClient5 {
  getData(@GetSubParam uuid: number) {
    console.log(uuid);
  }
}

const wsclient = new WsClient5();
wsclient.getData(123);
