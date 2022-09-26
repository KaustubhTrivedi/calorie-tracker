import mongoose from "mongoose";
const UserSchema = new mongoose.Schema({
    username: {
        type: String,
    },
    email: {
        type: String,
    },
    password: {
        type: String,
    },
    food: {
        createdAt: {
            type: Date,
            default: Date.now(),
        },
        foodName: {
            type: String,
        },
        dateOfCreation: {
            type: Date,
        },
        calories: {
            type: Number,
        },
        price: {
            type: Number,
        }
    },
    isAdmin: {
        type: Boolean,
    }
})

export default mongoose.models.User ||
    mongoose.model("User", UserSchema, "users");