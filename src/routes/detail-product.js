const {Router} = require('express');

const router = Router();

router.get('/detail-product', (req, res) => {
  res.render('detail-product', { css: 'detail-product', title: 'Detail Product'});
});

module.exports = router;