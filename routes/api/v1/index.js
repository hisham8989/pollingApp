const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  return res.status(200).json({
    status: 'success',
    message: 'v1 api',
  })
})

router.use('/options', require('./options'))

router.use('/questions', require('./questions'))

module.exports = router
