# Front-End project

## Project setup
```
npm install
```

### Launch the project
```
npm run serve
```

### The server is launched in dev mode. The backend url use a Node project in production.
### The code of backend: https://github.com/tenlla2/node-interview-app


### ** ATTENTION! - OPTIONAL **
### If you want to check the server in localhost, clone the repo and change the target to: target: "http://localhost:5000/"
### in file vue.config.js

### Exist and upload img of this project dockerized in heroku, but in the first exercise get a cors issue from backend.
### So the test of the app is in dev mode. Url Heroku : https://test-interview-vue.herokuapp.com/

### If you want to create the docker img run:
```
docker build -t test-interview/dockerize-vuejs-app .
```
### THIS IMG IS A PRODUCTION APP SO FIRST EXERCISE FAIL CAUSE BACKEND GIVE A CORS PROBLEM