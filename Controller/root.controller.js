module.exports.getRoot = async (req, res, next) => {
    console.log(req.query, req.params);
    res.json('hello get');
};

module.exports.postRoot = async (req, res, next) => {
    console.log(req.query, req.params, req.body);
    res.json('hello post');
};

module.exports.putRoot = async (req, res, next) => {
    console.log(req.query, req.params, req.body);
    res.json('hello put');
};

module.exports.deleteRoot = async (req, res, next) => {
    console.log(req.query, req.params);
    res.json('hello delete');
};
