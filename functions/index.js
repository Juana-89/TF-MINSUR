const functions = require("firebase-functions");
const sgMail = require("@sendgrid/mail");
const cors = require("cors")({origin: true});
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.sendEmail = functions.https.onRequest((request, response) => {
  cors(request, response, () => {
    const {body} = request;
    // ES6
    sgMail.send(body.msg).then(
        () => {
          response.send("Message sent");
        },
        (error) => {
          console.error(error);

          if (error.response) {
            console.error(error.response.body);
            response.send(error.response.body);
          }
        }
    );

    response.send("Message sent");
  } );
  // functions.logger.info('Hello logs!', { structuredData: true });
});