import Conversation from "../models/conversation.model.js"
import Message from "../models/message.model.js";


export const sendMessage = async (req,res)=>{
    try {
        const {message} = req.body ;
        const {id: receiverId} = req.params;
        const senderId = req.user._id;
        let conversation = await Conversation.findOne({
            participants:{$all:[senderId,receiverId]}
        })

        if(!conversation){
            conversation = await Conversation.create({
                participants: [senderId,receiverId],
            })
        }
        
        const newMessage = new Message ({
            senderId ,
            receiverId,
            message,
        })

        if(newMessage){
            conversation.messages.push(newMessage._id); 
        }

        // await conversation.save();   // it will take longer time hence instead of this we will 
        // await newMessage.save();

        // runing both the above parallel 
        await Promise.all([conversation.save(), newMessage.save()]); 


        // SOCKET IO Functionality --->



        res.status(201).json(newMessage)


    } catch (error) {
        console.log("Error in sendMessage controller", error.message);
        res.status(500).json({error:"Internal server error"})
        
    }

}


export const getMessages = async (req,res)=>{
    try {
        const{id:userToChatId} = req.params;
        const senderId = req.user._id;

        const conversation = await Conversation.findOne({
            participants:{$all:[senderId,userToChatId]},
        }).populate("messages"); // NOT REFERENCE BUT ACTUAL MESSAGES   // populate gives the whole message object rather returning only the id of the message 

        if(!conversation){
            return res.status(200).json([]);
        }

        const messages = conversation.messages;
        res.status(200).json(messages)
        
    } catch (error) {
        console.log("Error in getMessages controller :" , error.message);
        res.status(500).json({error: "Internal server error"});
        
    }
}

//  1hr 30 min done 