// Vendors
import React from 'react';
import { graphql } from 'gatsby';

// Components
import { Layout, MetaData } from '../components';

// Types
type PostProps = {
  data: {
    ghostPost: {
      slug: string;
      feature_image: string;
      title: string;
      html: string;
    };
  };
};

const Post = ({ data }: PostProps) => {
  const post = data.ghostPost;

  return (
    <Layout>
      <MetaData title={post.title} />

      <section className="lc-section">
        <div className="lc-container lc-mx-auto">
          <article className="post">
            {post.feature_image ? (
              <img src={post.feature_image} alt={post.title} />
            ) : null}
            <h1>{post.title}</h1>
            <section dangerouslySetInnerHTML={{ __html: post.html }} />
          </article>
        </div>
      </section>
    </Layout>
  );
};

export default Post;

export const postQuery = graphql`
  query($slug: String!) {
    ghostPost(slug: { eq: $slug }) {
      title
      slug
      feature_image
      html
    }
  }
`;
