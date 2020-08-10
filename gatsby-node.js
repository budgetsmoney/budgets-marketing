/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require(`path`);
const { paginate } = require(`gatsby-awesome-pagination`);
const { postsPerPage } = require(`./src/utils/siteConfig`);

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage, createRedirect } = actions;
  const pageTemplate = path.resolve(`./src/templates/page.tsx`);
  const postTemplate = path.resolve(`./src/templates/post.tsx`);
  const blogIndexTemplate = path.resolve(`./src/templates/blog-index.tsx`);

  // Query Ghost data
  const result = await graphql(`
    {
      allGhostPost(sort: { order: ASC, fields: published_at }) {
        edges {
          node {
            slug
            title
            id
            excerpt
          }
        }
      }

      allGhostPage(sort: { order: ASC, fields: published_at }) {
        edges {
          node {
            slug
            url
          }
        }
      }
    }
  `);

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  // Extract query results
  const pages = result.data.allGhostPage.edges;
  const posts = result.data.allGhostPost.edges;

  // Create pages
  pages.forEach(({ node }) => {
    // This part here defines, that our pages will use
    // a `/:slug/` permalink.
    node.url = `/${node.slug}/`;

    createPage({
      path: node.url,
      component: pageTemplate,
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.slug
      }
    });
  });

  // Create post pages
  posts.forEach(({ node }) => {
    node.url = `/blog/${node.slug}/`;

    createPage({
      path: node.url,
      component: postTemplate,
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.slug
      }
    });

    createRedirect({
      fromPath: `/${node.slug}`,
      toPath: node.url,
      isPermanent: true,
      redirectInBrowser: true
    });
  });

  // Create pagination
  paginate({
    createPage,
    items: posts,
    itemsPerPage: postsPerPage,
    component: blogIndexTemplate,
    pathPrefix: ({ pageNumber }) => (pageNumber === 0 ? `/blog` : `/blog/page`)
  });
};
