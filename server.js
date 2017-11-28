const express = require('express');
const request = require('request');
const cheerio = require('cheerio');

const app = express();

app.get('/scrape', (req, res) => {
  const url = 'http://ao.com/help-and-advice/help-with-my-order/contact-us';
  request(url, (error, response, html) => {
    if (error) return error;
    const $ = cheerio.load(html);
    let foundContent = '';
    $('.contactForm').filter(function () {
      const data = $(this);
      foundContent = data.children().text();
    });
    res.send(JSON.stringify(foundContent, null, 4));
  });
});

app.listen('8081');

module.exports = app;
