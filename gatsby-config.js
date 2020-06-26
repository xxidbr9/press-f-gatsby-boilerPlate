module.exports = {
    siteMetadata: {
        title: `Barnando Portfolio Site`,
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis autem quae laudantium dolore debitis placeat! Iste necessitatibus quas, nulla consectetur iusto quod, perferendis ullam quam earum sequi deleniti illum ea!Labore ex perferendis nostrum id deleniti similique libero cupiditate obcaecati quod excepturi! Enim repudiandae repellendus voluptas nam. Quae, a iste commodi obcaecati veritatis labore rerum sunt maxime quia, illo perferendis?`,
        author: `@xxidbr9`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `gatsby-starter-default`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
            },
        },
        `gatsby-plugin-sass`,
        // this (optional) plugin enables Progressive Web App + Offline functionality To
        // learn more, visit: https://gatsby.dev/offline `gatsby-plugin-offline`,
    ],
}
