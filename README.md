# Vue JS Test

I created this because I wanted to learn how to setup the most basic Vue JS implementation from compilation all the way through to testing. This Readme is going to serve as a list of the things i learned along the way.

## Getting it running

`$ npm install` - Install all the packages required to not only build the project but to test it.

`$ webpack` - Using the settings in the `webpack.config.js` file, build the javascript package.

  * **entry** - This points to the file that includes everything required to run the Vue app.
  * **output** is the path where the built files are written
  * **rules** is the way you can allow Webpack to run different loaders on different files. For example we can tell Webpack how to handle vue files (using the VueLoader package) and also SaaS files.
  
  
  You can also run `webpack --watch` which will automatically pack when the underlying JS changes.
  
From here you should be able to run `index.html` to run the app which includes the Vue component.

## Tests

By running `npm test` you will find Jest will be used to run the specs. This is setup in the `package.json` file.

**jest.config.js**

* The module name mapper allowed me to specify where the root of the modules were. E.g. if the module mapper is `<rootDir>/components/$1` then in the spec I could include a component with `import someComponent from @/SomeVueComponent.vue` and it would look in the components directory

* The test match section shows where the tests files should be located that will be run.

* Transforms allow for packages to be used on the files prior to testing. Babel-jest was one that I needed especially.

### Babel
Probably the biggest issue I had was not using Babel in the spec transforms.  Without adding the Babel transform the jest config, as well as `plugin-transform-modules-commonjs` to the babel config, I was receiving 
  `SyntaxError: Cannot use import statement outside a module`

## main.js
Main js servers as the entrypoint for webpacker which actually loads Vue and attaches the components to the page.

## Dependency Injection
The Vue component has a function prop where you can pass in a function that returns an API call. In our example, the component accepts the `src/pricesFetcher.js` file. This makes it super easy to test.

## Multiple Componetns

`Main.vue` loads two other components onto the page and serves as the message bus for the emitted events.

1. MainVue loads `btcCounter.vue` and `pricesLoader.vue`
2. User clicks button on `pricesLoader.vue` which fetches Crypto value from a third party and display it on the spage. It also emits `btcPrice` with a value the value of Bitcoin.
3. MainVue detects the `btcPrice` event and, which runs `updateBtcPrice` which changes a MainVue prop that is also passed into the `btcCounter.vue` component.
4. The `btcCounter` component renders the prop onto the page
