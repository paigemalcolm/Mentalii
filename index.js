var sid = "ACacd49ea888584f4147977466494b58fe";
var auth_token = "aaf395137f7296dd5fa97b862f17fc9b";

var twilio = require("twilio")(sid, auth_token);

twilio.messages
    .create({
    from: "+13149472855",
    to: "+14044415811",
    body: "Mentalii, I'm in Jamaica",
    })
.then(function(res){console.log("message sent!")})
.catch(function(err) {
    console.log(err);
});