// подключите плагины в файл
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

module.exports = {
  plugins: [
    /* require('cssnano')({
      preset: 'default',
    }),
    require('autoprefixer'), */
    autoprefixer,
    cssnano({
      preset: 'default'
    })
  ],
};