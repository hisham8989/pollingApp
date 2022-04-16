const mongoose = require('mongoose')

optionSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: true,
    },
    votes: {
      type: String,
    },
    link_to_vote: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
)

// dynamcally adding a link for adding a vote to a option
optionSchema.pre('save', async function (next) {
  try {
    this.link_to_vote = `http://localhost:3000/api/v1/options/${this._id}/add_vote`

    return next()
  } catch (error) {
    return next(error)
  }
})

const Option = mongoose.model('Option', optionSchema)

module.exports = Option
