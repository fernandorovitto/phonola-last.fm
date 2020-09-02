# phonola (based on last.fm API)

This a demo using multiple libraries:

* React 16.13.1
* Typescript 4
* Redux 4
* Redux Router 5.2.0
* connected-react-router
* Styled-Components 5.1.1

Testing tools:
* Jest + Enzyme
* Eslint (with Typescript)

Tools:
* Webpack 4

Extras:
* typesafe-actions
* axios

This project is intended as a demo for testing and exploration of new libraries and possibilities.

## Setup
Needs npm: https://www.npmjs.com/get-npm

### Create your own account from last.fm

Link: https://www.last.fm/api/account/create

**Use your API_KEY to complete the config file: src\config\config.ts**

### Install dependencies
npm i

### Serve at localhost:8080
npm run start

### Build for production
npm run build

### For unitary testing
npm run test

### For unitary testing coverage report
npm run test:cov

### To run linter
npm run lint

## Possible next steps

* Last.fm user login implmentation
* Improve design
* Complete coverage of unit testing
* Components refactor & reutilization
* Improve styled-components styles management
* Use global theme for styles
* Create interfaces for the incomming API responses
* Add more information to main views 
