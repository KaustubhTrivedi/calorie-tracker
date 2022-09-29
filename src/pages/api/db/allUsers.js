import dbConnect from "../../../lib/dbConnect"
import User from "../../../models/User"

export default async function fetchUser(req, res) {
    await dbConnect()
    // const { email } = req.body
    const { method } = req
    if (method === 'GET') {
        const user = await User.find({})
        if (!user) {
            res.status(404).send("Users not found")
        }
        else {
            res.send(user)
        }
    }
}