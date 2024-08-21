import mongoose, { model, Schema } from "mongoose";

const showsSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Title is required"]
    },
    date: {
      type: Date,
      required: true
    },
    time: {
      type: Date,  // Using Date type for time
      required: true
    },
    movie: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'movies'
    },
    theatre: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'theatres'
    },
    totalSeats: {
      type: Number,
      required: true
    },
    bookedSeats: {
      type: Number,
      required: true
    }
  }
);

const Shows = model("shows", showsSchema);

export default Shows;
