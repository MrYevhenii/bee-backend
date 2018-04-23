module.exports.getUser = async (req, res, next) => {
    console.log(req.query, req.params);
    res.json('hello getUser');
};

module.exports.updateUser = async (req, res, next) => {
    console.log(req.query, req.params, req.body);
    res.json('hello updateUser');
};

module.exports.postUser = async (req, res, next) => {
    console.log(req.query, req.params, req.body);
    res.json('hello postUser');
};

module.exports.deleteUser = async (req, res, next) => {
    console.log(req.query, req.params);
    res.json('hello deleteUser');
};
