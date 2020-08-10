// Vendors
import React from 'react';
import { graphql } from 'gatsby';

// Components
import { Layout, MetaData } from '../components';

type PageProps = {
  data: {
    ghostPage: {
      feature_image: string;
      title: string;
      html: string;
    };
  };
};

const Page = ({ data }: PageProps) => {
  const page = data.ghostPage;

  return (
    <Layout>
      <MetaData title={page.title} />

      <section className="lc-section">
        <div className="lc-container lc-mx-auto">
          <article className="page">
            {page.feature_image ? (
              <img src={page.feature_image} alt={page.title} />
            ) : null}
            <h1>{page.title}</h1>
            <section dangerouslySetInnerHTML={{ __html: page.html }} />
          </article>
        </div>
      </section>
    </Layout>
  );
};

export default Page;

export const pageQuery = graphql`
  query($slug: String!) {
    ghostPage(slug: { eq: $slug }) {
      title
      slug
      feature_image
      html
    }
  }
`;
