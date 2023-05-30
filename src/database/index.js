import mongoose from "mongoose";
export const DbConnection = async () => {
    mongoose.connect("mongodb+srv://supamenu-app:83Zwq4b0v4irLP3I@cluster0.yhjsocu.mongodb.net/?retryWrites=true&w=majority")
    .then(()=>{
        console.log('Connected to DB!')
    })
    .catch((e) => {
        console.error(e,"\n\nCan't connect to DB");
    })
}