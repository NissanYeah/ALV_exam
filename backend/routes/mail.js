require('dotenv').config();
const express = require('express')
const router = express.Router()
const nodemailer = require("nodemailer");

router.post('/' , (req, res)=>{
  
  sender = req.body.sender
  message = req.body.message

  const result = sendMail(sender,message)

  result.then((info)=>{
    res.send({
      "status":"success",
      "Message sent: %s": info.messageId,
      "Preview URL: %s":nodemailer.getTestMessageUrl(info)
    })
  })

})

console.log(process.env.ACCOUNT)

async function sendMail(sender,message) {

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    secure: true,
    auth: {
      type: "OAuth2",
      user: process.env.ACCOUNT,
      clientId: process.env.CLINENTID,
      clientSecret: process.env.CLINENTSECRET,
      refreshToken: process.env.REFRESHTOKEN,
    }
  });

  let info = await transporter.sendMail({
    from: sender, // sender address
    to: "nissenyeh@gmail.com,handeltonido@gmail.com,hr@avancevl.com", // list of receivers
    subject: "User's comment!", // Subject line
    text: message, // plain text body
    html: message, // html body
  });

  return info

}




module.exports = router