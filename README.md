Vue JS Test

I created this because I wanted to learn how to setup the most basic Vue JS implementation from compilation all the way through to testing. This Readme is going to serve as a list of the things i learned along the way.

## Getting in running

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




