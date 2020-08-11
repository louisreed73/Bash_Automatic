import { Schema } from "mongoose";

export const SMesa = new Schema({
         createdAt: {
           type: Date,
           default: Date.now(),
         },
         name: {
           type: String,
           required: true,
         },
         price: {
             type:Number,
             required:true
         }
       });