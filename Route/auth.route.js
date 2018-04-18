const router = require('express-promise-router')();
const authController = require('../Controller/auth.controller');

router.get('/', authController.getauth);
router.post('/', authController.postauth);
router.put('/', authController.putauth);
router.delete('/', authController.deleteauth);

module.exports = router;