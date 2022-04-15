const express = require('express')
const router = express.Router()
const questionApi = require('../../../controllers/api/v1/questions_api')


router.get('/',questionApi.index)

router.post('/create',questionApi.create)

router.get('/:id',questionApi.getQuestion)

router.post('/:id/options/create',questionApi.createOption)

router.get('/:id/delete',questionApi.destroy)

module.exports = router