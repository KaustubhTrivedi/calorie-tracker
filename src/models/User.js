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
        foodName: {
            type: String,
        },
        dateOfCreation: {
            type: Date,
        },
        calories: {
            type: String,
        },
        price: {
            type: String,
        }
    },
    isAdmin: {
        type: Boolean,
    }
})

export default mongoose.models.User ||
    mongoose.model("User", UserSchema, "users");