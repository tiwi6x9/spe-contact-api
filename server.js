require("dotenv").config();

const express = require("express");
const cors = require("cors");

const contactoRoutes = require("./routes/contacto");
const limiter = require("./middleware/rateLimiter");

const app = express();

app.set("trust proxy", 1);

const PORT = process.env.PORT || 3000;

const corsOptions = {
    origin: [
        "http://localhost:5500",
        "http://127.0.0.1:5500",
        "https://tiwi6x9.github.io"
    ],
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type"],
    credentials: false
};

app.use(cors(corsOptions));
app.options("*", cors(corsOptions));

app.use(express.json());

// Descomentar después de verificar que todo funciona
// app.use(limiter);

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