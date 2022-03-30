import {connect} from "mongoose";
import { MONGODB_URI } from "../keys";


(async () =>{
    try {
        const db =await connect (MONGODB_URI);
        console.log ("db connected to", db.connection.name);

    } catch (error) {
        console.error(error);
    }
})();