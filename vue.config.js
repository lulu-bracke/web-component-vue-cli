const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  // Chain the webpack configuration
  chainWebpack: (config) => {
    config.module
      .rule('vue')
      .use('vue-loader')
      .tap(options => ({
        ...options,
        compilerOptions: {
          // treat any tag that contains a dash as custom elements
          isCustomElement: tag => tag.includes('-')
        }
      })
    );
    // Define the library name
    config.output.library = 'WebComponents';
    // umd (universal module definition) pattern typically attempts to offer compatibility with the most popular script loaders 
    config.output.libraryTarget = 'umd';
  }
});

// command to run for building the web component:
// npm run build --target wc --name simple-counter .\src\components\SimpleCounter.vue
