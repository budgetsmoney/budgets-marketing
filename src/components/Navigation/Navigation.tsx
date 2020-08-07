import React from 'react';
import { Link } from 'gatsby';

// Styles
import './navigation.scss';

export type NavigationProps = {
  items: Array<{
    label: string;
    url: string;
  }>;
};

const Navigation = ({ items }: NavigationProps) => (
  <nav className="navigation">
    <ul>
      {items.map(({ label, url }) => (
        <li key={url}>
          <Link to={url}>{label}</Link>
        </li>
      ))}
    </ul>
  </nav>
);

export default Navigation;
