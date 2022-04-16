const express = require('express')
const router = express.Router()
const optionApi = require('../../../controllers/api/v1/options_api')

// router.post('/create',optionApi.create)

// creation of options present in questions routes

// deleting a option which does not consist of any vote
router.get('/:id/delete',optionApi.destroy)

// routes to add a vote to a option
router.get('/:id/add_vote',optionApi.addVote)

module.exports = router