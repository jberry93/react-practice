# Webpack, ES6, and React Development

### Step 1: Set up scaffolding

You will need these files in no particular order:
- App.jsx (Place your built out components in here)
- main.jsx (Renders the App component to the view)
- index.html
- webpack.config.js (Configure webpack to load jsx, transpile ES6, and live-reload)


### Step 2: Install dependencies

Install these in no particular order using this command:

```BASH
npm install --save <dependency1> <dependency2> ...
```

- babel
- babel-core
- babel-loader
- babel-preset-es2015
- babel-preset-react
- jsx-loader
- react
- react-dom
- webpack
- webpack-dev-server

### Step 3: Configure webpack

TODO:
- [ ] Supply an entry point
- [ ] Spit out a bundle file
- [ ] Set up a dev server to view our changes
- [ ] Set up the babel loader
- [ ] Set es2015 and react presets
- [ ] Allow js and jsx file extensions

Leggo!:

First thing is we need to export an object to create an object to house all of our key-values pertaining to our config file:

```JavaScript
module.exports = {}
```

Easy enough? We're far from done

Next we give the bundle and entry point and an exit point:

```JavaScript
module.exports = {
  entry: './main.jsx',
  output: {
    path: './',
    filename: 'bundle.js'
  }
}
```

Within `output`, there are 2 properties called `path` and `filename`. The `path` tells webpack where to output the bundle. In this case, I'm putting the bundle in the root directory. The `filename` tells webpack what to call the bundle

Next we set up the dev server for live-reload:

```JavaScript
module.exports = {
  /* entry and output stuff */
  devServer: {
    inline: true,
    port: 1337
  }
}
```

Within `devServer`, there are 2 properties called `inline` and `port`. The `inline` tells webpack-dev-server to add the client entry point to the webpack configuration (In other words: live-reload FTW!!). The `port` tells webpack-dev-server which port to listen to

Half way there!!

---

Next is the `module` property which is where the babel transpilation occurs:

```JavaScript
module.exports = {
  /* entry, output, and devServer stuff */
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
}
```

Woah! What does all that mean?

**loaders** = Instantiates the property `loaders` which is an array of objects where each object is a custom set of properties specified by the developer to tell webpack what to use as a `loader`, `preset`, etc..

**test** = Takes in a regex expression to check the file name extension

**exclude** = Will exclude a given directory or file name

**loader** = Insert babel transpiler here to convert ES6 to ES5

**query** = State the `presets` within the array

Finally all that is left is to define the possible extensions webpack will accept:

```JavaScript
module.exports = {
  /* entry, output, devServer, and module stuff */
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
}
```

And we are done with the webpack configuration file but not done with setting up the webpack-dev-server

For reference, here's what my `webpack.config.js` file looks like:

```JavaScript
module.exports = {
  entry: './main.jsx',
  output: {
    path: './',
    filename: 'bundle.js',
  },
  devServer: {
    inline: true,
    port: 1333
  },
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
}
```

### Step 4 Add the `npm start` command

This one is simple! Just one line of code in `package.json`:

```JSON
{
  "name": "webpack-practice",
  "version": "1.0.0",
  "description": "",
  "main": "app.js",
  "scripts": {
    "start": "webpack-dev-server"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "babel": "^6.5.2",
    "babel-core": "^6.9.1",
    "babel-loader": "^6.2.4",
    "babel-preset-es2015": "^6.9.0",
    "babel-preset-react": "^6.5.0",
    "jsx-loader": "^0.13.2",
    "react": "^15.1.0",
    "react-dom": "^15.1.0",
    "webpack": "^1.13.1",
    "webpack-dev-server": "^1.14.1"
  }
}
```

The `"scripts"` property is assigned an object which takes in more properties that can be used in tandem with npm to execute scripts. In this case, we are telling npm when it runs the command `npm start` it will execute the `webpack-dev-server` thereby starting our server to see our changes on. All that is left now is to create a simple React component in `App.jsx` and render it through `main.jsx` and fire up the dev server to see your work!
