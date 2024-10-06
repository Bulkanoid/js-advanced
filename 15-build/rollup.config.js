const html = require('@rollup/plugin-html');

module.exports = {
  input: 'src/index.js',
  output: {
    dir: './bundle',
    format: 'iife',
  },
  plugins: [html()],
};
