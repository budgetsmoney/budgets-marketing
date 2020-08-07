module.exports = {
  siteUrl: `http://localhost:8000`, // Site domain. Do not include a trailing slash!

  postsPerPage: 12, // Number of posts shown on paginated pages (changes this requires sometimes to delete the cache)

  siteMeta: {
    title: `Gatsby Default Starter`, // This allows an alternative site title for meta data for pages.
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`, // This allows an alternative site description for meta data for pages.
    author: `@gatsbyjs`
  },

  shareImageWidth: 1000, // Change to the width of your default share image
  shareImageHeight: 523, // Change to the height of your default share image

  shortTitle: `Ghost`, // Used for App manifest e.g. Mobile Home Screen
  siteIcon: `favicon.png`, // Logo in /static dir used for SEO, RSS, and App manifest
  backgroundColor: `#e9e9e9`, // Used for Offline Manifest
  themeColor: `#15171A` // Used for Offline Manifest
};
