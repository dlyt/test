'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const xmlBodyParser = require('express-xml-parser')
const path = require('path')
const log4js = require('log4js')

/* app 实例 */
var app = express()

// 设置日志
var logger = log4js.getLogger("access")

/* 设置路由 */
var routes = require('./conf/routes')

/* 设置模板引擎 */
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

//中间件
app.use(bodyParser.json())

app.use(routes)




module.exports = app
