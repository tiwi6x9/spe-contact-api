require("dotenv").config();

const contactoRoutes = require("./routes/contacto");
const limiter = require("./middleware/rateLimiter");



const cors = require("cors");

app.use(cors({

    origin: [

        "http://localhost:5500",

        "https://tiwi6x9.github.io"

    ],

    methods: ["POST"]

}));


const PORT = process.env.PORT || 3000;

app.use(express.json());


app.use(limiter);

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