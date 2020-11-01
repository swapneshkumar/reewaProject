const jwt = require('jsonwebtoken');
const SECRET_KEY = "abc@123";
const jwtHelper = {};

jwtHelper.verifyToken = (req, resp, next) => {
    try {

        const token = req.headers['authorization'];
        if (!token)
            return resp.status(401).send({ 'error': 'invalied token' })
         jwt.verify(token, SECRET_KEY);
         next();
    } catch (error) {
        console.log(error);
        return null;
    }
},

    jwtHelper.generateJWTToken = (userData) => {
        return jwt.sign(userData, SECRET_KEY);
    }

module.exports = jwtHelper;
