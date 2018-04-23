module.exports.postMail = async (req, res, next) => {
    console.log(req.query, req.params, req.body);
    res.json('hello postMail');
};

module.exports.phoneSendCode = async (req, res, next) => {
    console.log(req.query, req.params, req.body);
    res.json('hello phoneSendCode');
};

module.exports.phoneConfirm = async (req, res, next) => {
    console.log(req.query, req.params, req.body);
    res.json('hello phoneConfirm');
};
