const ownerController = require('../controllers/owners')
const ExpenseController = require('../controllers/expenses')

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


  return router
}