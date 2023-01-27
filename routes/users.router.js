import express from "express";
import { createUsers, getUserbyName } from "../service/users.service.js";
import jwt from "jsonwebtoken";
const router = express.Router();
import bcrypt from 'bcrypt'


async function generateHashedpassword(password) {
    const NO_OF_ROUNDS = 10;
    const salt = await bcrypt.genSalt(NO_OF_ROUNDS);
    const hashedpassword = await bcrypt.hash(password, salt)
    console.log(salt)
    console.log(hashedpassword)
    return hashedpassword
}

router.post("/signup", async function (request, response) {
    const { username, password } = request.body

    const userbyname = await getUserbyName(username)
    console.log(userbyname)
    if (userbyname) {
        response.status(404).send({ username: "username already exist" })

    } else if (password.length < 8) {
        response.status(404).send({ password: "should contain more than 8 character" })

    }
    else {
        const hashedpassword = await generateHashedpassword(password)


        const result = await createUsers(
            {
                username: username,
                password: hashedpassword,
            }
        )


        response.send(result);
    }
});
// router.listen(PORT, () => console.log(`The server started in: ${PORT} ✨✨`));

router.post("/login", async function (request, response) {
    const { username, password } = request.body

    const userbyname = await getUserbyName(username)
    console.log(userbyname)
    if (!userbyname) {
        response.status(401).send({ message: "invalid credential" })

    } else {
        const storedDbPassword = userbyname.password
        const passwordcheck = await bcrypt.compare(password, storedDbPassword)
        console.log(passwordcheck)

        if (passwordcheck) {
            const token = jwt.sign({ id: userbyname._id }, process.env.SECRETKEY)
            response.send({ message: "valid credential", token: token })
        } else {
            response.status(401).send({ message: "invalid credential" })
        }
    }

});
export default router;


