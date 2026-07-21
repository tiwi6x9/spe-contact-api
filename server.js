require("dotenv").config();

const express = require("express");
const cors = require("cors");

const contactoRoutes = require("./routes/contacto");
const limiter = require("./middleware/rateLimiter");


const app = express();


// ===============================
// CONFIGURACIÓN CORS
// ===============================

const allowedOrigins = [
    "http://localhost:5500",
    "https://tiwi6x9.github.io"
];


const corsOptions = {
    origin: function (origin, callback) {

        // Permitir peticiones sin origin
        // (Postman, servidores internos, etc.)
        if (!origin) {
            return callback(null, true);
        }


        if (allowedOrigins.includes(origin)) {
            return callback(null, true);
        }


        return callback(
            new Error("No permitido por CORS")
        );
    },

    methods: [
        "GET",
        "POST",
        "OPTIONS"
    ],

    allowedHeaders: [
        "Content-Type"
    ],

    credentials: false,

    optionsSuccessStatus: 204
};


// Activar CORS
app.use(cors(corsOptions));


// Responder preflight
app.options("/api/contacto", cors(corsOptions));



// ===============================
// MIDDLEWARES
// ===============================

app.use(express.json());


// Rate limiter después de CORS
// cuando confirmes que funciona puedes activarlo

// app.use(limiter);



// ===============================
// RUTAS
// ===============================

app.use("/api/contacto", contactoRoutes);



// ===============================
// RUTA DE PRUEBA
// ===============================

app.get("/", (req, res) => {

    res.status(200).json({
        mensaje: "API funcionando correctamente",
        entorno: process.env.NODE_ENV || "development"
    });

});



// ===============================
// SERVIDOR LOCAL
// ===============================

const PORT = process.env.PORT || 3000;


if (process.env.NODE_ENV !== "production") {

    app.listen(PORT, () => {

        console.log(
            `Servidor ejecutándose en http://localhost:${PORT}`
        );

    });

}



module.exports = app;