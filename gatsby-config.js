/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: 'Intentional Society',
    description: "Organizing towards a vision of our potential",
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-gtag',
      options: {
        trackingId: 'G-X9MTZGX7EF',
        head: true,
      },
    },
    'gatsby-theme-material-ui', // contains gatsby-plugin-material-ui
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
