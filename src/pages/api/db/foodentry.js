import dbConnect from '../../../lib/dbConnect'
import User from '../../../models/User'
import Food from '../../../models/Food'

export default async function foodentry(req, res) {
    const { name, price, calories, email } = req.body
    const { method } = req
    const db = await dbConnect()
    if (method === "POST") {
        const user = await User.findOne({
            email: email,
        }
        )
        User.findById(user._id, (err, result) => {
            if (!err) {
                if (!result) {
                    res.sendStatus(404).send("User was not found").end()
                }
                else {
                    result.foods.push({
                        foodName: name,
                        price: price,
                        calories
                    })
                    result.markModified("food")
                    result.save((error, saveresult) => {
                        if (!error) {
                            res.status(200).send(saveresult)
                        }
                        else {
                            res.status(400).send(error.message)
                        }
                    })
                }
            }
            else {
                res.status(400).send(err.message)
            }
        })
    }
}