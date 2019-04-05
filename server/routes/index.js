var express = require('express');
var router = express.Router();

// import Schema //
var TroubleTicketsCollection = require("../models/TroubleTickets");
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// url path that takes 3 peramater out in and creates data //
router.get("/tickets/seeddata/:ticket_person_reporting/:ticket_problem_description/:ticket_date", (request, response) => {
  TroubleTicketsCollection.create({
    ticket_person_reporting:request.params.ticket_person_reporting,
    ticket_problem_description:request.params.ticket_problem_description,
    ticket_date:request.params.ticket_date,

  }, (errors, results) => {
    if(errors)
    {
      response.send(errors)
    }
    else
    {
      response.send(results)
    }
  })
});


// endpoint that finds all the data and prints the results //
router.get("/getTicketInfo", (request, response) => {
  TroubleTicketsCollection.find({}, (errors, results)=>{
    if(errors)
    {
      response.send(errors)
    }
    else
    {
      response.send(results)
    }
  })
});

// export routes //
module.exports = router;
