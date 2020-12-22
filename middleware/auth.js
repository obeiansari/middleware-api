const auth = (req, res, next) => {
    const userName = req.query.userName;
    const password = req.query.password;

    if (userName === 'admin' && password === 'admin') {
        next();
    } else {
        res.status(401).json();
    }
};

module.exports = auth;