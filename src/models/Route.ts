import mongoose, {Schema, Document} from "mongoose";
interface IRoute extends Document {
    path : string;
    method : string;
    allowedRoles: mongoose.Types.ObjectId[]; //Danh sách ObjId của roles
    description ?:string;
}
//Tạo Schema cho Route

const RouteSchema : Schema = new Schema({
    path : {type : String , require : true},
    method : {type : String, require : true},
    allowedRoles : [
        {
            type : mongoose.Schema.ObjectId.cast,
            ref : "AllCode",
            require : true
        }
    ],
description : {type : String}
},
{timestamps: true}
)
 
const Route = mongoose.model<IRoute>("Route", RouteSchema);
export default Route;