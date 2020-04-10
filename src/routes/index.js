const ownerController = require('../controllers/owners')
const ExpenseController = require('../controllers/expenses')
const MaintainanceController = require('../controllers/maintainance');

module.exports = (express) => {
  const router = express.Router()

  router.get('/owners', ownerController.getAll)
  router.get('/owners/:id', ownerController.getById)
  router.post('/owners', ownerController.save)
  router.put('/owners/:id', ownerController.update)
  router.delete('/owners/:id', ownerController.destroy)

  router.get('/expenses', ExpenseController.getAll)
  router.get('/expenses/:id', ExpenseController.getById)
  router.post('/expenses', ExpenseController.save)
  router.put('/expenses/:id', ExpenseController.update)
  router.delete('/expenses/:id', ExpenseController.destroy)

  router.get('/maintainance', MaintainanceController.getAll)
  router.get('/maintainance/:id', MaintainanceController.getById)
  router.post('/maintainance', MaintainanceController.save)
  router.put('/maintainance/:id', MaintainanceController.update)
  router.delete('/maintainance/:id', MaintainanceController.destroy)


  return router
}