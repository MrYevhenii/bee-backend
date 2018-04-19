module.exports.forgotPass = async (req, res, next) => {
    console.log(req.query, req.params, req.body);
    res.json('hello auth');
};

module.exports.postMail = async (req, res, next) => {
    console.log(req.query, req.params, req.body);
    res.json('hello auth');
};

module.exports.phoneSendCode = async (req, res, next) => {
    console.log(req.query, req.params, req.body);
    res.json('hello auth');
};

module.exports.phoneConfirm = async (req, res, next) => {
    console.log(req.query, req.params, req.body);
    res.json('hello auth');
};
