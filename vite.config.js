const { resolve } = require('path')

module.exports = {
    build: {
      rollupOptions: {
        // https://rollupjs.org/guide/en/#big-list-of-options
        input: '_index.html',
        output: {
            dir: 'public'
        }
      }
    }
  }
