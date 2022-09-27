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
        type: String,
    },
    price: {
        type: String,
    }
})
export default mongoose.models.Food ||
    mongoose.model("Food", FoodSchema, "food");