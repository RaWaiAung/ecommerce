import jwt from 'jsonwebtoken';
import User from '../model/user.js';

const verifyUser = async (req, res, next) => {
    let token;
    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
        try {
            token = req.headers.authorization.split(" ")[1];
            if (!token) {
                res.status(401).send('Not Authorized or no Token')
            };

            const decode = jwt.verify(token, process.env.JWT_SECRET);
            req.user = await User.findById(decode.id).select("-password");
            next()
        } catch (error) {
            res.status(401).send('Not authorized, token failed');
            console.log(error)
        }
    }
}

export default verifyUser;