import { hashPassword } from '../../../lib/auth/auth'
import dbConnect from '../../../lib/dbConnect'
import User from '../../../models/user'
// import Token from '../../../models/Token'
export default async function signup(req, res) {

    // console.log(req.data)
    const { username, email, password } = req.body
    const { method } = req
    if (method === "POST") {
        await dbConnect();

        // Checking for existing user
        const existingUser = await User.findOne({
            email: email.toLowerCase(),
        }).exec();
        if (existingUser) {
            // console.log(existingUser);
            console.log("User Already exists")
            res.status(422).json({ error: "User already exists" });
            return;
        } else {
            // Hashing password
            const hashedPassword = await hashPassword(password)

            // Creating new user
            const result = await User.create({
                username: username,
                email: email,
                password: hashedPassword,   
            })
            res.status(200).json({ message: "User created!" }, result)
        }
    }
    else {
        res.json("No POST")
    }
}