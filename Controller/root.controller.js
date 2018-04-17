module.exports.getRoot = async (req, res, next) => {
    console.log(req.query, req.params);
    res.json('ok');
};

module.exports.postRoot = async (req, res, next) => {
    console.log(req.query, req.params, req.body);
    res.json('ok');
};

module.exports.putRoot = async (req, res, next) => {
    console.log(req.query, req.params, req.body);
    res.json('ok');
};

module.exports.deleteRoot = async (req, res, next) => {
    console.log(req.query, req.params);
    res.json('ok');
};
