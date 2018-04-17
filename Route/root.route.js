const router = require('express-promise-router')();
const rootController = require('../Controller/root.controller');

router.get('/', rootController.getRoot);
router.post('/', rootController.postRoot);
router.put('/', rootController.putRoot);
router.delete('/', rootController.deleteRoot);

module.exports = router;