const rootRouter = require('./root.route');

module.exports = (app) => {
    app.use('/api/', rootRouter);
};
