// const express = require('express');
// const bodyParser = require('body-parser');
// const exphbs = require('express-handlebars');
// const path = require('path');

// const app = express();
// const mailer = require('./lib/mailer')

// // View engine setup
// app.engine('handlebars', exphbs());
// app.set('view engine', 'handlebars');

// // Static folder
// app.use('/public', express.static(path.join(__dirname, 'public')));

// // Body Parser Middleware
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// app.get('/', (req, res) => {
//   res.render('contact', {layout: false});
// });

// app.post('/send', (req, res) => {
//   const output = `
//     <p>You have a new Maily!</p>
//     <h3>Message</h3>
//     <p>${req.body.message}</p>
//   `;

//   // setup email data with unicode symbols
//   // let userEmail = req.body.email
//   let mailOptions = {
//       from: "from-example@email.com", // sender address
//       to: "to@email.com", // list of receivers
//       subject: 'Maily', // Subject line
//       text: 'Hello world?', // plain text body
//       html: output // html body
//   };

//   // send mail with defined transport object
//   mailer.sendMail(mailOptions, (error, info) => {
//       if (error) {
//           return console.log(error);
//       }
//       console.log('Message sent: %s', info.messageId);   
//       // console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

//       res.render('contact', {msg:'Email has been sent'}, {layout: false});
//   });
//   });

// app.listen(3000, () => console.log('Server started...'));