# Fam
This is a web application to help users decide on nearby activities/events/food/etc. with the aid of community reviews. Become part of the community by contributing your own reviews as well!
### ~~[Demo]~~(http://ec2-107-23-73-244.compute-1.amazonaws.com:8080/)
Server has been taken down due to cost. The only way to run the web application is to run locally. Sorry for the inconvenience.

## Getting Started
Make sure you have [Node.js](https://nodejs.org/en/) and [Angular CLI](https://github.com/angular/angular-cli).

### Install Dependecies
Run
```bash
npm install
```
in both `/client` and `/server` directory.

### Run
Navigate to `/client/src/app/` directory and edit reco.service.ts and auth.service.ts. Change all cases of `http://ec2-107-23-73-244.compute-1.amazonaws.com` to `http://localhost`. This should already be done in the latest commit.
Navigate to `/server` directory and run, 
```bash
node app.js
```
Navigate to `/client` directory and run,
```bash
ng serve
```
Navigate to `http://localhost:4200` to see the app!
