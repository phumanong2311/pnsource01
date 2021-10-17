var express = require('express')
var app = express()
const routesApi = require("./routers");

// connectDb
routesApi(app)


app.listen('4000', () => {
	console.log('server start')
})