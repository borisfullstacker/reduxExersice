const mongoose= require("mongoose")

const schema= mongoose.Schema;

const artist= new schema({
    name: {
        type:String,
        required:[true,"Plese insert a number"]
    },
    song:{
        type:String,
        required:true
    },
    pic:{
        type:String,
        required:true,
    },
    length:{
        type:Number,
        required:true,
    }


})

const myModel= mongoose.model('artist',artist);

module.exports=myModel;



