#Amazon Cognito example with AngularJS-based web app 

## Pre-conditions
- Create an AWS account
- Setup the Cognito
- Install npm

## Getting start

### Intialize the application

```
# Clone project
git clone git@github.com:takanorig/aws-cognito-angularjs.git
```

```
# Install the NPM packages
cd aws-cognito-angularjs
npm install
```

Edit the following file according to your environment.

- app/scripts/app.js
  - AWS.config.region
  - AWS.config.credentials
  - UserPoolId
  - ClientId

### Run the application
```
# Run the application with gulp
cd aws-cognito-angularjs
gulp server
```
