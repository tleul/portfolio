  
const withStyles = require("@webdeb/next-styles");

module.exports = withStyles({
  sass: true,
  modules: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        test: /\.(js|ts)x?$/,
      },
      use: ["@svgr/webpack", "url-loader"],
    });
    return config;
  },
});