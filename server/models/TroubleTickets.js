var mongoose = require("mongoose");
var Schema = mongoose.Schema;


// Schema with 3 properties //
var TroubleTicket = new Schema({
    ticket_person_reporting:String,
    ticket_problem_description:String,
    ticket_date:Date,
});


// exporting Schema //
module.exports=mongoose.model("TroubleTicket", TroubleTicket);