const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  return res.status(200).json({
    status: 'success',
    message: 'v1 api',
  })
})

// load all routes regarding options
router.use('/options', require('./options'))


// load all routes regarding questions
// extra routes for creating options that needs question id
router.use('/questions', require('./questions'))

module.exports = router
