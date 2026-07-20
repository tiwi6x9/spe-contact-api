require('dotenv').config();




const express = require('express');

const cors = require("cors");

const cors = require("cors");

app.use(cors({

    origin: [

        "http://localhost:5500",

        "http://127.0.0.1:5500",

        "https://tiwi6x9.github.io"

    ],

    methods: ["POST"]

}));


const contactoRoutes = require("./routes/contacto");

const limiter = require("./middleware/rateLimiter");

const app = express();

const PORT = process.env.PORT || 3000;



// Middleware
app.use(cors({

    origin: [
        "http://localhost:5500",
        "http://127.0.0.1:5500"
    ],

    methods: ["POST"],

    credentials: false

}));
app.use(express.json());
app.use(limiter);



app.use("/api/contacto", contactoRoutes);

// Ruta de prueba
app.get('/', (req, res) => {
    res.json({
        mensaje: 'API funcionando correctamente'
    });
});



if (process.env.NODE_ENV !== "production") {

    app.listen(PORT, () => {

        console.log(`Servidor ejecutándose en http://localhost:${PORT}`);

    });

}

module.exports = app;