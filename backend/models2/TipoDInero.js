import mongoose from "mongoose";

const tipoDineroSchema = mongoose.Schema({
    nombre:{    
        type:String,
        required:true,
        trim:true
    },
    fiabilidad:{
        type:String,
        required:true,
        trim:true
    },
    tipo:{
        type:String,
        required:true,
        trim:true
    }
    },
    {
        timestamps:true,
    }
)

const TipoDinero = mongoose.model("TipoDineros",tipoDineroSchema)

export default TipoDinero