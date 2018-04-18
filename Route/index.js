const rootRouter = require('./root.route');
const authRouter = require('./auth.route');
const registerRouter = require('./register.route');

module.exports = (app) => {
    app.use('/api/', rootRouter);
    app.use('/api/auth',authRouter);
    app.use('/api/register',registerRouter);
    app.use('/api/user',rootRouter);
    // app.use('/', (req, res, next) => res.json('ok'));
};
