const express = require('express');
const sendMail = require('./mail.js');
const router = express.Router();
const log = console.log;
const app = express();
const path = require('path');
const PORT = 8080;
const bodyParser = require('body-parser');

app.engine('html', require('ejs').renderFile);

// Static folder
app.use('/public', express.static(path.join(__dirname, 'public')));
router.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
  //__dirname : It will resolve to your project folder.
});

// Body Parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.render("index.html")
});

app.listen(PORT, () => log('Server is starting on PORT,', 8080));

app.post('/email', (req, res) => {
  const { subject, email, text } = req.body;
  log('Data: ', req.body);

  sendMail(email, subject, text, function(err, data) {
      if (err) {
          res.status(500).json({ message: 'Internal Error' });
      } else {
          res.status({ message: 'Email sent!!!' });
      }
  });
});