const path = require(`path`)
module.exports = {
  siteMetadata: {
    title: `Mateus Bezerra - Desenvolvimento de Sistemas`,
    description: `Desenvolvimento de Sistemas, Websites e Aplicativos Android e iOS`,
    author: `@mateusbzerra`,
    siteUrl: "https://mateusbezerra.com",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Mateus Bezerra - Desenvolvimento de Sistemas`,
        short_name: `Mateus Bezerra`,
        start_url: `/`,
        background_color: `#02102B`,
        theme_color: `#02102B`,
        display: `minimal-ui`,
        icon: `static/icon2.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
        ignore: [`**/styles.js`],
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./content`,
      },
    },
    `gatsby-plugin-sitemap`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
