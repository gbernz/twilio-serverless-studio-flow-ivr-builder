exports.handler = function(context, event, callback) {
    const { payload, passcode } = event;
    console.log(event);
  
    if (passcode !== context.PASSCODE) {
      const response = new Twilio.Response();
      response.setStatusCode(401);
      //response.setBody('Invalid passcode');
      return callback(null, response);
    }
  
    const client = context.getTwilioClient();
    client.studio.flows.create({
      commitMessage: 'First draft',
      friendlyName: 'Customized IVR Flow',
      status: 'draft',
      definition: payload
    })
    .then((flow) => {
      return callback(null, { flow });
    })
    .catch((err) => {
      console.error(err);
      return callback('Failed to create a Studio Flow.');
    })
  };