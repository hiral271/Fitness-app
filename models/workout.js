const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workoutSchema = new Schema({

    day: {
        type: Date,
        default: Date.now
    },
    exercises: {
        type: String,
        trim: true,
        require: "Enter a Exercise",
    },
    name:{
        type:String,
        trim:true,
        require:"Enter the exercise name ",
    },
    duration:{
        type:Number,
        require:"Enter the duration",

    },
    weight:{
        type:Number,
        require:"Enter the weight",

    },
    reps:{

        type:Number,
        require:"Enter the repetstion",
    },
    sets:{

        type:Number,
        require:"Enter the sets",
    },
    distance:{

        type:Number,
        require:"Enter the distance",
    },
    
    

})

const Workout = mongoose.model("workout",workoutSchema);

module.exports= Workout;