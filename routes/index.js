const express = require('express')
const res = require('express/lib/response')
const router = express.Router()

router.get('/',(req,res)=>{
    return res.status(200).json({
        status:"success",
        message:"Welcome Home"
    })
})

router.use('/api',require('./api'))

module.exports = router