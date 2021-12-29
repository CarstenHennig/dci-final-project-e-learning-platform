import mongoose from "mongoose";

//CONNECT TO MONGODB

export  async function connect() {
	
const connectionString = process.env.MongoDB_CString


	mongoose.connection.on("error", (e) => console.log(">> Error!", e) || process.exit(0));
	mongoose.connection.on("connecting", () => console.log(">> Connecting"));
	mongoose.connection.on("connected", () => console.log(">> Connected"));
	mongoose.connection.on("disconnecting", () => console.log(">> Disconnecting"));
	mongoose.connection.on("disconnected", () => console.log(">> Disconnected"));


	return await mongoose.connect(connectionString);

}
