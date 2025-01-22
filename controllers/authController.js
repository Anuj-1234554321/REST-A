
const user = require('../models/user')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const generateToken = (payload)=>{
  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

}
const signUp = async (req, res) => {
   try {
    const { userType, firstName, lastName, email, password ,confirmPassword} = req.body;

    if(!userType || !firstName || !lastName || !email || !password){
        return res.status(400).json({ message: 'All fields are required.' });
    }

     // Validate userType
     if (!['1', '2'].includes(userType)) {
        return res.status(400).json({ message: 'Invalid user type.' });
      }
      
      // chech user already exists
      const existingUser = await user.findOne({ where: { email } });
      if (existingUser) {
        return res.status(409).json({ message: 'User with this email already exists.' });
      }

    const newUser = await user.create({
        userType,
        firstName,
        lastName,
        email,
        password,
        confirmPassword
       
    })
const result = newUser.toJSON();
 delete result.password;
 delete result.deletedAt;
 result.token = generateToken({
  id:result.id
 })

    if(!result){
        return res.status(500).json({message: 'Error occurred while creating user.'});
    }
   
    return res.status(201).json({
        success: true,
        message: 'User created successfully!',
        data: result,
    })
   } catch (error) {
    console.error(error);
    res.status(500).json({message: 'Server error'})
   }

   

}
const login = async(req,res)=>{
  try{
    const {email,password} = req.body;

    if(!email || !password){
      return res.status(404).json({
        message: 'Please provide email and password.'
      })

    }
    const isExisting  = await user.findOne({where:{email}});
    if(!isExisting){
      return res.status(404).json({
        message: 'first need to register and then try to login.'
      })
    }
    const isPasswordMatched = await bcrypt.compare(password, isExisting.password);

    if (!isPasswordMatched) {
      return res.status(401).json({
        message: 'Invalid credentials.',
      });
    }
    const token = await generateToken({
      id:isExisting.id
    })
    return res.json({
      success: true,
      message: 'Login successful.',
      token:token
    })

  }catch(error){
    console.error(error);
    res.status(500).json({message: 'Server error'})

  }

}

module.exports = {signUp,login}