// CONTROLLERS

// GET cart
const getCartController = (req, res) => {
  res.render('cart', { css: 'cart', title: 'Cart' });
};

module.exports = {
  getCartController
};