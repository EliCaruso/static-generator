const ejs = require('ejs');
const fs = require('fs');
const articles = [
  {
    title: 'Scemo chi legge',
    image: 'http://tuttoin1.it/wp-content/uploads/2015/10/atomo-752x440.jpg',
    text: 'Ancora più scemo chi continua a leggere',
    lastUpdateDate: 'fra 2 ore'
  },
  {
    title: 'Gay chi legge',
    image: 'http://tuttoin1.it/wp-content/uploads/2015/10/atomo-752x440.jpg',
    text: 'Ancora più gay chi continua a leggere',
    lastUpdateDate: 'fra 2 ore'
  }
];
const html = ejs.render(fs.readFileSync('./index.html', { encoding: 'utf8' }), { articles: articles });
fs.writeFileSync('./index2.html', html, { encoding: 'utf8' });