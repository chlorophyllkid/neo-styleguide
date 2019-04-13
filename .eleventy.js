/**
 * The @11ty/eleventy configuration.
 *
 * For a full list of options, see: https://www.11ty.io/docs/config/
 */
module.exports = (config) => {

  return {
    pathPrefix: '/',

    dir: {
      input: 'src',
      output: '.tmp/parcel'
    },

    templateFormats: [
      'md',
      'pug',
      'js',
      'scss'
    ],

    htmlTemplateEngine : 'pug',
    passthroughFileCopy: true,
  };
};
