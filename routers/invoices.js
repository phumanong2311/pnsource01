var express = require('express')

var router = express.Router()

router.get('/', function (req, res) {
  const { query } = req
	res.send(query)
})

router.get('/:id', (req, res) => {
  const { params } = req;
	res.send(`invoice ${params.id}`)
})

module.exports = router