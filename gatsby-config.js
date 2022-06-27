module.exports = {
  siteMetadata: {
    title: 'Renaud Rwemalika',
    author: 'Renaud Rwemalika',
    description: 'Personal Page of Renaud Rwemalika',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: 'https://kabinja.github.io/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/rwemalika.png',
      },
    },
    'gatsby-plugin-sass',
  ],
}
