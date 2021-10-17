var express = require('express')

var router = express.Router()

router.get('/', function (req, res) {
	const { currentUser } = req
	res.send(currentUser)
})

router.get('/:id/roles/:roleid/pernission', async (req, res) => {
	const { currentUser } = req
	// call service
	
	res.send(currentUser)

})

module.exports = router
