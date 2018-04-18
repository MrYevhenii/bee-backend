const router = require('express-promise-router')();
const userController = require('../Controller/user.controller');

router.get('/', userController.getuser);
router.post('/', userController.postuser);
router.put('/', userController.putuser);
router.delete('/', userController.deleteuser);

module.exports = router;