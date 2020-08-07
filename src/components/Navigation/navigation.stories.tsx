import React from 'react';

import Navigation from './Navigation';

export default {
  title: 'Navigation'
};

export const NavigationStory = () => (
  <Navigation
    items={[
      {
        label: 'Home',
        url: '#'
      },
      {
        label: 'Blog',
        url: '#'
      }
    ]}
  />
);
