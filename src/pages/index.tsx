// Vendors
import React from 'react';
import { Link } from 'gatsby';

// Components
import { Layout, Image, MetaData } from '../components';

const IndexPage = () => (
  <Layout>
    <MetaData title="Home" />
    <section className="lc-section">
      <div className="lc-container lc-mx-auto">
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
          <Image />
        </div>
        <Link to="/page-2/">Go to page 2</Link> <br />
        <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
