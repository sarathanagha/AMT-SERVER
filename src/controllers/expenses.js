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

exports.getById = async (req, res) => {
  const id = req.params.id;
  const data = await task.getById(id)
  res.json({
    status: 'OK',
    message: 'success',
    data,
  })
}

exports.save = async (req, res) => {
  const obj = req.body;
  obj.id = uuid();
  await task.save(obj)
  const data = await task.getAll()
  res.json({
    status: 'OK',
    message: 'success',
    data: data
  })
}

exports.update = async (req, res) => {
  const id = req.params.id
  const obj = req.body
  
  await task.update(id, obj)

  const data = await task.getAll()
  
  res.json({
    status: 'OK',
    message: 'success',
    data,
  })
}

exports.destroy = async (req, res) => {
  const { id } = req.params

  await task.remove(id)
  const data = await task.getAll();

  res.json({
    status: 'OK',
    message: 'data successfully deleted.',
    data,
  })
}
