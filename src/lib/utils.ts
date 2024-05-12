import * as mongoose from "mongoose";

let connection = { isConnected: null };

export const connectToDb = async () => {
  try {
    if (connection.isConnected) {
      console.log("Connected!");
      return;
    }
    const db = await mongoose.connect(process.env.MONGODB as string);
    // @ts-ignore
    connection.isConnected = db?.connection[0].readyState;
  } catch (err) {
    console.log(err);
    throw new Error((err as Error).message);
  }
};
