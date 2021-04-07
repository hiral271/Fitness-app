const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now,
  },
 
  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: " please Enter a exercise",
      },
      name: {
        type: String,
        trim: true,
        required: "please Enter  exercise name you prefer",
      },
      duration: {
        type: Number,
        required: "please Enter  duration",
      },
      weight: {
        type: Number,
        required: "please Enter  weight",
      },
      reps: {
        type: Number,
        required: "please Enter a reps",
      },
      sets: {
        type: Number,
        required: "please Enter a set",
      },
      distance: {
        type: Number,
        required: "please Enter a distance",
      },
    },
  ],
});

const Workout = mongoose.model("workout", workoutSchema);

module.exports = Workout;
