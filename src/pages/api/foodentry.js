import dbConnect from '../../../lib/dbConnect'
import User from '../../../models/user'


export default async function foodentry(req, res) {
    const { name, price, calories, date, time } = req.body
    const { method } = req
    await dbConnect();
    if (method === "PUT") {
        const user = await User.findOne({
            email: credentials.email,
        })
        if (!result) {
            res.send("No user found")
        }
        if (result) {
            return user._id
        }
        const input = User.findByIdAndUpdate(user._id, {
            food: {
                name,
                price,
                calories,
                date,
                time,
            }
        }, (err, doc) => {
            if (err) {
                console.log(err)
            }
            console.log("Updated Entry: ", doc)
        })
        // if (result.ok) {
        //     const food = User.findByIdAndUpdate(_id)
        // }
    }
    else {
        console.log("NO PUT")
    }
}