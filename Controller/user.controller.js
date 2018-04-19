module.exports.getUser = async (req, res, next) => {
    console.log(req.query, req.params);
    res.json('hello get');
};

module.exports.updateUser = async (req, res, next) => {
    console.log(req.query, req.params, req.body);
    res.json('hello post');
};

module.exports.postUser = async (req, res, next) => {
    console.log(req.query, req.params, req.body);
    res.json('hello put');
};

module.exports.deleteUser = async (req, res, next) => {
    console.log(req.query, req.params);
    res.json('hello delete');
};
