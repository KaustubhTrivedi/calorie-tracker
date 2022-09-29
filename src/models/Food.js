import mongoose from 'mongoose'
export const FoodSchema = new mongoose.Schema({
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    foodName: {
        type: String,
    },
    calories: {
        type: Number,
    },
    price: {
        type: Number,
    }
})
export default mongoose.models.Food ||
    mongoose.model("Food", FoodSchema, "food");