import TipoDinero from "../models2/TipoDInero.js"

const obtenerDinero = async(req,res)=>{
    const TipoDineros = await TipoDinero.find()
    res.json(TipoDineros)
}

export {obtenerDinero}