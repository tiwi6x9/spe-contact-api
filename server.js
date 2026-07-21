require('dotenv').config();

const express = require('express');
const cors = require('cors');

const contactoRoutes = require('./routes/contacto');

const app = express();

const PORT = process.env.PORT || 3000;

// ==============================
// CORS
// ==============================

const corsOptions = {
    origin: [
        'http://localhost:5500',
        'http://127.0.0.1:5500',
        'https://tiwi6x9.github.io'
    ],
    methods: ['POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type']
};

app.use(cors(corsOptions));

// ==============================
// JSON
// ==============================

app.use(express.json());

// ==============================
// RUTAS
// ==============================

app.use('/api/contacto', contactoRoutes);

// ==============================
// RUTA DE PRUEBA
// ==============================

app.get('/', (req, res) => {

    res.json({
        ok: true,
        mensaje: 'API funcionando correctamente'
    });

});

// ==============================
// SERVIDOR
// ==============================

if (process.env.NODE_ENV !== 'production') {

    app.listen(PORT, () => {

        console.log('====================================');
        console.log('🚀 API SPE iniciada correctamente');
        console.log(`🌐 http://localhost:${PORT}`);
        console.log('====================================');

    });

}

module.exports = app;



///prueba   