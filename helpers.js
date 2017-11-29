const rp = require('request-promise');
const cheerio = require('cheerio');

exports.readUrl = (req, res) => {
  const domain = `https://www.${req.body.email.split('@')[1]}`;
  rp(`${domain}`, (error, response, html) => {
    if (error) return error;
    return html;
  }).then((html) => {
    const $ = cheerio.load(html);
    const links = $('a');
    const foundContent = {
      links: [],
    };
    $(links).each((i, link) => {
      const linkText = $(link).text();
      const linkHref = $(link).attr('href');
      foundContent.links.push(`${linkText}=${linkHref}`);
    });
    res.status(200).json({ foundContent });
  });
};
