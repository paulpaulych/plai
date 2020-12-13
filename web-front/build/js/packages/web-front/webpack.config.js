let config = {
  mode: 'development',
  resolve: {
    modules: [
      "node_modules"
    ]
  },
  plugins: [],
  module: {
    rules: []
  }
};

// entry
config.entry = {
    main: ["/home/paulpaulych/projects/toosa-finder/plai/web-front/build/js/packages/web-front/kotlin-dce-dev/web-front.js"]
};

config.output = {
    path: "/home/paulpaulych/projects/toosa-finder/plai/web-front/build/distributions",
    filename: (chunkData) => {
        return chunkData.chunk.name === 'main'
            ? "web-front.js"
            : "web-front-[name].js";
    },
    library: "web-front",
    libraryTarget: "umd",
    globalObject: "this"
};

// resolve modules
config.resolve.modules.unshift("/home/paulpaulych/projects/toosa-finder/plai/web-front/build/js/packages/web-front/kotlin-dce-dev")

// source maps
config.module.rules.push({
        test: /\.js$/,
        use: ["source-map-loader"],
        enforce: "pre"
});
config.devtool = 'eval-source-map';
config.stats = config.stats || {}
Object.assign(config.stats, config.stats, {
    warningsFilter: [/Failed to parse source map/]
})

// dev server
config.devServer = {
  "inline": true,
  "lazy": false,
  "noInfo": true,
  "open": true,
  "overlay": false,
  "contentBase": [
    "/home/paulpaulych/projects/toosa-finder/plai/web-front/build/processedResources/js/main"
  ]
};

// noinspection JSUnnecessarySemicolon
;(function(config) {
    const tcErrorPlugin = require('kotlin-test-js-runner/tc-log-error-webpack');
    config.plugins.push(new tcErrorPlugin(tcErrorPlugin))
    config.stats = config.stats || {}
    Object.assign(config.stats, config.stats, {
        warnings: false,
        errors: false
    })
})(config);

// webpack.config.js
config.module.rules.push({
    test: /\.css$/,
    use: ["style-loader", "css-loader"]
});
config.module.rules.push({
    test: /\.(woff(2)?|ttf|eot|svg|gif|png|jpe?g)(\?v=\d+\.\d+\.\d+)?$/,
    use: [{
        loader: 'file-loader',
        options: {
            name: '[name].[ext]',
            outputPath: 'fonts/'
        }
    }]
});



// save evaluated config file
;(function(config) {
    const util = require('util');
    const fs = require('fs');
    const evaluatedConfig = util.inspect(config, {showHidden: false, depth: null, compact: false});
    fs.writeFile("/home/paulpaulych/projects/toosa-finder/plai/web-front/build/reports/webpack/web-front/webpack.config.evaluated.js", evaluatedConfig, function (err) {});
})(config);

module.exports = config
