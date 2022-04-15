require('dotenv').config()
const development = {
    name:"development",
    db:'polling_development',
    clustor_host:"hisham",
    clustor_pass:process.env.CLUSTOR_PASS
}

const production = {
    name:"production",
    db:'polling_production',
    clustor_host:"hisham",
    clustor_pass:process.env.CLUSTOR_PASS
}

module.exports = eval(process.env.NODE_ENV) == undefined?development : eval(process.env.NODE_ENV)