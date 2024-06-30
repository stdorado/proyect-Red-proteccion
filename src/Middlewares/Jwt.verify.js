import jwt from "jsonwebtoken"
import dotenv from "dotenv"
dotenv.config()

export function authenticateToken(req, res, next) {
    const token = req.session.jwt;

    if (!token) {
        return res.status(401).json({ success: false, message: 'No autorizado' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(401).json({ success: false, message: 'Token inválido' });
    }
}

