var express = require('express');
var router = express.Router();
const queries = require('./../db/client_queries');

router.get('/clients/:user_id', function(req, res, next) {
  queries.getAll(req.params.user_id).then(results => {
    res.status(200).send(results);
  });
});

module.exports = router;
