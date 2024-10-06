import html from 'rollup-plugin-html';

export default {
  input: './src/index.js',
  output: {
    file: './bundle/bundle.js',
    format: 'iife',
  },
  plugins: [
    html({
      template: './src/index.html',
      dest: './bundle',
    }),
  ],
};
