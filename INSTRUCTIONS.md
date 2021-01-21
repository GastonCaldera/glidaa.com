# Instructions

First you need to download and configure Amplify CLI. Go to the root project folder and type these commands, following
the instructions:

```bash
npm install -g @aws-amplify/cli
amplify configure
```

## Backend

Then you set up a new environment and push the changes so the resources are created.

```bash
amplify env add
amplify push
```

The last command will output the API endpoint, which is the main part of the link the clients will use.

This finishes the backend. Whenever changes are made to the backend code (the lambda function, for example), the changes
are deployed by running `amplify push`.

## Frontend

In order to set up the CICD for the frontend code, you type:

```
amplify add hosting
```

You have to select "Hosting with Amplify Console (Managed hosting with custom domains, Continuous deployment)". Then
"Continuous deployment (Git-based deployments)". When your browser opens, you have to perform these steps:

- Click on the "Frontend" tab. If you can't see this screen and can see your app name instead, click the app name to get
  to the screen where you can select the "Frontend" tab.

- Click on GitHub and click on "Connect Branch".

- Follow the instructions to connect your GitHub account.

- Select this repository and the branch that will trigger the deployments. Click next.

- UNCHECK "Deploy updates do backend resources with your frontend on every code commit." Click next.

- Click "Save and deploy".

This finishes the backend. Whenever changes are commited to the selected branch, a new deployment will be triggered and
the website will be update.

## Customizing and Testing

In order to test the requested functionality, first you need to log into your AWS SES console and verify a sending email
address (https://docs.aws.amazon.com/ses/latest/DeveloperGuide/verify-email-addresses-procedure.html). It's important
that you're logged in to the same AWS region that you have selected when configuring Amplify with `amplify configure`.

Then, you need to modify the Lambda function to use this verified email address to send emails. You also would want to
replace the destination email addresses to actual email addresses where you can receive emails.

`amplify/backend/function/apilambda/src/app.js`

```js
var params = {
  Destination: {
    BccAddresses: [],
    CcAddresses: ['manage2@glidaa.com'], // A secondary email address to receive the notification
    ToAddresses: ['manager@glidaa.com'], // A primary email address to receive the notification
  },
  Message: {
    Body: {
      Html: {
        Charset: 'UTF-8',
        // This is the HTML content for the email
        Data: `The user <b>${putItemParams.Item.email}</b> just clicked the email link and is visiting the website (${now})`,
      },
      Text: {
        Charset: 'UTF-8',
        // This is the text content for the email
        Data: `The user ${putItemParams.Item.email} just clicked the email link and is visiting the website (${now})`,
      },
    },
    Subject: {
      Charset: 'UTF-8',
      // This is the subject
      Data: 'New visit from at website',
    },
  },
  // This is the email you have authorized in AWS SES
  Source: 'authorized@email.com',
};
```

You also should replace the redirect website to your actual website, when it's ready:

`amplify/backend/function/apilambda/src/app.js`

```js
res.redirect('https://google.com'); // <= replace with your website
```

After editing this file, you go to your project root folder and do `amplify push` to update the lambda function.

Then you can test it by constructing your links appending `?email=client@company.com` to the endpoint you got on the
first step.

If you followed these instructions, you should see a DynamoDB table with the record of this visit in your DynamoDB
console. You should also receive an email with the notification.

## Considerations about using Amplify with SES

Amplify doesn't support SES on its core. In order to have SES working with a Lambda function, there's a manual step that
must be performed everytime you add or update a function. This step ensures the Lambda function will be able to call SES
service. This is a warning for future developers, because if you strictly follow these instructions, there's no need to
perform this manual step in order to have the API working properly.
