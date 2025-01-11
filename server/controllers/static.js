const home = async (req,res)=>{
    return res.render("form")
}

const signup = async (req,res) =>{
    return res.render("signup")
}

module.exports= {home, signup} 