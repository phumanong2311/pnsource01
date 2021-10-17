const users = require('./users')
const invoices = require('./invoices')
module.exports = (app) => {
  app.use('/api', (req, res, next) => {
    // const { headers } = req
    // const { token } = headers
    // const currentUser = token.decode()
    
    // const currentUser = {
    //   id: "123",
    //   name: "phu ma"
    // }
    // // check quyen
    // if (hople) {
    //   req.currentUser = currentUser;
    //   next()
    // }
    // // 
    // return res.send(headers)
    console.log("niddle1")
    next();
  })
  app.use("/api/invoices", (req, res, next) => {
    console.log("niddle2")
    next()
  })
  app.use("/api/users", users);
  app.use("/api/invoices", invoices);
}