const task = require('../services/maintainance')
const uuid = require('uuid')

exports.getAll = (req, res) => {
  const data = task.getAll()  
  res.json({
    status: 'OK',
    message: 'success',
    data,
  })
}

exports.getById = async (req, res) => {
  const id = req.params.id
  const data = await task.getById(id)

  res.json({
    status: 'OK',
    message: 'success',
    data,
  })
}

exports.save = async (req, res) => {
  const maintainance = req.body.maintainance
  maintainance.id = uuid()
  await task.save({ id: req.body.id, maintainance })
  const data = await task.getAll()
  res.json({
    status: 'OK',
    message: 'success',
    data: data
  })
}

exports.update = async (req, res) => {
  const maintainanceId = req.params.id
  const obj = req.body.maintainance
  
  await task.update(req.body.id, maintainanceId, obj)

  const data = await task.getAll()
  
  res.json({
    status: 'OK',
    message: 'success',
    data,
  })
}

exports.destroy = async (req, res) => {
  const maintainanceId = req.params.id

  await task.remove(req.body.id, maintainanceId)
  const data = await task.getAll();

  res.json({
    status: 'OK',
    message: 'data successfully deleted.',
    data,
  })
}