const express = require("express");

const router = express.Router();

router.options("/", cors());

const {

    enviarFormulario

} = require("../controllers/contactoController");

const {

    reglasFormulario,

    validarFormulario

} = require("../middleware/validarFormulario");

router.post(

    "/",

    reglasFormulario,

    validarFormulario,

    enviarFormulario

);

module.exports = router;