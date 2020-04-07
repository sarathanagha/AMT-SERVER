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

exports.getById = (id) => {
  let expenses = db.get(DB_NAME).value();
  return expenses[id];
}

exports.save = (newEntries) => {
  let expenses = { ...db.get(DB_NAME).value(), ...newEntries }
  return db.set(DB_NAME, expenses)
    .write();
}

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