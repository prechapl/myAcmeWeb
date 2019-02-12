const Sequelize = require('sequelize');
// const app = require('./app')
const seq = new Sequelize('sequsers', 'MacPro6', '', {
  dialect: 'postgres',
  logging: false,
});

seq
  .authenticate()
  .then(() => {
    console.log('Whoo-Hoo! DB connected!.');
  })
  .catch(err => {
    console.error('no bueno, Unable to connect to db:', err);
  })

  //models

const Page = seq.define('page', {
      name: {
        type: Sequelize.STRING
      }
    });

const Content = seq.define('content', {
    title: {
      type: Sequelize.STRING
    },
    body: {
      type: Sequelize.STRING
    }
  });


  module.exports = {
    seq,
    Page,
    Content
  }
