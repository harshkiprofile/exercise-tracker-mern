const router = require('express').Router();
const { getExercise, addExercise } = require('../controllers/getExercise')


router.route('/').get(getExercise);
router.route('/add').post(addExercise);


module.exports = router;