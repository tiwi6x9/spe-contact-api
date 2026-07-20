const { enviarCorreo } = require("../services/correoService");

const enviarFormulario = async (req, res) => {

    try {

        const { nombre, telefono, correo, mensaje } = req.body;

        const respuesta = await enviarCorreo({
            nombre,
            telefono,
            correo,
            mensaje
        });

        res.status(200).json(respuesta);

    } catch (error) {

        console.error(error);

        res.status(500).json({
            ok: false,
            mensaje: "Error interno del servidor"
        });

    }

};

module.exports = {
    enviarFormulario
};