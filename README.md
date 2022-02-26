
# <img src="https://cdn.iconscout.com/icon/free/png-256/twilio-282195.png" alt="Twilio" width="25"/> Twilio Serverless - Studio Flow IVR Builder <img src="https://cdn.iconscout.com/icon/free/png-256/twilio-282195.png" alt="Twilio" width="25"/> 

Quickly customize a Studio Flow IVR (phone tree) via JSON or the pre-built UI. Take it a step further by utilizing the optional Studio Flow REST API v2 to push your custom flow to the Twilio Console. Navigation of the IVR includes use of keys and speech-to-text.

## Pre-requisites

### Environment variables

This project requires some environment variables to be set. To keep your tokens and secrets secure, make sure to not commit the `.env` file in git. When setting up the project with `twilio serverless:init ...` the Twilio CLI will create a `.gitignore` file that excludes `.env` from the version history.

In your `.env` file, set the following values:

| Variable      | Description                              | Required |
| ------------- | ---------------------------------------- | -------- |
| `PASSCODE`    | A passcode of your choice                | false - REST API only     |
| `ACCOUNT_SID` | Twilio account sid found in your console | false - REST API only     |
| `AUTH_TOKEN`  | Twilio auth token found in your console  | false - REST API only     |

## Clone this project and start building

1. Install the [Twilio CLI](https://www.twilio.com/docs/twilio-cli/quickstart#install-twilio-cli)
2. Install the [serverless toolkit](https://www.twilio.com/docs/labs/serverless-toolkit/getting-started)

```shell
twilio plugins:install @twilio-labs/plugin-serverless
```

3. Start a new project

```
# Clone this repository
git clone https://github.com/gbernz/twilio-serverless-studio-flow-ivr-builder
# Go into the repository
cd twilio-serverless-studio-flow-ivr-builder
```

4. Start the server with the [Twilio CLI](https://www.twilio.com/docs/twilio-cli/quickstart):

```
twilio serverless:start
```

5. Open the web page at https://localhost:3000/index.html and follow the instructions to test your application.

ℹ️ Check the developer console and terminal for any errors, make sure you've set your environment variables.

## Deploying

Deploy your functions and assets with either of the following commands. Note: you must run these commands from inside your project folder. [More details in the docs.](https://www.twilio.com/docs/labs/serverless-toolkit)

With the [Twilio CLI](https://www.twilio.com/docs/twilio-cli/quickstart):

```
twilio serverless:deploy
```

## Brought to you by Team 5280! 👋

This project was an internal Twilio effort for the FY22 H1 Growth Build Challenge.

Twilion builders:

[@sjohnson](https://google.com/) [@asaulnier](https://google.com/) [@gbernard](https://google.com/) [@cmurphy](https://google.com/)