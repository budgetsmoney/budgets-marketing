import { Link } from 'gatsby';
import React from 'react';

import { Navigation } from '..';

// Styles
import './header.scss';

export type HeaderProps = {
  /** Site title for logo alt text. */
  siteTitle?: string;
  /** Company logo. */
  logo?: string;
  /** Primary navigiaton items. */
  navigation: Array<{
    label: string;
    url: string;
  }>;
};

const Header = ({ siteTitle = '', logo, navigation }: HeaderProps) => {
  return (
    <header className="header">
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`
          }}
        >
          <img className="logo" src={logo} alt={`${siteTitle} logo`} />
        </Link>
      </h1>
      <Navigation items={navigation} />
    </header>
  );
};

export default Header;
