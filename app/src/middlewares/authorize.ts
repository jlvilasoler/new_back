const authorize = (roles) => {
    return (req, res, next) => {
        const currentUser = req.currentUser; // Asegúrate de haber configurado correctamente el middleware que almacena el usuario actual en la solicitud

        if (!currentUser) {
            return res.status(401).json({ message: "Unauthorized: Debes iniciar sesión para acceder a esta ruta" });
        }

        if (!roles.includes(currentUser.role)) {
            return res.status(403).json({ message: "Forbidden: No tienes permisos para acceder a esta ruta" });
        }

        next();
    };
};

module.exports = authorize;