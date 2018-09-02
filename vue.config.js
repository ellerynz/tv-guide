// https://github.com/vuejs/vue-cli/blob/dev/docs/guide/webpack.md
module.exports = {
  chainWebpack: (config) => {
    config.entry('polyfills')
      .add('./src/polyfills.js')
      .end();
  },
};
