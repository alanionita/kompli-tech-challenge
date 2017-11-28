# Kompli Tech Challenge

My solution for the Kompli Tech Challenge using Node, Express, and MongoDB.

The plan of action:
- use a generic email address from the University of Groningen (communicatie@rug.nl)
- scrape the http://ao.com/help-and-advice/help-with-my-order/contact-us 
- find email addresses 
- find phone numbers
- find address
- move on to the wider domain http://ao.com/ to validate accuracy

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. 

### Prerequisites

#### node.js

node.js must be installed on your machine (any versions will work; v7.10.0 was used for this project)

```
$ node -v // v7.10.0
```

To install node follow this guide -  https://nodejs.org/en/download/package-manager/#osx

#### npm

npm is required (any versions will work; v4.2.0 was used for this project)

```
$ npm -v // 4.2.0
```

To install npm follow this guide - https://docs.npmjs.com/getting-started/installing-node

### Install

Create a new folder on your machine and clone / fork + clone the repo. 

Open terminal and navigate to the folder storing the code

Install all of the required packages using npm

```
$ npm i  
```

### Start the server

Navigate back to the route server folder and run the following command.

```
$ npm run dev
```

### Navigating the API 

In the browser navigate to http://localhost:8081/scrape and you should see an output.

## Running the tests

No tests included so far

### Testing patterns

## Built With

* [Husky](https://github.com/typicode/husky) - Git hooks made easy, used to chain linting and tests before commits
* [ESLint](http://eslint.org) - Linting utility
* [Prettier](https://www.npmjs.com/package/prettier) - Code formater, used to enforce linting at save
* [Airbnb Lint config](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb) - A great source of javascript linting rules
* [nodemon](https://www.npmjs.com/package/nodemon) - server change monitoring and restart
* [express.js](https://expressjs.com) - web framework for nodeJS
* [cheerio](https://www.npmjs.com/package/cheerio) - jQuery for the server

## Authors

* **Alan Ionita** - https://github.com/alanionita
