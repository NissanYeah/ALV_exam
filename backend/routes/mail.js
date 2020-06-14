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
    to: "nissenyeh@gmail.com,handeltonido@gmail.com", // list of receivers
    subject: "User's comment!", // Subject line
    text: message, // plain text body
    html: message, // html body
  });

  return info

}




module.exports = router