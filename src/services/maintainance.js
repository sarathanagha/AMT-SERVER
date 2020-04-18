const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const uuid = require('uuid')
const _ = require('lodash')
const adapter = new FileSync('db.json')
const db = low(adapter)

let getMaintainance = (id) => db.get('owners').find({ id }).get('maintainance')

exports.getWaterMaintainance = (period) => {
  let owners = db.get('owners').value();
  let maintainance = owners.map((owner, index)=> {
    let waterAttributes = owner.maintainance.find((maintainance)=> maintainance.forPeriod === period) || {};
    return {
      index: index+1,
      name: owner.name,
      owner: owner.owner,
      ...waterAttributes,
    }
  });
  return maintainance;
}

exports.getAll = () => {
  let owners = db.get('owners').value();
  let maintainance = {};
  _.forEach(owners, (owner)=> maintainance[owner.id] = owner['maintainance']);
  return maintainance;
}

exports.getById = (id) => getMaintainance(id).value() 

exports.save = (id, maintainance) => (
  getMaintainance(id).push(maintainance)
                      .write()
)

exports.update = (id, maintainanceId, maintainance) => (
  getMaintainance(id).find({ id: maintainanceId })
                     .assign(maintainance)
                     .write()
)

exports.remove = (id, maintainanceId) => (
  getMaintainance(id)
    .remove({ id: maintainanceId })
    .write()
)