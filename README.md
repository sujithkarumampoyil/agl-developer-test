# AGL Developer Test

This is a sample code that displays list of Cats (pets) in alphabetical order, under the heading of gender (Male/ Female) of their owner. Based on a boilerplate scaffolded using [Angular CLI](https://cli.angular.io/) and refactored for project needs.

## Technologies used
- [Angular 7](https://angular.io/)

## Getting Started

These are the instructions on how to get your local copy of the project and set it up on your local machine for development.  

#### Pre-requisites
Node JS and NPM are required to build and run the project.
In case if you run into any issues, ensure you are using **Node 10.15.3** and **NPM 6.4.1**. If you have your nvm system set up, node version will be picked from the project.

#### Installing and running the code in local

- Clone the repo (`git clone https://github.com/sujithkarumampoyil/agl-developer-test.git`)
- Open a command line utility, navigate to root of the project and run `npm install`
- run: `npm run start` to start a local server
- run: `npm run start:dev-set-up` to start all the required watchers for development. (unit tests/ linting/ live server)

> Development server will run on https://localhost:4200 by default.

**Environment Variables**

| Variable					| Description																	|
|---------------------------|-------------------------------------------------------------------------------|
|`API_ROOT`					| the base href endpoint from where data will be served

#### Running the tests

Test mocks can be found under `/test-mocks` folder from the project root. A data mock and mock services are added that can be included in your .spec files.

- To run unit test cases, run: `npm run test`
- To run end to end test cases, run: `npm run test-e2e`



