// // config-overrides.js
// const webpack = require('webpack');

// module.exports = function override(config, env) {
//   // Add your custom webpack configuration here

//   // Add polyfills for core Node.js modules
//   config.resolve.fallback = {
//     ...config.resolve.fallback,
//     path: require.resolve('path-browserify'),
//     os: require.resolve('os-browserify/browser'),
//     crypto: require.resolve('crypto-browserify'),
//   };

//   // Extend the DefinePlugin to add custom environment variables
//   config.plugins = config.plugins.map((plugin) => {
//     if (plugin.constructor.name === 'DefinePlugin') {
//       plugin.definitions['process.env.REACT_APP_ALCHEMY_API_KEY'] = JSON.stringify(
//         process.env.REACT_APP_ALCHEMY_API_KEY
//       );
//     }
//     return plugin;
//   });

//   return config;
// };
