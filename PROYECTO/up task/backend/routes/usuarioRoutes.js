import express  from "express";

import { Registrar,autenticar } from "../controllers/usuarioControllers.js";

const routes =express.Router();

// Creacion/ Registro/ Confirmacion de usuario

routes.post('/',Registrar);
routes.post('/login',autenticar)


export default routes;