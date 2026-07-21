require("dotenv").config();

const contactoRoutes = require("./routes/contacto");
const limiter = require("./middleware/rateLimiter");

const express = require("express");
const cors = require("cors");


const app = express();

app.use(cors({

    origin: [

        "http://localhost:5500",

        "https://tiwi6x9.github.io"

    ],

    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type"]

}));

app.options("*", cors());


app.use(express.json());


//app.use(limiter);


//const PORT = process.env.PORT || 3000;

app.use("/api/contacto", contactoRoutes);

app.get("/", (req, res) => {
    res.json({
        mensaje: "API funcionando correctamente"
    });
});

if (process.env.NODE_ENV !== "production") {
    app.listen(PORT, () => {
        console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
    });
}

module.exports = app;