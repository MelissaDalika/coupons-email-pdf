const { Router } = require('express');
const router = Router();

/* const { User } = require('../models/models.js');
const {validateEmail} = require('../utils/auth.js');
const sendEmail = require("../utils/email.js")
 */
// ROUTER TEST
router.post('/send-email', (req, res) => {
    console.log(req.body);
    res.send('received');
})

/* app.post('/register', async (req, res ) => {
    const user = req.body.user

    //SERVER SIDE VALIDATION EMAIL
    const isEmailRegister = await validateEmail(user.email)
    if (isEmailRegister().isTaken) { 
      if (!isEmailRegister().isVerified) {
        res.status(400).json({success: false, message: "e-Mail already in use, but not verified"}) //Aggiungere funzionalità di resend e-mail
        return
      }
      res.status(400).json({success: false, message: "e-Mail already in use"})
      return
    }
    //SAVE IN DATA BASE
    const userDB = new User({}) // Ingresari campi da inviare al db
    await userDB.save({ validateBeforeSave: false })

    res.status(200).json({success: true, message: "Utente registrato"})

    //E-MAIL TEST
    const message = {
      from: 'noreply@coupons.com', // Sender address
      to: `${userDB.email}`,         // List of recipients
      subject: 'Conferma registrazione a Coupons', // Subject line
      html: `<h2>Grazie per  ${userDB.surname} ${userDB.name}.</h2>
      <br>
      Questi sono i tuoi coupons
      <a href="#">Link</a>` // Aggiungere attachements PDF
    };
    sendEmail(message)
  }) */

module.exports = router;