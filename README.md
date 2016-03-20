Simple Server Side Hello World Example to show React server side rendering and isomorphic app.

Steps to run (all to done for the root directory)

npm install
webpack -w
node app.js

hit http://localhost:3000/ to see the hello world 
To confirm server side rendering from the dev console disable javascript and see that Hello World is still printed but the react data id's are not there in the HTML markup to save crucial bytes data-ids are not added on the server rather a Static string is passed.


Please feel free to reach out in case of any doubt!!