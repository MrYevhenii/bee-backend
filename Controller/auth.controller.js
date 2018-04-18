module.exports.getauth = async (req, res, next) => {
    console.log(req.query, req.params);
    res.json('hello auth');
};

module.exports.postauth = async (req, res, next) => {
    console.log(req.query, req.params, req.body);
    res.json('hello auth');
};

module.exports.putauth = async (req, res, next) => {
    console.log(req.query, req.params, req.body);
    res.json('hello auth');
};

module.exports.deleteauth = async (req, res, next) => {
    console.log(req.query, req.params);
    res.json('hello auth');
};
