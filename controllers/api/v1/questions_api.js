const Questions = require('../../../models/questions')

module.exports.index = async (req, res) => {
  const questions = await Questions.find({})
  return res.status(200).json({
    status: 'success',
    message: 'questions routes',
    questions,
  })
}

module.exports.create = (req, res) => {
  Questions.create(req.body, function (err, question) {
    if (!err) {
      return res.status(200).json({
        status: 'success',
        message: 'question created',
        question,
      })
    }
  })
}
