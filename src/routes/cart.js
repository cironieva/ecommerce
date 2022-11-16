const {Router} = require('express');

const router = Router();

router.get('/cart', (req, res) => {
  res.render('cart', { css: 'cart', title: 'Cart'});
});

module.exports = router;