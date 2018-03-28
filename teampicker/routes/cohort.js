var express = require('express');
var router = express.Router();
const knex = require("../db");


/* GET home page. */
router.get('/', function(req, res, next) {
  knex
      .select("*")
      .from("cohorts")
      .orderBy("createdAt", "DESC")
      .then(
        cohorts => {
          res.render("cohort/index", {cohorts: cohorts});
        }
      )
});

router.get('/new', function(req, res, next) {
  res.render('cohort/new');
});

router.post("/post",(req,res) => {
  const logoUrl = req.body.logoUrl;
  const name = req.body.name;
  const members = req.body.members

  knex
    .insert({
      logoUrl: logoUrl,
      name: name,
      members: members
    })
    .into("cohorts")
    .then(() => {
      // Db queries with knex are asynchronous like
      // setTimeout or setInterval. If you want to write
      // code that depends on a result from a query,
      // you must write it inside this callback (or the callback
      // passed to the .then method.)
      res.redirect("/cohort/")
    });
});



router.get("/:id", (req, res) => {


  const postId = req.params.id;
  const quantity = req.query.quantity;
  const method = req.query.method;

  if (isNaN(parseInt(postId, 10))) {
    return res.redirect("/");
  }



  knex
    .select("*")
    .from("cohorts")
    .where({id: postId})
    .limit(1)
    .then(([cohort]) => {
      // 👆 Array destructuring in arguments
      // Works as examples below, but also works on arguments.
      res.render("cohort/show", {cohort: cohort, method:method, quantity:quantity });
    })



})


module.exports = router;
