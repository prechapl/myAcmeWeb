// const initDb = require('./db');
const app = require('./app');
// const { seq, Page, Content } = require('./db');

const port = process.env.PORT || 3001;

app.listen(port, () => console.log(`listening on port ${port}`));

// module.exports =  { seq, homePage }

