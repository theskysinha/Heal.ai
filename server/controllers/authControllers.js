const User = require ('../models/User');
const {hashPassword, comparePassword} = require('../helpers/auth');
const jwt = require ('jsonwebtoken');


const test = (req,res)=>{
    res.json('test is working')
}

//Register endpoint

const registerUser = async(req,res)=>{
    try {   
        const{email,password}= req.body;
        if(!password|| password.length<6)
        {
            return res.json({
                error:'password is required and should be 6 characters long'
            })
        };
        //Check email
        const exist = await User.findOne({email});
        if(exist )
        {
            return res.json({
                error:'Email is already taken'
            })
        }

        const hashedPassword=await hashPassword(password)
        //Create user in database
        const user = await User.create({
            email,
            password:hashedPassword
        })

        return res.json(user)
    }catch(error){
        console.log(error)

    }

};

//Login Endpoint
const loginUser = async (req,res)=>{
    try{
        const{email,password} = req.body;

        //Check is user exists

        const user = await User.findOne({email});
        if(!user) {
            return res.json({
                error:'User not found'
            })
        }


        //Check if password is a match
        const match = await comparePassword(password,user.password)
        if(match)
        {
            jwt.sign({email: user.email, id: user.id}, process.env.JWT_SECRET,{},(err,token)=>{
                if(err) throw err;
                res.cookie('token', token).json(user)
            })
            // res.json('passwords match')
        }
        if(!match)
        {
            res.json('passwords dont match')
        }
    }catch(error){  
        console.log(error)
    }
}

    const getProfile=(req,res)=>{
    const{token}=req.cookies
    if(token){
        jwt.verify(token,process.env.JWT_SECRET, {}, (err,user) =>{
            if (err) throw err;
            res.json(user)
        })
    }
    else{
        res.json(null)
    }
}

const logoutUser = (req,res)=>{
    res.clearCookie('token').json({
        message:'Logged out successfully'
    })
}

module.exports={
    test,
    registerUser,
    loginUser,
    getProfile,
    logoutUser
}