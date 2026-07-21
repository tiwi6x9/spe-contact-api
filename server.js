require('dotenv').config();




const express = require('express');
const cors = require('cors');

const contactoRoutes = require("./routes/contacto");

const app = express();

const PORT = process.env.PORT || 3000;

// Middleware
const cors = require("cors");

app.use(cors({

    origin: [

        "http://localhost:5500",

        "https://spe-contact-api-7iaa-1axdm9ehm-sisempresas.vercel.app/api/contacto"

    ],

    methods: ["POST"]

}));
app.use(express.json());



app.use("/api/contacto", contactoRoutes);

// Ruta de prueba
app.get('/', (req, res) => {
    res.json({
        mensaje: 'API funcionando correctamente'
    });
});

app.listen(PORT, '0.0.0.0', () => {
    console.log("====================================");
    console.log("🚀 API SPE iniciada correctamente");
    console.log(`🌐 http://localhost:${PORT}`);
    console.log("====================================");
});