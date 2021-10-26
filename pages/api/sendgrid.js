import sendgrid from '@sendgrid/mail';

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

const sendEmail = async (req, res) => {
  try {
    const body = JSON.parse(JSON.stringify(req.body)) || {};
    console.log(body);

    const message = {
      to: 'clepidev@gmail.com',
      from: 'clepidev@gmail.com',
      subject: `${body.Subject}`,
      html: `<body><h3>You've got a new mail from ${body.FirstName} ${body.LastName}, the email is: ✉️${body.EmailAddress}</h3><p>Message:</p><p>${body.Message}</p></body>` 
    }

    await sendgrid.send(message, (error) => {
      if (error) {
        console.log('Something went wrong');
      } else {
        console.log('Email has been sent')}
    });

  } catch (error) {
    return res.status(error.statusCode || 500).json({error: error.message});
  }
  return res.status(200).json({status: 'Ok'});
}

export default sendEmail;