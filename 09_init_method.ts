type ShapeType = "cube" | "square" | "recangle" | "triangle";

type Shape2DType = Exclude<ShapeType, "cube">
// 除了正方体其他都是2D的

type ThemeType = "dark" | "light";
type ColorType = "tomato" | "deepskyblue" | "yellowgreen"

type ThemeColorType = `${ThemeType}-${ColorType}`
// 模版匹配类型
type ThemeColorWithoutYellowType = Exclude<`${ThemeType}-${ColorType}`, "dark-yellow">


// 4.0

class Square {
  // 确切赋值断言
  sideLength!: number;
  constructor(sideLength: number) {
    this.initialize(sideLength);
  }

  initialize(sideLength: number) {
    this.sideLength = sideLength;
  }

  get area() {
    return this.sideLength ** 2;
  }
}

let values: string[];
(values ?? (values = [])).push("hello");
// 空值合并
// 当value为null或者undefined时为[]否则为value【和||类似，去掉了0和""的判断】

/** @deprecated */
type XXXType = any

//  废弃的type会自动加上中划线
const xxx: XXXType = 123