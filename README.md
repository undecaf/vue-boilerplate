# Opinionated boilerplate for Vue.js web apps, PWAs and Electron apps

## Runtime environment

+   [Vue.js](https://vuejs.org/v2/api/) configured for:
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
    + [vue-material-vuelidate](https://www.npmjs.com/package/@undecaf/vue-material-vuelidate),
        a validating wrapper for Vue Material input components
+   [Vue I18n](https://kazupon.github.io/vue-i18n/), an internationalization plugin for Vue.js
+   The [axios](https://github.com/axios/axios#axios) HTTP client
+   Additional directives:
    +   [@undecaf/vue-autofocus](https://www.npmjs.com/package/@undecaf/vue-autofocus)
    +   [@undecaf/vue-hotkey](https://www.npmjs.com/package/@undecaf/vue-hotkey)

## Tooling

+   [Vue CLI](https://cli.vuejs.org/) with
    +   [Electron Builder plugin](https://nklayman.github.io/vue-cli-plugin-electron-builder/)
    +   [router plugin](https://github.com/vuejs/vue-cli/tree/dev/packages/@vue/cli-plugin-router#vuecli-plugin-router)
    +   [test-utils plugin](https://vue-test-utils.vuejs.org/)
    +   and [Webpack](https://webpack.js.org/)
+   [Karma](https://karma-runner.github.io/latest/index.html),
    [Mocha](https://mochajs.org/) and
    [Chai](https://www.chaijs.com/) for unit testing with headless Chrome 
    and Firefox (or with any other browser for which there is a Karma launcher)
    
    Please note: we do not favour using [Jest](https://jestjs.io/) 
    as [recommended by Vue](https://vue-test-utils.vuejs.org/installation/#using-vue-test-utils-with-jest-recommended)
    because Jest uses [JSDOM](https://github.com/jsdom/jsdom#--------jsdom) as a browser surrogate.
    Although JSDOM performs better than a browser, it suffers from unpleasant 
    [browser compatibility issues](https://github.com/tmobile/jest-jsdom-browser-compatibility#overview).
    
+   [TestCafé](https://devexpress.github.io/testcafe/) for end-to-end testing on Chrome and Firefox
+   [serve](https://github.com/vercel/serve#readme) for serving the deployment build of the application locally


## Workflow

### Creating a project

```shell script
git clone https://github.com/undecaf/vue-boilerplate.git <project directory>
```


### Project layout

```
<project directory>
  ├── .run                     // Webstorm run configurations for npm scripts
  |    └── *.run.xml
  ├── build                    // desktop app resources
  |    └── icons
  |         └── icon.png       // launcher and tray icon, at least 256x256 pixels
  ├── dist                     // production build of web app, built by 'npm build'
  |    ├── css
  |    ├── fonts
  |    ├── js
  |    ├── favicon.png
  |    └── index.html
  ├── dist_electron            // Electron builds of desktop app, built by 'npm electron:build'
  |    └── ...
  ├── node_modules             // dependencies
  |    └── ...
  ├── public                   // template files for web apps (HtmlWebpackPlugin)
  |    ├── favicon.png
  |    └── index.html
  ├── src
  |    ├── components          // Vue components
  |    |    └── *.vue
  |    ├── models              // entity classes
  |    |    └── *.js
  |    ├── services            // global services
  |    |    ├── event-bus.js   // event bus 
  |    |    ├── store.js       // Vuex store
  |    |    └── *.js
  |    ├── config.js           // app configuration, also used for testing
  |    ├── main.css            // global styles
  |    ├── main.js             // app entry point
  |    ├── messages.json       // localized Vue I18n messages
  |    └── routes.js           // routes for Vue Router
  ├── tests
  |    ├── e2e                 // end-to-end test suites for Testcafé
  |    |    └── *.test.js
  |    └── unit                // unit test suites for Mocha/Chai
  |         └── *.spec.js
  ├── .eslintrc.js             // ESLint configuration
  ├── .gitignore 
  ├── .jshintrc                // JSHint configuration 
  ├── .testcaferc.json         // Testcafé end-to-end test configuration
  ├── karma.conf.js            // Karma unit test configuration
  ├── LICENSE
  ├── package.json
  ├── package-lock.json
  ├── README.md                // this file
  └── vue.config.js            // Vue and Webpack build configuration
```


### Development

#### Defining components

Save your Vue components in directory `src/components`.


#### Defining routes

[Vue Router](https://router.vuejs.org/) is used for navigation.
Define components for each state and add the routes to the array in `src/routes.js`.
To reference the router instance from outside a Vue component, use
`import { router } from '@/config'`.


#### Using the Vuex store

This project uses [Vuex](https://vuex.vuejs.org/) for state management.
Define state and mutations in the respective properties in `src/models/store.js`.
To reference the store instance from outside a Vue component, use 
`import { store } from '@/config'`.


#### Validating Vue Material inputs

Validations rely on [Vuelidate](https://vuelidate.js.org/). A wrapper component,
[`<md-vuelidated>`](https://www.npmjs.com/package/vue-material-vuelidate),
has been included to simplify writing Vuelidate validations. Documentation and examples
[can be found here](https://www.npmjs.com/package/@undecaf/vue-material-vuelidate).


#### Providing I18N and L10N

Define localized text in `src/messages.json` and refer to it in your components as
described in the [VueI18N Guide](https://kazupon.github.io/vue-i18n/guide/formatting.html).
To reference the VueI18N instance from outside a Vue component, use
`import { i18n } from '@/config'`.


#### Building and serving a web application

The development server rebuilds the project whenever something in directory `src`
has changed.
 
Starting the server and listening at the default port (8080):

```shell script
npm run serve  # in Webstorm: run 'serve' 
```

Listening at a different port:

```shell script
npm run serve -- --port 12345
```


#### Building your web application as a PWA (progressive web app)

In `package.json`, copy the content of `comments.devDependencies-pwa` to `devDependencies`
and run `npm install`.
Subsequent [development](#building-and-serving-a-web-application) and 
[production](#building-a-web-application-for-deployment) builds will produce PWA versions of your web application.


#### Building and running a desktop application

Desktop applications are based on the [Electron framework](https://www.electronjs.org/).
The development server rebuilds the project whenever something in directory `src`
has changed.

Starting the server and running the desktop app:

```shell script
npm run electron:serve  # in Webstorm: run 'electron:serve' 
```


#### Unit tests

Use `tests/unit/*.spec.js` as templates for your unit tests. Test files _must_ be named
`*.spec.js`.

By default, unit tests run headless in Chrome. Edit the `browsers` property in `karma.conf.js`
to select a different browser or multiple browsers.

Running the unit tests:

```shell script
npm run test:unit  # in Webstorm: run 'test:unit' 
```


#### End-to-end tests

Use `tests/e2e/*.test.js` as templates for your E2E tests. Test files _must_ be named
`*.test.js`.

By default, E2E tests run against Chrome. Edit the `browsers` property in `.testcaferc.json`
to select a different browser or multiple browsers.

Before running the E2E tests, the development server must be started:

```shell script
npm run serve  # in Webstorm: run 'serve' 
```

Then run the E2E tests in a different terminal:

```shell script
npm run test:e2e  # in Webstorm: run 'test:e2e' 
```


### Production

#### Building a web application for deployment

Web builds are optimized for deployment on a web server but build less quickly.

This builds the project as a web application in directory `dist`:

```shell script
npm run build  # in Webstorm: run 'build' 
```


#### Serving a deployable web application locally

Making the local web server listen at the default port (8080) and serve
the content of directory `dist`:

```shell script
npm run serve:dist  # in Webstorm: run 'serve:dist' 
```

Listening at a different port:

```shell script
npm run serve:dist -- -l 12345
```


#### Building a desktop application

The project can be built as an Electron-based desktop application 
for the current platform (Linux, Windows or macOS).

This builds the project for the current platform in directory `dist_electron`:

```shell script
npm run electron:build  # in Webstorm: run 'electron:build' 
```


#### End-to-end tests

Prepare E2E tests [as described above](#end-to-end-tests).

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
