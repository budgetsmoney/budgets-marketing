// Vendors
import React from 'react';
import { Link, graphql } from 'gatsby';

// Components
import { Layout, MetaData, Pagination } from '../components';

// Types
type BlogIndexProps = {
  data: {
    allGhostPost: {
      edges: Array<{
        node: {
          slug: string;
          title: string;
        };
      }>;
    };
  };
  pageContext: {
    previousPagePath: string;
    nextPagePath: string;
    humanPageNumber: string;
    numberOfPages: number;
  };
};

const BlogIndex = ({ data, pageContext }: BlogIndexProps) => {
  const posts = data.allGhostPost.edges;

  return (
    <Layout>
      <MetaData title="Blog" />

      <section className="lc-section">
        <div className="lc-container lc-mx-auto">
          <ul>
            {posts.map(({ node: post }) => (
              <li key={post.slug}>
                <Link to={`/blog/${post.slug}`}>{post.title}</Link>
              </li>
            ))}
          </ul>
          <br />

          <Pagination pageContext={pageContext} />
        </div>
      </section>
    </Layout>
  );
};

export default BlogIndex;

// This page query loads all posts sorted descending by published date
// The `limit` and `skip` values are used for pagination
export const pageQuery = graphql`
  query GhostPostQuery($limit: Int!, $skip: Int!) {
    allGhostPost(
      sort: { order: DESC, fields: [published_at] }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          url
          slug
          title
        }
      }
    }
  }
`;
