import TipoDinero from "../models2/TipoDInero.js"

const obtenerDinero = async(req,res)=>{
    const TipoDineros = await TipoDinero.find()
    res.json(TipoDineros)
}


const agregarCategoria = async (req,res) => {

    const tipodinero = new TipoDinero(req.body)

    try {
        const nuevaTipoDinero = await tipodinero.save();

        res.json(nuevaTipoDinero);

    } catch (error) {
        console.log(error);
    }
}

const borrarCategoria = async (req,res) =>{
    try {
        await TipoDinero.deleteOne({_id:req.params.id});
        res.status(204).send();
    } catch (error) {
        res.status(404);
        res.send({error:"TipoDinero No Existe"})
    }
}

const actualizarCategoria = async (req,res) =>{
    try {
        const categoria = await TipoDinero.findOne({_id:req.params.id})

        if(req.body.categoria){
            categoria.categoria = req.body.categoria;
        }

        if(req.body.producto){
            categoria.producto = req.body.producto;
        }

        if(req.body.talla){
            categoria.talla = req.body.talla;
        }

        await categoria.save();
        res.send(categoria)
    } catch (error) {
        res.status(404),
        res.status({error:"categoria no existe"})
    }
}

export {obtenerDinero,agregarCategoria,borrarCategoria,actualizarCategoria}

