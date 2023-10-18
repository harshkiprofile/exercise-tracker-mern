const router = require('express').Router();
const { getUser, addUser } = require('../controllers/getUser')


router.route('/').get(getUser)
router.route('/add').post(addUser)


module.exports = router;