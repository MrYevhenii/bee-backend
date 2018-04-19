const router = require('express-promise-router')();
const authController = require('../Controller/auth.controller');


router.post('/forgot-pass', authController.forgotPass);
router.post('/email', authController.postMail);
router.post('/phone/send', authController.phoneSendCode);
router.post('/phone/confirm', authController.phoneConfirm);


module.exports = router;