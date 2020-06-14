const express = require('express')
const router = express.Router()
const nodemailer = require("nodemailer");
// const admin = require("../admin").admin

// var db = admin.database();
// var ref = db.ref("user");

router.post('/' , (req, res)=>{
  console.log('trigger')

  
  sender = req.sender
  message = req.message
  console.log(sender,message)

  // sendMail(sender,message)
})



async function sendMail(sender,message) {

  let testAccount = await nodemailer.createTestAccount();

  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: testAccount.user, // generated ethereal user
      pass: testAccount.pass, // generated ethereal password
    },
  });

  let info = await transporter.sendMail({
    from: sender, // sender address
    to: "nissenyeh@gmail.com", // list of receivers
    subject: "User's comment!", // Subject line
    text: message, // plain text body
    html: message, // html body
  });

  console.log("Message sent: %s", info.messageId);
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

}




module.exports = router