import {config} from "dotenv";
config();

export const MONGODB_URI =
process.env.MONGODB_URI ||  "mongodb+srv://Fernanda:Ferchi05@sm51.thfq9.mongodb.net/veterinaria?retryWrites=true&w=majority"

//  url de la app