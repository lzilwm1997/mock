let express = require("express") //引入express框架
let app = express()
const bodyParser = require("body-parser")
let routes = require("./routes/index")

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.all("*", function (req, res, next) {
  //设置允许跨域的域名，*代表允许任意域名跨域
  res.header("Access-Control-Allow-Origin", "*")
  //允许的header类型
  res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
  //跨域允许的请求方式
  res.header("Access-Control-Allow-Methods", "DELETE,PUT,POST,GET,OPTIONS")
  if (req.method.toLowerCase() == "options") res.sendStatus(200)
  //让options尝试请求快速结束
  else next()
})

app.get("/", function (req, res) {
  res.send("hellow world")
})


routes(app);

//接口路由

//测试接口
/* app.get("/api/userInfo", (req, res) => {
  res.json(api.getUser)
})
//登录接口
app.post("/api/login", (req, res) => {
  var result = req.body
  res.json(JSON.stringify(result))
}) */

app.listen("3000", () => {
  console.log("监听端口 3000")
})
