import mongoose, { model, Schema } from "mongoose";

const theatreSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Title is required"]
    },
    location: {
      type: String,
      required: true
    },
    email:{
        type: String,
      required: true
    },
    isActive:{
        type: Boolean,
      required: true
    } ,
    owner:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    } 
  },
  { timestamps: true }
);

const Treatre = model("theatre", theatreSchema);

export default Treatre;
