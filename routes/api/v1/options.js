const express = require('express')
const router = express.Router()
const optionApi = require('../../../controllers/api/v1/options_api')

// router.post('/create',optionApi.create)

router.get('/:id/delete',optionApi.destroy)

router.get('/:id/add_vote',optionApi.addVote)

module.exports = router