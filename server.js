// const initDb = require('./db');
const app = require('./app');
// const { seq, Page, Content } = require('./db');

const port = process.env.PORT || 3001;

app.listen(port, () => console.log(`listening on port ${port}`));

// module.exports =  { seq, homePage }

// seq.sync({force: true})
//   .then(() => Page.create({name: 'Home'})
//   .then((Home) => {
//     return Content.create({ title: 'Welcome Home 1', body: 'xoxoxo', PageId: Home.id });
//   })
//     .then(() =>  Page.findOne({ where: { name: 'Home' }})));

// const setupDb = async () => {
//   Page.hasMany(Content);
//   Content.belongsTo(Page);

//   await seq.sync({ force: true });

//   const [homePage, employeesPage, contactPage] = await Promise.all([
//     Page.create({name: 'Home'}),
//     Page.create({name: 'Employees'}),
//     Page.create({name: 'Contact'}),
//   ]);

//   const associatedContent = await contentCreated.setPage(homePage);

//   return

// }

// setupDb()


// const initDb = async () => {
//   await db.sync({force: true})
//     .then(() => Promise.all([
//             Page.create({name: 'Home'}),
//             Page.create({name: 'Employees'}),
//             Page.create({name: 'Contact'}),
//    ]))
//   }


// initDb()

  // db.sync({force: true})
  // .then(() => Promise.all([
  //           Page.create({name: 'Home'}),
  //           Page.create({name: 'Employees'}),
  //           Page.create({name: 'Contact'}),
  //  ]))
  // .then(([homePage]) => {
  //            return Content.create({title: 'Welcome Home 1', body: 'xoxoxo', PageId: homePage.id});
  // })
  // .then(() => { console.log('Successfully created'); });


  // .then( HomePage => Content.create({ title: 'Welcome Home 1', body: 'xoxoxo' }))

  // .then(() => Page.findAll({
  //   include: [ Content ]
  // }))
  // .then(() => {
  //   return Content.findAll({
  //     include: [ Page ]
  //   })
  // })
  // .then(() => {
  //   return Page.findOne({
  //     where: {
  //       name: 'HomePage'
  //     }
  //   })
  // })
  // await models.Page.sync()
  // await User.sync({force: true})

