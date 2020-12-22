const logger = (req, res, next) => {
    console.log('LOG: ' + req.originalUrl, new Date().toString());
    next();
};

module.exports =  logger;