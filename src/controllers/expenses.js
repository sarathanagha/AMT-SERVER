const task = require('../services/expenses')
const uuid = require('uuid')


exports.getAll = (req, res) => {
  const data = task.getAll()
  res.json({
    status: 'OK',
    message: 'success',
    data,
  })
}

exports.getByMonth = async (req, res) => {
  const id = req.params.period
  const data = await task.getById(id)
  res.json({
    status: 'OK',
    message: 'success',
    data,
  })
}

exports.save = async (req, res) => {
  const obj = req.body;
  const data = await task.save(obj)
  res.json({
    status: 'OK',
    message: 'success',
    data,
  })
}
