const router = require('express-promise-router')();
const userController = require('../Controller/user.controller');

router.get('/', userController.getUser);
router.post('/', userController.postUser);
router.put('/', userController.updateUser);
router.delete('/', userController.deleteUser);

module.exports = router;