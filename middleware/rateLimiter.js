const rateLimit = require("express-rate-limit");

const limiter = rateLimit({

    windowMs: 15 * 60 * 1000, // 15 minutos

    max: 5,

    message: {
        ok: false,
        mensaje: "Has enviado demasiadas solicitudes. Intenta nuevamente en unos minutos."
    },

    standardHeaders: true,

    legacyHeaders: false

});

module.exports = limiter;