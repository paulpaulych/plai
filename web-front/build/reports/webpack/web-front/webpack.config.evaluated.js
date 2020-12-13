{
  mode: 'development',
  resolve: {
    modules: [
      '/home/paulpaulych/projects/toosa-finder/plai/web-front/build/js/packages/web-front/kotlin-dce-dev',
      'node_modules'
    ]
  },
  plugins: [
    TeamCityErrorPlugin {}
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          'source-map-loader'
        ],
        enforce: 'pre'
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg|gif|png|jpe?g)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/'
            }
          }
        ]
      }
    ]
  },
  entry: {
    main: [
      '/home/paulpaulych/projects/toosa-finder/plai/web-front/build/js/packages/web-front/kotlin-dce-dev/web-front.js'
    ]
  },
  output: {
    path: '/home/paulpaulych/projects/toosa-finder/plai/web-front/build/distributions',
    filename: [Function: filename],
    library: 'web-front',
    libraryTarget: 'umd',
    globalObject: 'this'
  },
  devtool: 'eval-source-map',
  stats: {
    warningsFilter: [
      /Failed to parse source map/
    ],
    warnings: false,
    errors: false
  },
  devServer: {
    inline: true,
    lazy: false,
    noInfo: true,
    open: true,
    overlay: false,
    contentBase: [
      '/home/paulpaulych/projects/toosa-finder/plai/web-front/build/processedResources/js/main'
    ]
  }
}