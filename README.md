# Opinionated boilerplate for Vue.js projects

## Runtime environment

+   [Vue.js](https://vuejs.org/v2/api/), configured for:
    +   source debugging in browser devtools with the same webpack path as in
        the project
+   [Vue Router](https://router.vuejs.org/), the official Vue.js router
+   [Vuex](https://vuex.vuejs.org/), a popular state management library
+   [Vue Material](https://vuematerial.io/): Material Design for Vue.js,
    includes
    +   [Roboto](https://github.com/KyleAMathews/typefaces/tree/master/packages/roboto#typeface-roboto)
    +   [Material Icons](https://github.com/daimoonis/material-icons-font#readme) fonts
    +   Modal dialog wrapper
    [vue-material-modal-dialog](https://www.npmjs.com/package/vue-material-modal-dialog)
    +   [Locales for the Vue Material datepicker](https://www.npmjs.com/package/@undecaf/vue-material-locales)
+   [Vuelidate](https://vuelidate.js.org/) plus
    +   [vue-material-vuelidate](https://www.npmjs.com/package/vue-material-vuelidate),
        a validating wrapper for Vue Material input components
+   The [axios](https://github.com/axios/axios#axios) HTTP client
+   Additional directives:
    +   [@undecaf/vue-autofocus](https://www.npmjs.com/package/@undecaf/vue-autofocus)
    +   [@undecaf/vue-hotkey](https://www.npmjs.com/package/@undecaf/vue-hotkey)

## Tooling

+   [Vue CLI](https://cli.vuejs.org/) with
    [router plugin](https://github.com/vuejs/vue-cli/tree/dev/packages/@vue/cli-plugin-router#vuecli-plugin-router),
    [test-utils plugin](https://vue-test-utils.vuejs.org/)
    and [Webpack](https://webpack.js.org/)
+   [Karma](https://karma-runner.github.io/latest/index.html),
    [Mocha](https://mochajs.org/) and
    [Chai](https://www.chaijs.com/) for unit testing with headless Chrome 
    and Firefox (or any other browser for which there is a Karma launcher)
    
    We do not favour using [Jest](https://jestjs.io/) 
    as [recommended by Vue](https://vue-test-utils.vuejs.org/installation/#using-vue-test-utils-with-jest-recommended)
    because Jest uses [JSDOM](https://github.com/jsdom/jsdom#--------jsdom) as a browser surrogate.
    Although JSDOM performs better than a browser, it suffers from unpleasant 
    [browser compatibility issues](https://github.com/tmobile/jest-jsdom-browser-compatibility#overview).
    
+   [TestCafé](https://devexpress.github.io/testcafe/) for end-to-end testing on Chrome and Firefox
+   [serve](https://github.com/vercel/serve#readme) for serving the deployment build of the application locally
+   [npm-check-updates](https://github.com/raineorshine/npm-check-updates#npm-check-updates---):
    upgrades `package.json` dependencies to the latest versions, ignoring specified versions


## Workflow

### Creating a project

```shell script
git clone https://github.com/undecaf/vue-boilerplate.git <project directory>
```


### Project layout

```
<project directory>
  ├── .run                 // Webstorm run configurations for npm scripts
  |    └── *.run.xml
  ├── dist                 // production build of app, built by 'npm build'
  |    ├── css
  |    ├── fonts
  |    ├── js
  |    └── index.html
  ├── node_modules         // dependencies
  |    └── ...
  ├── src
  |    ├── components      // Vue components
  |    |    └── *.vue
  |    ├── models          // Vuex data store and data model classes
  |    |    ├── store.js
  |    |    └── *.js
  |    ├── config.js       // app configuration, also used for testing
  |    ├── main.css        // global styles
  |    ├── main.js         // app entry point
  |    ├── messages.json   // localized VueI18N messages
  |    └── routes.js       // routes for Vue Router
  ├── tests
  |    ├── e2e             // end-to-end test suites for Testcafé
  |    |    └── *.test.js
  |    └── unit            // unit test suites for Mocha/Chai
  |         └── *.spec.js
  ├── .eslintrc.js         // ESLint configuration
  ├── .gitignore 
  ├── .testcaferc.json     // Testcafé end-to-end test configuration
  ├── karma.conf.js        // Karma unit test configuration
  ├── LICENSE
  ├── package.json
  ├── package-lock.json
  ├── README.md            // this file
  └── vue.config.js        // Vue and Webpack build configuration
```


### Development

#### Defining components

Save your components in directory `src/components`.


#### Defining routes

[Vue Router](https://router.vuejs.org/) is used for navigation.
Add your routes to the array in `src/routes.js`.


#### Using the Vuex store

This project uses [Vuex](https://vuex.vuejs.org/) for state management.
Define state and mutations in the respective properties in `src/models/store.js`.


#### Validating Vue Material inputs

Validations rely on [Vuelidate](https://vuelidate.js.org/). A wrapper component,
[`<md-vuelidated>`](https://www.npmjs.com/package/vue-material-vuelidate),
has been included to simplify writing Vuelidate validations.



#### Building and serving a project

The development server rebuilds the project whenever something in directory `src`
has been changed.
 
Starting the server and listening at the default port (8080):

```shell script
npm run serve  # in Webstorm: run 'serve' 
```

Listening at a different port:

```shell script
npm run serve -- --port 12345
```


#### Unit tests

Use `tests/unit/App.spec.js` as a template for your unit tests. Test files _must_ be named
`*.spec.js`.

By default, unit tests run headless in Chrome. Edit the `browsers` property in `karma.conf.js`
to select a different browser or multiple browsers.

Running the unit tests:

```shell script
npm run test:unit  # in Webstorm: run 'test:unit' 
```


#### End-to-end tests

Use `tests/e2e/App.test.js` as a template for your E2E tests. Test files _must_ be named
`*.test.js`.

By default, unit tests run against Chrome. Edit the `browsers` property in `.testcaferc.json`
to select a different browser or multiple browsers.

Start the development server before running the E2E tests:

```shell script
npm run serve  # in Webstorm: run 'serve' 
```

Then run the E2E tests in a second terminal:

```shell script
npm run test:e2e  # in Webstorm: run 'test:e2e' 
```


### Production

#### Building

Production builds are optimized for deployment but build less quickly.

This builds the project in directory `dist`:

```shell script
npm run build  # in Webstorm: run 'build' 
```


#### Serving a production build locally

Making the server listen at the default port (8080):

```shell script
npm run serve:dist  # in Webstorm: run 'serve:dist' 
```

Listening at a different port:

```shell script
npm run serve:dist -- -l 12345
```


#### End-to-end tests

Prepare E2E tests [as descibed above](#end-to-end-tests).

Start a local server before running the E2E tests:

```shell script
npm run serve:dist  # in Webstorm: run 'serve:dist' 
```

Then run the E2E tests in a second terminal:

```shell script
npm run test:e2e  # in Webstorm: run 'test:e2e' 
```


## License

Software: [MIT](http://opensource.org/licenses/MIT)

Documentation: [CC-BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/)
