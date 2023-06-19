import jwt from 'jsonwebtoken'

//-------------------------------
//Middleware d'authentification pour la verifcation du token envoyé par le frontend
export const tokenValidation = (req, res, next) => {
    try {
        const token = req.headers.authorization.split('Bearer')[1].trim();
        const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
        return next();

    } catch {
        res.status(401).json({
            error: new Error('Invalid request!')
        });
    }
};