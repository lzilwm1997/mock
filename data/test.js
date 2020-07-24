// let app = require('express').Router()
let Mock = require("mockjs")
var Random = Mock.Random
//测试
module.exports = {
  // 模拟数据
  getUser: Mock.mock({
    code: 0,
    data: {
      "data|1000": [
        {
          "id|+1":0,
          "name":"@cname",
          "date": "@date('yyyy-MM-dd')",
          "city": "@city(true)"
        },
      ],
    },
    message: "成功",
    timestamp: "1594018370",
    type: "success",
  }),

  //登录
  login: {
    code: 0,
    data: {
      userName: "admin",
      password: "admin",
      baseImg: Random.image(),
    },
    message: "登录成功",
    token: "asdfgs",
    type: "success",
  },
  loginErr: {
    code: 1,
    message: "登录失败",
  },
  // 获取用户信息
  getAdmin: {
    code: 0,
    data: {
      userID: '1',
      userName: "lzkenn",
      baseImg: Random.image(),
      sex: 0,
      role: 'admin'
    },
  },
  // 分类列表
  categoryList: {
    code: 0,
    data: [{
      categoryName: '饮料水类'
    }],
  }
}
// console.log(getUser)
