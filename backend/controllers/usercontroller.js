const router = require('../routes/userroutes');
const User = require('../schema/UserSchema');
const jwt = require('jsonwebtoken')




async function usersignup(req,res){
    const data = req.body;
    const exsistinguser = await User.findOne({email:data.email});
    if(exsistinguser !== null )
    {
        return res.json({message:'user already exsist'});
    }
    const newuser = new User(data);
    await newuser.save();
    res.json({message:'user signed up successfully'})    

}
async function userlogin(req,res){
    const data = req.body;
    const user = await User.findOne({email:data.email});
    if(!user)
    {
        return res.json({message:'user does not exsist'});
    }
    if(data.password !== user.password)
    {
        return res.json({message:'password does not matched'})
    }

    function generateToken(userId) {
        const payload = {
          userId: userId,
        };
      
        // Set expiration time (optional)
        const expiresIn = '1h';
      
        // Sign the token with a secret key
        const token = jwt.sign(payload, 'your-secret-key', { expiresIn });
      
        return token;
    }
      
    const id = user._id;
    const token = generateToken(id);
    console.log(token);
    return res.json({message:'login done successfully'});
}





module.exports = {
    usersignup,userlogin
}