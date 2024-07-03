import * as Yup from "yup";

export const registroSchema = Yup.object({
    nombres: Yup.string().max(50).required("Nombres es obligatorio"),
    apellidos: Yup.string().max(50).required("Apellidos es obligatorio"),
    numeroID: Yup.number().required("Numero de id requerido"),
    email: Yup.string().email().required("Email es obligatorio"),
    tipoID: Yup.number().required("Tipo de id requerido"),
    usuario: Yup.string().max(50).required("Usuario es obligatorio"),
    pass: Yup.string().max(50).required("Contraseña es obligatoria"),
});