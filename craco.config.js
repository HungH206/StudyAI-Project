const CracoAlias = require("craco-alias");

module.exports = {
    webpack: {
        configure: (webpackConfig) => {
          webpackConfig.module.rules.push({
            test: /\.js$/,
            enforce: 'pre',
            use: ['source-map-loader'],
            exclude: /node_modules\/lucide-react/
          });
          return webpackConfig;
        },
      },
      plugins: [
        {
          plugin: CracoAlias,
          options: {
            source: "tsconfig",
            baseUrl: "./src",
            tsConfigPath: "./tsconfig.paths.json"
          }
        }
      ]
};