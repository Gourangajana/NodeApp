import mongoose, { model, Schema } from "mongoose";

const bookingSchema = new Schema(
  {
    user: {
      type: String,
      required: [true, "User is required"]
    },
    transactionId: {
      type: Number,  // Changed to Number type
      required: true
    },
    seats: {
      type: Number,  // Changed to Number type assuming it's a number of seats booked
      required: true
    },
    showId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'shows',
      required: true
    }
  },
  { timestamps: true }  // Add timestamps for createdAt and updatedAt fields
);

const Booking = model("booking", bookingSchema);

export default Booking;
