import mongoose from "mongoose";
import { FoodSchema } from "./Food";
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
    foods: [FoodSchema],
    food: FoodSchema,
    isAdmin: {
        type: Boolean,
    }
})

export default mongoose.models.User ||
    mongoose.model("User", UserSchema, "users");