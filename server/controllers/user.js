const User = require('../models/user')

const registerUser = async (req, res) => {
    try {
        console.log(req.body);
        const { name, email, password } = req.body;

        if (!email || !name || !password) {
            return res.status(400).json("Please fill all fields");
        }

        const response = await User.create({
            name,
            email,
            password,
        });

        if (response) {
            console.log("Registered successfully");
        }
        return res.redirect('/login');
    } catch (error) {
        console.error("Error registering user:", error);
        return res.status(500).json("Server error");
    }
}

const loginUser = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email, password })
    if (!user)
        return res.render('login', {
            error: "Invalid data"
        })
    return res.redirect('/home')

}
module.exports = { registerUser, loginUser }
