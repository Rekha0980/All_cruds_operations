const mongoose= require("mongoose");
const noteSchema=mongoose.Schema({
    title:String,
    note:String,
    category:String,
    userID:String
   
})
const NoteModel=mongoose.model("book",noteSchema)

module.exports={
    NoteModel
}