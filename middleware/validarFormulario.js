const { body, validationResult } = require("express-validator");

const reglasFormulario = [

    body("nombre")
        .trim()
        .notEmpty()
        .withMessage("El nombre es obligatorio")
        .isLength({ min: 3 })
        .withMessage("El nombre debe tener al menos 3 caracteres"),

    body("telefono")
        .trim()
        .notEmpty()
        .withMessage("El teléfono es obligatorio"),

    body("correo")
        .trim()
        .isEmail()
        .withMessage("Correo inválido"),

    body("mensaje")
        .trim()
        .isLength({ min: 10 })
        .withMessage("El mensaje debe tener al menos 10 caracteres")

];


const validarFormulario = (req, res, next) => {

    const errores = validationResult(req);

    if (!errores.isEmpty()) {

        return res.status(400).json({

            ok: false,

            errores: errores.array()

        });

    }

    next();

};

module.exports = {

    reglasFormulario,

    validarFormulario

};