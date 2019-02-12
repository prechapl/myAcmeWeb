const express = require('express');
const app = express();
const morgan = require('morgan');

// const { homePage } = require('./seedSync')
const { Page, Content } = require('./db');
// console.log(db.Page)

app.use(morgan('dev'));

app.use('/public', express.static('assets'));

const header = () => {
  return `
  <head>
    <link rel="stylesheet" href="https://use.typekit.net/wgs3ppy.css">
    <link rel='stylesheet' href='/public/style.css' />
    <title> ACME USERS </title>
  </head>
  `;
};

const navigation = () => {
  return `
  <div id='LogoNav'>
  <h1 class='logo'> ACME USERS INC. </h1>
  <a class='header1' href='/employees'> Employess </a>
  <a class='header1' href='/'> Home </a>
  <a class='header1' href='/contact'> Contact </a>
  </div>
  `;
};

app.get('/', (req, res, next) => {
  res.redirect('/home');
})

app.get('/home',  (req, res, next) => {
    Content.findAll({
      where: { pageId: 1 }
    })
    .then((contents) => {
      res.send(`
            <html>
              ${header()}
              <body>
                <div>
                ${navigation()}
                </div>
                <div class='content'>
                ${contents[0].title}
                ${contents[0].body}
                </div>
                <div class='content'>
                ${contents[1].title}
                ${contents[1].body}
                </div>
              </body>
            </html>
          `)})
      .catch(next);
    });

  app.get('/employees', (req, res, next) => {
    Content.findAll({
      where: { pageId: 2 }
    })
    .then((contents) => {
      res.send(`
            <html>
              ${header()}
              <body>
                <div>
                ${navigation()}
                </div>
                <div class='content'>
                ${contents[0].title}<br>
                ${contents[0].body}
                </div>
                <div class='content'>
                ${contents[1].title}<br>
                ${contents[1].body}
                </div>
                <div class='content'>
                ${contents[2].title}<br>
                ${contents[2].body}
                </div>
              </body>
            </html>
          `)})
      .catch(next);
  });

  app.get('/contact', (req, res, next) => {
    Content.findAll({
      where: { pageId: 3 }
    })
    .then((contents) => {
      res.send(`
            <html>
              ${header()}
              <body>
                <div>
                ${navigation()}
                </div>
                <div class='content'>
                ${contents[0].title}<br>
                ${contents[0].body}
                </div>
                <div class='content'>
                ${contents[1].title}<br>
                ${contents[1].body}
                </div>
                <div class='content'>
                ${contents[2].title}<br>
                ${contents[2].body}
                </div>
              </body>
            </html>
          `)})
      .catch(next);
  })


module.exports = app;

