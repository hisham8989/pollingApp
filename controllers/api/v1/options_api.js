const Option = require('../../../models/option')
const Questions = require('../../../models/questions')
// module.exports.create = async (req, res) => {
//     try {
//       const question = await Questions.findById(req.params.id)
//       const option = await Option.create(req.body)
//       question.options.push(option)
//       await question.save()
//       return res.status(200).json({
//         status: 'success',
//         option,
//       })
//     } catch (err) {
//       console.log(err)
//       return res.status(202).json({
//         status: 'failure',
//         message: 'options can not be created',
//       })
//     }
//   }

module.exports.destroy = async (req, res) => {
  try {
    const option = await Option.findById(req.params.id)
    if(option.votes){
      return res.status(403).json({
        status:'failure',
        message:'Invalid request because this option have some votes'
      })
    }else{
      await option.delete()
      await Questions.findOneAndUpdate({"options":{"$all":req.params.id}}, {
        $pull: { options: req.params.id },
      })
    }
    return res.status(200).json({
      status: 'success',
      message: 'option is deleted',
      option,
    })
  } catch (err) {
    console.log(err)
    return res.status(202).json({
      status: 'failure',
      message: 'option can not be deleted',
    })
  }
}

module.exports.addVote = async (req, res) => {
  try {
    const option = await Option.findById(req.params.id)
    if(!option.votes){
        option.votes="1"
    }else{
        option.votes = +option.votes+1
    }
    
    await option.save()
    return res.status(200).json({
      status: 'success',
      message: 'Vote Added',
    })
  } catch (err) {
    console.log(err)
    return res.status(202).json({
      status: 'failure',
      message: 'Vote count could not be precessed',
    })
  }
}
