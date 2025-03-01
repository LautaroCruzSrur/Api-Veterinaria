import usuarioModel from "../models/usuarios.js";
import bcrypt from "bcrypt";
import jsonWebTokenError  from "jsonwebtoken";
import { generarToken } from "../helpers/auth.js";

class UsuariosController {
    constructor() {
       
    }

    async register(req, res) {
        try {
            const {nombre , telefono , email , password} = req.body;
            const usuarioExiste = await usuarioModel.getOne({email});
            if(usuarioExiste) {
                return res.status(400).json({message: 'El usuario ya existe'});
            }
            const passwordHash = bcrypt.hashSync(password, 10);
            const data = await usuarioModel.create({nombre, telefono, email, password: passwordHash});
            res.status(201).json(data);
                    
                } catch (error) {
                    res.status(500).json({ message: 'Error al crear mascota', error: error.message });
                }

    }
    async login(req, res) {
        try {
            const {email, password} = req.body;
            const usuario = await usuarioModel.getOne({email});
            if(!usuario) {
                return res.status(400).json({message: 'Usuario o contraseña incorrectos'});
            }
            if(!bcrypt.compareSync(password, usuario.password)) {
                return res.status(400).json({message: 'Usuario o contraseña incorrectos'});
            }
            const token = generarToken(email);
            res.status(200).json({message: 'Usuario logueado correctamente', token});
        } catch (error) {
            res.status(500).json({ message: 'Error al loguear usuario', error: error.message });
        }
    }
    async profile(req, res) {
        try {
            const usuario = await usuarioModel.getOne({email : req.emailConectado});
            res.status(201).json(usuario);
        }catch (error) {
             res.status(500).json({ message: 'Error al obtener usuario', error: error.message });
            }}
}
export default new UsuariosController