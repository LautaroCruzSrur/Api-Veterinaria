import MascotasModelo from '../models/mascotas.js';

class mascotasController{
    async create(req, res){ 
        try {
            const data = req.body; 
            const result = await MascotasModelo.create(data);
            res.status(201).json(result);
            
        } catch (error) {
            res.status(500).json({ message: 'Error al crear mascota', error: error.message });
        }
    }

    async update(req, res){
        try {
            
            const {id} = req.params;
            const data = req.body;
            const result = await MascotasModelo.update(id, data);
            res.status(201).json(result);
            
        } catch (error) {
            res.status(500).json({message: 'Error al actulizar mascota'});
        }
    }
    async delete(req, res){
        try {
            const {id} = req.params;
            const result = await MascotasModelo.delete(id);
            res.status(201).json(result);
            
        } catch (error) {
            res.status(500).json({message: 'Error al eliminada mascota'});
        }
    }
    async getAll(req, res){
        try {
            const data = req.body; 
            const result = await MascotasModelo.getAll(data);
            res.status(201).json(result);
            
        } catch (error) {
            res.status(500).json({message: 'Error al obtener mascotas'});
        }
    }
    async getOne(req, res) {
        try {
            const { id } = req.params;
            const result = await MascotasModelo.getOne(id);
    
            if (!result) {
                return res.status(404).json({ message: "Mascota no encontrada" });
            }
    
            res.status(200).json(result);
        } catch (error) {
            console.error("Error al obtener mascota:", error);
            res.status(500).json({ message: "Error al obtener mascota" });
        }
    }
}    

export default new mascotasController;