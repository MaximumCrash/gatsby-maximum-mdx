const path = require("path");

module.exports = {
  siteMetadata: {
    title: `MDX Maxxed`,
    description: `An MDX Gatsby starter project made with love.`,
    author: `Réjon Taylor-Foster (@Maximum_Crash)`,
    copyright: "",
    siteUrl: 'https://maximumcrash.github.io/gatsby-maximum-mdx/',
    pathPrefix: '/gatsby-maximum-mdx'
  },
  plugins: [
    'gatsby-plugin-theme-ui',
    `gatsby-plugin-react-helmet`,
    {
      //NOTE(Rejon): This is what allows us to do aliased imports like "@modules/ect..."
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "@modules": path.resolve(__dirname, "src/modules"),
          "@src": path.resolve(__dirname, "src"),
          "@utils": path.resolve(__dirname, "src/utils.js"),
          "@pages": path.resolve(__dirname, "src/pages"),
          "@images": path.resolve(__dirname, "static/images"),
          "@content": path.resolve(__dirname, "content"),
        },
        extensions: [
          //NOTE(Rejon): You don't have to write .js at the end of js files now.
          "js",
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content`,
      },
    },
    {
      resolve: "gatsby-plugin-page-creator",
      options: {
        path: `${__dirname}/content`,
        ignore: {
          patterns: [
            `**/404.mdx`,
          ],
          options: { nocase: true },
        },
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                siteUrl
              }
            }
            allSitePage {
              edges {
                node {
                  path
                }
              }
            }
        }`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-remark-images`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        defaultLayouts: {
          default: require.resolve("./src/modules/layouts/mdx_layout.js"),
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `MakerDAO Community Portal`,
        short_name: `MKD Comm Portal`,
        start_url: `/`,
        background_color: "#291a42",
        theme_color: "#5AE2CA",
        display: `standalone`,
        include_favicon: false,
        cache_busting_mode: "none",
        theme_color_in_head: false,
      },
    },
  ],
};
