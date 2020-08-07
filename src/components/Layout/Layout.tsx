/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

// Vendors
import React, { ReactNode } from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

// Components
import { Header } from '..';

// Styles
import './layout.scss';
import '../../styles/index.scss';

// Types
export type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  // See documentation: https://ghost.org/docs/api/v3/content/#settings
  const siteSettings = useStaticQuery(
    graphql`
      query GhostSettingsMetaData {
        allGhostSettings {
          edges {
            node {
              title
              description
              logo
              url
              meta_title
              navigation {
                label
                url
              }
              codeinjection_head
              codeinjection_foot
            }
          }
        }
      }
    `
  );

  const settings = siteSettings.allGhostSettings.edges[0].node;

  return (
    <>
      <Header {...settings} />

      <main>{children}</main>

      <footer>
        <div className="lc-container lc-mx-auto">
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </div>
      </footer>
    </>
  );
};

export default Layout;
