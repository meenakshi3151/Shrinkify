const home = async (req,res)=>{
    return res.render("form")
}

const signup = async (req,res) =>{
    return res.render("signup")
}

const login = async(req,res)=>{
    return res.render("login")
}

module.exports= {home, signup,login} 