let router = require("express").Router()
let Mock = require("mockjs")
let data = require("../data/test")

//分页
router.post("/userInfo", (req, res) => {
  const params = req.body
  const pageIndex = params.pageIndex
  const pageSize = params.pageSize
  const dataBagin = pageIndex * pageSize
  const dataEnd = dataBagin + (pageSize - 0)
  const users = data.getUser.data.data
  const dataLength = users.length
  var info = []
  if (dataEnd < dataLength) {
    info = users.slice(dataBagin, dataEnd)
  } else {
    info = users.slice(dataBagin, dataLength)
  }
  var resData = {
    data: info,
    lenghth: dataLength,
    code: 0,
  }
  res.json(resData)
})
//登录接口
router.post("/login", (req, res) => {
  var result = req.body
  var paras = JSON.stringify(result)
  var username = paras
    .substring(1, paras.length - 1)
    .split(",")[0]
    .split(":")[1]
    .split(`"`)[1]
  var pass = paras
    .substring(1, paras.length - 1)
    .split(",")[1]
    .split(":")[1]
    .split(`"`)[1]
  //   res.send(JSON.stringify(result))
  if (
    username == data.login.data.userName &&
    pass == data.login.data.password
  ) {
    res.json(data.login)
  } else {
    res.json(data.loginErr)
  }
  // res.json(data.getUser)
  console.log(data.login)
})

// 获取类名
router.get("/category", (req, res) => {
  res.json(data.categoryList)
})

// 添加类名
router.post("/addCategory", (req, res) => {
  const info = req.body
  data.categoryList.data.push(info)
  res.json(data.categoryList)
})

// 删除类名
router.post("/deleteCategory", (req, res) => {
  const start = req.body.index
  console.log(start)
  data.categoryList.data.splice(start, 1)
  res.json(data.categoryList)
})

// 修改类名
router.post("/editCategory", (req, res) => {
  const index = req.body.index
  const categoryName = req.body.categoryName
  data.categoryList.data[index].categoryName = categoryName
  
  res.json(data.categoryList)
})

router.get("/getAdmin", (req, res) => {
  res.json(data.getAdmin)
})

module.exports = router
