// 创建一个示例对象
const userRoles = {
  ADMIN: 'admin',
  USER: 'user',
  GUEST: 'guest',
  MODERATOR: 'moderator'
};

// 从对象创建枚举类型
type UserRole = keyof typeof userRoles;

// 使用枚举类型
function printRole(role: UserRole) {
  console.log(`当前角色: ${role}`);
}

// 正确使用示例
printRole('ADMIN'); // 输出: 当前角色: ADMIN
printRole('USER');  // 输出: 当前角色: USER

// 错误使用示例（会导致编译错误）
// printRole('MANAGER'); // 错误：类型'"MANAGER"'的参数不能赋给类型'UserRole'的参数