const Questions = require('../../../models/questions')
const Option = require('../../../models/option')

module.exports.index = async (req, res) => {
  try {
    const questions = await Questions.find({}).populate({
      path: 'options',
    })
    return res.status(200).json({
      status: 'success',
      message: 'questions routes',
      data: {
        questions,
      },
    })
  } catch (err) {
    console.log(err)
    return res.status(202).json({
      status: 'failure',
      message: 'Request Failure',
    })
  }
}

module.exports.create = async (req, res) => {
  try {
    const question = await Questions.create(req.body)
    return res.status(200).json({
      status: 'success',
      message: 'question created',
      question,
    })
  } catch (err) {
    console.log(err)
    return res.status(202).json({
      status: 'failure',
      message: 'question can not be created',
    })
  }
}

module.exports.getQuestion = async (req, res) => {
  try {
    const question = await Questions.findById(req.params.id).populate({
      path:'options'
    })

    return res.status(200).json({
      status: 'success',
      data: {
        question,
      },
    })
  } catch (err) {
    console.log(err)
    return res.status(202).json({
      status: 'failure',
      message: 'something went wrong',
    })
  }
}

module.exports.createOption = async (req, res) => {
  try {
    const question = await Questions.findById(req.params.id)
    const option = await Option.create(req.body)
    question.options.push(option)
    await question.save()
    return res.status(200).json({
      status: 'success',
      option,
    })
  } catch (err) {
    console.log(err)
    return res.status(202).json({
      status: 'failure',
      message: 'options can not be created',
    })
  }
}

module.exports.destroy = async (req, res) => {
  try {
    const question = await Questions.findById(req.params.id).populate(
      'options'
    )
    if(question.options.find(op=>op.votes)){
      return res.status(403).json({
        status: 'failure',
        message: 'question can not be deleted because one of its option have votes',
      })
    }else{
      await question.delete()
    }
    return res.status(200).json({
      status: 'success',
      message: 'question is deleted',
    })
  } catch (err) {
    console.log(err)
    return res.status(202).json({
      status: 'failure',
      message: 'question can not be deleted',
    })
  }
}
