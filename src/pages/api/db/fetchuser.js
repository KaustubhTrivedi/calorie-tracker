import User from "../../../models/User"
import dbConnect from "../../../lib/dbConnect"

export default async function fetchUser(req, res) {
    await dbConnect()
    // const { email } = req.body
    const { method } = req
    if (method === 'GET') {
        const user = await User.findOne({
            email: 'kaus12tri@gmail.com'
        })
        if (!user) {
            res.status(404).send("User not found")
        }
        else {
            res.send(user)
            // return user
        }
        // User.findById(user._id, (err, result) => {
        //     if (!err) {
        //         if (!result) {
        //             res.status(404).send("User was not found")
        //         }
        //         else {
        //             return user
        //         }
        //     } else {
        //         res.status(400).send(err.message)
        //     }
        // })
    }
}