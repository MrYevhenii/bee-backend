module.exports.getuser = async (req, res, next) => {
    console.log(req.query, req.params);
    res.json('hello get');
};

module.exports.postuser = async (req, res, next) => {
    console.log(req.query, req.params, req.body);
    res.json('hello post');
};

module.exports.putuser = async (req, res, next) => {
    console.log(req.query, req.params, req.body);
    res.json('hello put');
};

module.exports.deleteuser = async (req, res, next) => {
    console.log(req.query, req.params);
    res.json('hello delete');
};
