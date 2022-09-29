import dbConnect from "../../../lib/dbConnect";
import User from "../../../models/User";

export default async function handler(req, res) {
    await dbConnect()
    const { email, foodId } = req.body
    const { method } = req
    if (method === "POST") {

        const user = User.findOne({
            email: email,
        })

        const result = User.findByIdAndUpdate({ _id: user._id },
            {
                "$pull":
                {
                    foods:
                        { _id: foodId }
                }
            },
            { new: true }, (err) => {
                if (err) {
                    console.log(err)
                }
            }
        )
        if (result) {
            res.send("Food item was deleted")
        }
        else {
            res.send("Something went wrong!")
        }
    } else {
        console.log("NO POST")
    }
}