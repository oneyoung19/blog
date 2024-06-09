// 数组形式 所有的侧边栏都一样 而且该侧边栏包含所有配置路由
// 对象形式 侧边栏分为多个 每个侧边栏只会匹配当前满足的路由
const fe = require('./fe')
const frame = require('./frame')
const cs = require('./cs')
const cross = require('./cross')
const engineer = require('./engineer')
const be = require('./be')
const db = require('./db')
const deploy = require('./deploy')
const tool = require('./tool')

module.exports = {
  // 前端基础
  ...fe,
  // 框架
  ...frame,
  // 计算机科学
  ...cs,
  // 跨平台
  ...cross,
  // 工程化
  ...engineer,
  // 后端
  ...be,
  // 数据库
  ...db,
  // 部署
  ...deploy,
  // 工具
  ...tool
}
