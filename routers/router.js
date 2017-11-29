const cors = require('cors');
const routes = require('express').Router().use(cors());
const Helpers = require('../helpers');

const Base = (req, res) => {
  res.send('<h1>Routes available:</h1><article><h3>/scrape</h3><p>Leads to the results of the scraping the contact us page</p>');
};

routes.get('/', Base);
routes.post('/scrape', Helpers.readUrl);

module.exports = routes;
