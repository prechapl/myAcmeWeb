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


// initDb(true)
//     .then(() => {
//         // createProject is a promise
//         const createPage = Page.create({
//             name: 'homePage',
//         });

//         const createContent = Promise.all([
//             Content.create({ title: 'Welcome Home 1', body: 'xoxoxo' }),
//            Content.create({ title: 'Welcome Home 2', body: 'xoxoxo' }),
//         ]);

//         return Promise.all([createPage, createContent]);
//     })
//     .then(([page, content]) => {
//         const [home1, home2] = tasks;

//         return page.setContent(tasks);
//     })
//     .then(() => {
//         console.log('I have seeded the database.');
//         process.exit(0);
//     })
//     .catch((e) => {
//         console.error(e);
//         process.exit(1);
//     });


//   Page.sync({force: true})

//   await Page.create({ title: 'Welcome Home 1', body: 'xoxoxo' })


// }


  // db.sync({force: true})
  //   .then(() => {
  //     Page.create({name: 'HomePage'})
  //   })
  //   .then( HomePage => Content.create({ title: 'Welcome Home 1', body: 'xoxoxo' }))
  //   .then(() => Page.findAll({
  //     include: [ Content ]
  //   }))
  //   .then(() => {
  //     return Content.findAll({
  //       include: [ Page ]
  //     })
  //   })
  //   .then(() => {
  //     return Page.findOne({
  //       where: {
  //         name: 'HomePage'
  //       }
  //     })
  //   })


//   const [homePage, employeesPage, contactPage] = await Promise.all([
//     Page.create({name: 'Home'}),
//     Page.create({name: 'Employees'}),
//     Page.create({name: 'Contact'}),
//   ]);

//   const contentCreated = await Content.create({ title: 'Welcome Home 1', body: 'xoxoxo' });

//   const associatedContent = await contentCreated.setPage(homePage);
//   console.log(Page)

//   return associatedContent; // I dont know what you want to return...
// }

// return setupDb();


//   Content.belongsTo(Page);
//   Page.hasMany(Content);

// const initDb = async function (){
// // force: true will drop the table if it already exists
// await db.sync({force: true}).then(() => {
//   // Table created
//   return Page.create({
//     name: 'Home'
//   });
// });

// const homePage = Page.findAll()
//   .then(());


// console.log(homePage)

// }

