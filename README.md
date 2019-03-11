# AGL Developer Test

Based on a project scaffolded using [Angular CLI](https://cli.angular.io/).

### Installation
Please ensure you are using **Node 10.15.3** and **NPM 6.4.1**. If you have your nvm system set up, node version will be picked from the project.

### Development mode

- Clone the repo
- Open a command line utility, navigate to root of the project and run `npm install`
- run: `npm run start` to start a local server
- run: `npm run start:dev-set-up` to start all the required watchers for development. (unit tests/ linting/ live server)
- To run unit test cases, run: `npm run test`

Development server will run on https://localhost:4200 by default.

**Environment Variables**

| Variable					| Description																	|
|---------------------------|-------------------------------------------------------------------------------|
|`API_ROOT`					| the base href endpoint from where data will be served						|

### Unit Testing

Test mocks can be found under `/test-mocks` folder from the project root. A data mock and mock services are added that can be included in your .spec files.
