# speedtest-backend
A simple backend server to report speedtest to firebase. 

I use this backend in my Raspberry Pi to report the speedtest periodically for to Firebase for tracking purpose.

## Build and setup for PROD
1. Build the project
    ```bash
    npm run dist
    ```
1. Deploy to server
1. Install packages
    ```bash
    yarn install --production=true
    ```
1. Change the ```config.js``` to your firebase account
    ```javascript
    exports.default = {
      // ...
      firebase: {
        databaseUrl: 'your database URL is here',
        serviceAccount: {} // your service account is here
      },
      speedtest: {
        maxTime: 5000 // time limit to run each speedtest
      }
    };
    ```
1. Set up the script to run every 15 minutes in your crontab
    ```bash
    crontab -e
 
    */15 * * * *  /usr/bin/node /home/pi/prod/speedtest/index.js >> /home/pi/prod/speedtest/run.log
    ```

Wallah, check your firebase data to see the data reported.
