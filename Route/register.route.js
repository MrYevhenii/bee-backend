const router = require('express-promise-router')();
const registerController = require('../Controller/register.controller');

router.get('/', registerController.getregister);
router.post('/', registerController.postregister);
router.put('/', registerController.putregister);
router.delete('/', registerController.deleteregister);

module.exports = router;