let nodemailer = require('nodemailer');

console.log(nodemailer);
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: '####',
      pass: '#####'
    }
  });
  



const htmlMail = `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ya sé kung fu</title>
</head>

<body>
    <h1>Ya sé kung fu</h1>

<div>
    <img src="https://media.giphy.com/media/vEcyRJ5yysqk/giphy.gif" alt="">
</div>


</body>

</html>`

console.log(htmlMail);

let mailOptions = {
    from: 'robertovillaresrama@gmail.com',
    to: 'david.carvajal@thebridgeschool.es',
    cc:'coldmeat@gmail.com',
    subject: 'Mi primer correo desde node',
    text: 'Esperemos que llegue',
    html: htmlMail
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });