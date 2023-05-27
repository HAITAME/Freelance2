import mongoose from 'mongoose';
const { Schema } = mongoose;

const ConversationSchema = new Schema({
    Id:{
        type: String,
        required:true,
        unique: true, 
    },
     sellerId:{
        type: String,
        required:true,
    },
    buyerId:{
        type: String,
        required:true,
    },
    readByseller:{
        type: Boolean,
        required:true,
    },
    readByseller:{
        type: Boolean,
        required:true,
    },
    lastMessage:{
        type: String,
        required:false,
    },
},{
    timestamps : true   
});

export default mongoose.model("Conversation",ConversationSchema) 