const express = require('express');
// const seq = require('./db');
const { seq, Page, Content } = require('./db');

const initDb = () => {
  return seq
    .authenticate()
    .then(() => {
      Page.hasMany(Content);
      Content.belongsTo(Page);
        return seq.sync({force: true})
    })
};

initDb()
  .then(() => {
    //createPage is a promise
    const createPage = Page.create({name: 'Home'});
    const createContent = Promise.all([
      Content.create({title: 'Welcome Home 1', body: 'xoxoxo' }),
      Content.create({title: 'Welcome Home 2', body: 'oxoxox' })
    ])
    return Promise.all([createPage, createContent]);
  })
  .then(([page, contents]) => {
    const [home1, home2] = contents;
    return page.setContents(contents)
  })
  .then(() => {
    const createEmpPage = Page.create({name: 'Employees'});
    const createEmpContent = Promise.all([
      Content.create({title: 'CEO', body: 'Moe' }),
      Content.create({title: 'CTO', body: 'Larry' }),
      Content.create({title: 'COO', body: 'Curly' }),
    ])
    return Promise.all([createEmpPage, createEmpContent]);
  })
  .then(([page, contents]) => {
    const [ceo, cto, coo ] = contents;
    return page.setContents(contents)
  })
  .then(() => {
    const createConPage = Page.create({name: 'Contact'});
    const createConContent = Promise.all([
      Content.create({title: 'Moe', body: 'moe@acmeuser.com' }),
      Content.create({title: 'Larry', body: 'larry@acmeusers.com' }),
      Content.create({title: 'Curly', body: 'curly@acmeusers.com' }),
    ])
    return Promise.all([createConPage, createConContent]);
  })
  .then(([page, contents]) => {
    const [moe, larry, curly ] = contents;
    return page.setContents(contents)
  })
  .then(() => {
    console.log('I have seeded the seq')
  })
  .catch((e) => {
    console.error(e)
  });


  // const homePage = await Content.findAll({
  //   where: {
  //     pageId: 1
  //   }
  // })

  // const getContents = async (pageId) => {
  //   return Content.findAll({
  //    where: { pageId: 1 }
  //   });
  // }


// const createPages = () => {
//   Page.create({name: 'Home'})
//   Page.create({name: 'Employees'})
//   Page.create({name: 'Contact'})
// }

// const createContents = () => {
//   Content.create({title: 'Welcome Home 1', body: 'xoxoxo' })
//   Content.create({title: 'Welcome Home 2', body: 'oxoxox' })
//   Content.create({title: 'CEO', body: 'Moe' })
//   Content.create({title: 'COO', body: 'Larry' })
//   Content.create({title: 'CTO', body: 'Curly' })
//   Content.create({title: 'Moe', body: 'moe@acmeusers.com' })
//   Content.create({title: 'Larry', body: 'larry@acmeusers.com' })
//   Content.create({title: 'Curly', body: 'curly@acmeusers.com' })
