
import  Usuario from '../models/Usuario.js';
import generarId from '../helpers/generarId.js';
import generarJWT from '../helpers/generarJWT.js';

const Registrar = async (req, res) => {
    // Evtar Registors Duplicados
    const { email, password } = req.body;

    const usuarioExiste = await Usuario.findOne({ email });
    
    if (usuarioExiste) {
        const error= new Error('El usuario ya existe');
        return res.status(400).json({ msg: error.message });
    }
    try {
        const usuario = new Usuario(req.body);
        usuario.token = generarId();
        const UsuarioRegistrado = await usuario.save();
        res.json( UsuarioRegistrado);
    } catch (error) {
        console.log(error);
        res.status(400).send('Error en el servidor');
    }
   
}
const autenticar = async (req, res) => {
    const { email, password } = req.body;
    // Comprobar si el usuario existe
    const usuarioExiste = await Usuario.findOne({ email});
    if (!usuarioExiste) {
        const error= new Error('El usuario no existe');
        return res.status(400).json({ msg: error.message });
    }
    // Comprobar si el usuario a confirmado su cuenta
    if (!usuarioExiste.confirmado) {
        const error= new Error('Tu cuenta no a sido confirmada, revisa tu correo electronico');
        return res.status(403).json({ msg: error.message });
    }
    // Comprobar si el password es correcto
    if (await usuarioExiste.compararPassword(password)) {
        res.json({ 
            _id : usuarioExiste._id,
            nombre: usuarioExiste.nombre,
            email: usuarioExiste.email,
            token: generarJWT(),
        });
    }
    else{
            const error= new Error('Password incorrecto');
            return res.status(400).json({ msg: error.message });
        }
        
    }


export { Registrar,autenticar }