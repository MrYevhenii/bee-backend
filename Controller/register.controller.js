module.exports.getregister = async (req, res, next) => {
    console.log(req.query, req.params);
    res.json('hello register');
};

module.exports.postregister = async (req, res, next) => {
    console.log(req.query, req.params, req.body);
    res.json('hello register');
};

module.exports.putregister = async (req, res, next) => {
    console.log(req.query, req.params, req.body);
    res.json('hello register');
};

module.exports.deleteregister = async (req, res, next) => {
    console.log(req.query, req.params);
    res.json('hello register');
};
