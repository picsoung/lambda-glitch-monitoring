'use strict';

var rp = require("request-promise-native")
var GLITCH_API = "https://api.glitch.com"
var GLITCH_APP = process.env.GLITCH_APP

module.exports.glitchQuestionsMonitoring = (event, context, callback) => {
  var options = {
    url: GLITCH_API+"/projects/questions",
    method: "GET"
  }

  rp(options)
  .then(function(body){
    console.log("HEHEHRE", body)
    if(body.length > 0){ // if there is a question asked
      sendQuestionToServer(JSON.parse(body)).then(function(){
        callback(null, `Questions sent`);
      })
    }else{
      callback(null, `Done`);
    }

  })


  var sendQuestionToServer = function(questions){

  var k = questions.map(function(x){
    x.details = JSON.parse(x.details); // details is a stringify JSON
    return x;
  })

  var options = {
    url: GLITCH_APP + "/questions/hook",
    method: "POST",
    json: true,
    body: { questions: k , token: process.env.VERIFICATION_TOKEN}
  }

  return rp(options).then(function(response){
    console.log("response", response)
    return response
  })
}
};
