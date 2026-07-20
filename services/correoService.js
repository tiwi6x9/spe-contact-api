const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND_API_KEY);

const enviarCorreo = async (datosFormulario) => {

    const { nombre, telefono, correo, mensaje } = datosFormulario;

    try {

        const respuesta = await resend.emails.send({

            from: "BackSPE <onboarding@resend.dev>",

            to: process.env.EMAIL_DESTINO,

            subject: "📩 Nuevo contacto desde la página web",

            html: `
                <h2>Nuevo mensaje recibido</h2>

                <p><strong>Nombre:</strong> ${nombre}</p>

                <p><strong>Teléfono:</strong> ${telefono}</p>

                <p><strong>Correo:</strong> ${correo}</p>

                <p><strong>Mensaje:</strong></p>

                <p>${mensaje}</p>
            `

        });

        return {
            ok: true,
            mensaje: "Correo enviado correctamente",
            id: respuesta.data?.id
        };

    } catch (error) {

        console.error(error);

        return {
            ok: false,
            mensaje: "No fue posible enviar el correo"
        };

    }

};

module.exports = {
    enviarCorreo
};