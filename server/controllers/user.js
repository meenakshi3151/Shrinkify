const User = require('../models/user')

const registerUser= async (req,res)=>{
    console.log(req.body)
    const {name, email, password} = req.body

    if(!email || !name || !password) {
        return res.status(400).json("Please fill all fields")
    }
    const response = await User.create({
        name,
        email,
        password
    });
    if(response){
        alert("Registered successfully")
    }
    return res.render("form")
}

module.exports= {registerUser}
