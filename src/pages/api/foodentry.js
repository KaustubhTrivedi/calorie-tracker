import dbConnect from '../../lib/dbConnect'
import User from '../../models/User'
import Food from '../../models/Food'

export default async function foodentry(req, res) {
    const { name, price, calories, email } = req.body
    const { method } = req
    const db = await dbConnect()
    // if (!db) {
    //     res.send("DB not found")
    // }
    // else {
    //     res.send("DB connected")
    // }
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
                        price,
                        calories
                    })
                    result.markModified("food")
                    result.save((saveerr, saveresult) => {
                        if (!saveerr) {
                            res.status(200).send(saveresult)
                        }
                        else {
                            res.status(400).send(saverr.message)
                        }
                    })
                }
            }
            else {
                res.status(400).send(err.message)
            }

        })
        // const addedValue = User(user._id, {
        //     result
        // })
        // if (!addedValue) {
        //     res.send("Something wend wrong")
        // }
        // if (!result) {
        //     res.send("Data not inserted")
        // } else {
        //     console.log(result)
        //     res.send("data inputted")
        // }

    }


    // }
    // if (method === "POST") {
    //     const user = await User.findOne({
    //         email: email,
    //     })
    //     if (!user) {
    //         res.send("No user found")
    //     }
    //     if (user) {
    //         return user._id
    //     }
    //     User.findByIdAndUpdate(user._id, {
    //         food: {
    //             foodName: name,
    //             dateOfCreation: date,
    //             calories: calories,
    //             price: price
    //         }
    //     })
    //     if (result.ok) {
    //         const food = User.findByIdAndUpdate(_id)
    //     }
    // }
    // else {
    //     console.log("NO POST")
    // }
}