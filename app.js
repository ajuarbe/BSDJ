const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port =  process.env.PORT || 5000;

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded( { extended: true }))
app.use('/css', express.static('css'));

app.get('/', (req, res) => {
  res.render('landing', {  });
});

app.get('/companies', (req, res) => {
  const companies = [
    {
      name: 'SmartBear Software',
      image: 'https://smartbear.com/SmartBear/media/images/smartbear-color-logo-s.png'
    },
    {
      name: 'Wayfair',
      image: 'https://d2xsegqaa8s978.cloudfront.net/wayfair_0.0.4_staging/assets/logo.png'
    },
    {
      name: 'Akamai Technologies',
      image: 'https://www.akamai.com/us/en/multimedia/images/logo/akamai-logo.png'
    }
  ];
  res.render('companies', { companies: companies });
});

app.get('companies/new', (req, res) => {
  res.render('newCompany', { });
});


app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});