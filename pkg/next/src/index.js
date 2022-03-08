const withPWA = require("next-pwa");

const withTM = require("next-transpile-modules")([
  "@primal/state",
  "@primal/icons",
  "@primal/theme",
  "@primal/primitives",
]);

const withPlugins = require("next-compose-plugins");

module.exports = (config) => withPlugins([withTM, withPWA], config);
