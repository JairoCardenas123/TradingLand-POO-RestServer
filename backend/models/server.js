import express from "express"
import conectarDB from "../config/config.js";
import TipoDineroRoutes from "../routes/tipoDinero.routes.js";
class Server{
    constructor(){
        this.app = express();
        this.port = process.env.PORT
        this.TipoDineroPath = "/api/TipoDinero"
        this.mongoURI = process.env.MONGO_URI
        this.middlewares();
        this.routes();  
        this.conectarBaseDB();
    }

    middlewares(){
        this.app.use(express.static('public'));
        this.app.use(express.json())
    }

    routes(){
        this.app.use(this.TipoDineroPath,TipoDineroRoutes);
    }

    async conectarBaseDB(){
        await conectarDB();
    }

    listen(){
        this.app.listen(this.port,()=>{
            console.log(`SERVER IS RUNNING ON PORT ${this.port}`);
        })
    }



}


export default Server