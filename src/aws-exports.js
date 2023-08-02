// export.js
const amplifyConfig = {
  // Add the configuration object from aws-exports.js here
  // For example, if your aws-exports.js looks like this:
  const awsConfig = {
    Auth: {
       region: 'us-east-1',
       userPoolId: 'us-east-1:17c82090-a71b-4f14-ab15-adcbbec4c010',
       userPoolWebClientId: '6d48ta9aqo5nc5p8bi6lklf86',
     },
     Storage: {
       bucket: 'lmpq5s3amplifytest143129-test',
       region: 'us-east-1',
     }
  //   // Other service configurations
  //   // ...
  // };
  // You can copy it to amplifyConfig in export.js as follows:
  // ... copy the configuration object here ...

  // Remember to replace the placeholders with your actual configuration values
};

module.exports = amplifyConfig;
