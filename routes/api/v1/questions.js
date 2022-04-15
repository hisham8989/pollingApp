const express = require('express')
const router = express.Router()
const questionApi = require('../../../controllers/api/v1/questions_api')
router.get('/',questionApi.index)


module.exports = router