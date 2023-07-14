import Server from "./models/server.js";
import dotenv from "dotenv"
import TipoDineroRouter from "./routes/tipoDinero.routes.js"

dotenv.config();
const server = new Server

const dineroRoutes = ["/TipoDineros",TipoDineroRouter]
server.listen()
server.routes(dineroRoutes);

  