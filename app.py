import os
from flask import Flask, request, redirect
from twilio.twiml.messaging_response import MessagingResponse

app = Flask(__name__)

@app.route("/sms", methods=['GET', 'POST'])
def sms_reply():
    while True:
        resp = MessagingResponse()

        resp.message("The Robots are coming! Head for the hills!")

        return str(resp)

if __name__ == "__main__":
    app.run(debug=True)
