See https://scotch.io/tutorials/build-a-real-time-twitter-stream-with-node-and-react-js

1. `npm install --save-dev mocha selenium-webdriver phantomjs`
2. `wget http://selenium-release.storage.googleapis.com/2.43/selenium-server-standalone-2.43.0.jar`
3. `node server`
4. `PATH="$(npm bin):$PATH" java -jar selenium-server-standalone-2.43.0.jar`
5. `PATH="$(npm bin):$PATH" ./node_modules/jasmine-node/bin/jasmine-node integration_spec/mainSpec.js`
