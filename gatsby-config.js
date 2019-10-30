module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: `${__dirname}/src/components/pages`,
        ignore: [`!**/index.js`],
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          { family: `Archivo`, variants: [`700`] },
          { family: `Lato` },
          { family: `Open Sans`, variants: [`300`] },
          { family: `Roboto` },
          { family: `Source Sans Pro` },
          { family: `Vollkorn`, variants: [`700`] },
          { family: `IBM Plex Sans`, variants: [`500`] },
        ],
      },
    },
  ],
};
