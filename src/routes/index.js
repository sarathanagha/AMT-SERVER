const recipeController = require('../controllers/recipe')

module.exports = (express) => {
  const router = express.Router()

  router.get('/getAll', recipeController.getAll)
  router.get('/:id', recipeController.getById)
  router.post('/save', recipeController.save)
  router.put('/:id', recipeController.update)
  router.delete('/:id', recipeController.destroy)

  return router
}