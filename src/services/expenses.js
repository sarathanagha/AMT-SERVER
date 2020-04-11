const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('db.json')
const db = low(adapter)

const DB_NAME = 'expenses';

const initialData = {
  expenses: [],
}

db.defaults(initialData).write()

exports.getAll = () => {
  return db.get(DB_NAME).value()
}

exports.getById = (id) => (
  db.get(DB_NAME)
    .find({ id })
    .value()
)

exports.save = (expense) => (
  db.get(DB_NAME)
    .push(expense)
    .write()
)

exports.update = (id, obj) => (
  db.get(DB_NAME)
    .find({ id })
    .assign(obj)
    .write()
)

exports.remove = (id) => (
  db.get(DB_NAME)
    .remove({ id })
    .write()
)

exports.list = () => (
  db.get('expenseItems')
    .value()
)