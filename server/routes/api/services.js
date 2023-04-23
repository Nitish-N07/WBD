//nodemailer verifyUserEmail function
const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    secure: false,
    auth: {
        user: 'ffsdgroup19@gmail.com',
        pass: 'gratisagency'
    },
});

module.exports = {
    verifyUserEmail: async function verifyUserEmail(name, userEmail,username, token) {
        try{
            let info = await transporter.sendMail({
                from: 'ffsdgroup19@gmail.com',
                to: userEmail,
                subject: "hello" + name + " please verify your email by clicking on the link below",
                html: "localhost:3000/verify/" + username+'/'+token
        })
    }catch(err){
        console.log(err);
    }
}
}