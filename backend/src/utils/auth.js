// NOT FINISH CODE

/* const { User } = require('../models/models.js')

async function validateEmail(email, verifiedEmail) {
    const userEmail = await User.findOne({ email })
    //return userEmail ? true : false
    return () => {
      if (userEmail) {
        return { isTaken: true, isVerified: (userEmail.verifiedEmail) }
      } else {
        return { isTaken: false }
      }
    }
  }

module.exports = {validateEmail};


or 


const isEmailExist = await User.findOne({ email: req.body.email });

  // throw error when email already registered
  if (isEmailExist)
    return res.status(400).json({ error: "Email already exists" }); */