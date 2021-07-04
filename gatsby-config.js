/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: 'Intentional Society',
    description: "Growing our biggest selves together",
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-gtag',
      options: {
        trackingId: 'G-X9MTZGX7EF',
        head: true,
      },
    },
    {
      resolve: 'gatsby-theme-material-ui', // pulls in gatsby-plugin-material-ui and gatsby-plugin-webfonts
      options: {
        webFontsConfig: {
          fonts: {
            google: [
              { family: "Open Sans", variants: [400] },
            ],
          },
        },
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: './src/'
      }
    },
    'gatsby-transformer-remark',
    'gatsby-transformer-sharp',
  ],
}
