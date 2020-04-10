const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('db.json')
const db = low(adapter)

const initialData = {
  owners: [],
}

db.defaults(initialData).write()

exports.getAll = () => db.get('owners').value()

exports.getById = (id) => (
  db.get('owners')
    .find({ id })
    .value()
)

exports.save = (owners) => (
  db.get('owners')
    .push(owners)
    .write()
)

exports.update = (id, obj) => (
  db.get('owners')
    .find({ id })
    .assign(obj)
    .write()
)

exports.remove = (id) => (
  db.get('owners')
    .remove({ id })
    .write()
)