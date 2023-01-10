// REQUIREMENTS

// CONTROLLERS

// GET index
const getIndexController = (req, res) => {
  res.render('index', { css: 'index', title: 'STR Guitars'});
};

module.exports = {
  getIndexController
};