# ReacJS Biolerplate

## Introduction:

A ReactJS biolerplate

## Stack (Tools and Technologies):

- Technologies:
  - <b>ReactJS</b> - Main UI Library
  - <b>Javascript</b> - Scripting language
  - <b>HTML</b> - Structuring the webpages
  - <b>CSS</b> - Styling the webpages
  - <b>SAAS (SCSS)</b> - Preprocessor for CSS
  - <b>Redux Toolkit</b> - State management
  - <b>React Query</b> - Server query/state
  - <b>React Testing Library</b> - Test cases
  - <b>ESLint</b> - Linter
  - <b>Husky</b> - Pre commit hooks

- Tools:
  - <b>VS Code</b> - IDE
  - <b>GitBash</b> - Version Control (emulation layer for Git command line interface on windows)
  - <b>Chrome</b> - Web Browser (others can also be used like Chrome, Safari, Firefox)

## Setup:

Install NodeJS from the official website and verify if its installed by:

    node --version

In the project directory, you can run:

    npm install

This will install all the dev dependencies defined in the `package.json` file. Then run:

    npm start

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits. You will also see any lint errors in the console.

<br>
To launch the test runner in the interactive watch mode, use:

    npm test
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

<br>
To build the app for production, use:

    npm run build
It builds the app for production to the `build` folder and correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.

<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

<br>

### SASS/SCSS

In order to use the SAAS/SCSS, we need to install node sass by:

    npm install node-sass

<br>

### ESlint

To setup linter i.e. ESlint, we need to first install it if its not already installed by

    npm install -g eslint

Now initialize ESlint in the app by running:

    eslint --init

#### Note: Refer to .eslintrc.json to complete the eslint configs if facing any errors

<br>

### Pre Commit Hooks (Husky)

Now install husky to run pre commit, pre push etc. hooks by:

    npm install husky --save-dev

Then in `package.json` -> `scripts`, add

	...
	"prepare": "husky install",

Then run it by:

	npm run prepare

Now for adding a pre commit hook, run:

	npx husky add .husky/pre-commit "npm test"

This will create a `.husky` directory with a pre-commit file where we can add the scripts which we want to run before a commit, we can add lint scripts as well

	npm run lint

In `package.json`, update the scripts with:

	...
	"test": "CI=true react-scripts test",
	"lint": "eslint ./src --ext .js,.jsx",
	...

Now add all the files and commit, the pre commits will run and will only allow to commit if they are passed

<br>

### Redux Toolkit

To install redux toolkit, run:

	npm install @reduxjs/toolkit react-redux
  
Add and configure the `store`, `rootReducer` and also wrap the `App` component in `Provider` to access the store

<br>

### PropTypes

Add the type checking library

    npm install --save prop-types

<br>

### Redux Logger

Add redux logger

    npm i --save redux-logger

now use this in store's `configureStore`

<br>

### React Query

Add React Query for Async state management

    npm i react-query

Now wrap app into `QueryClientProvider` and provide `client`

<br>

### React Router DOM

Add react router dom for routing

    npm install react-router-dom
