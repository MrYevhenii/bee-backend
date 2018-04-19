const router = require('express-promise-router')();
const registerController = require('../Controller/register.controller');


router.post('/email', registerController.postMail);
router.post('/phone/send', registerController.phoneSendCode);
router.post('/phone/confirm', registerController.phoneConfirm);






module.exports = router;