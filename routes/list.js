'use strict'

let express = require('express');
let router = express.Router();


let affiche = require('../afisajs');

/* GET items listing. */
router.get('/', function(req, res, next) {

  console.log('Rendering page');
  let list;
  let title = 'List title';

  affiche.getAfficheApplication().getAfficheListController().getAfficheListContainer().getList(list)
      .then(function(list) {
            res.render('pages/list', {

              list: list,
              title: title
            })
          }
      )
      .catch(function(err) {
        console.log(err);
        res.render('error');
      })
});

module.exports = router;
