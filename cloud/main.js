
Parse.Cloud.define('hello', function(req, res) {
  res.success('Hi');
});
Parse.Cloud.define("sendSMS", function(request, response) {
         
   var toUser = request.params.toUser;
   var msgBody = request.params.msgBody;
  // Require and initialize the Twilio module with your credentials
         
//var client = require('twilio')('AC10b0b6b7218e1da28313e3bff9d51bba','6fb83314fdfe3a24b947df1a7754ace5');
//var client = require('twilio')('ACdad1f837df5f4d8731aedfb914d3167e','8d30e8e01ddc9a4fa8fe809a6cad3c30');
  var client = require('twilio')('AC77763d1d19ed7ecbf0628b8f4a83b316','a202acc4751f2cc62d49668e3e7cee6d');
          
  console.log("number",+toUser);         
// Send an SMS message
client.sendSms({
    to: '+919866224640',
 // to: toUser,
    //from: '+16467627663', 
    //from: '+14437207459 ',
  from:'+13237460394',  
  body: msgBody
  }, function(err, responseData) { 
    if (err) {
      console.log(err);
      response.error(err);
    } else { 
      console.log(responseData.from); 
      console.log(responseData.body);
      response.success('Message sent!');
    }
  }
);
         
});
