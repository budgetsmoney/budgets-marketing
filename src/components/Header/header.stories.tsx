import React from 'react';

import Header from './Header';

export default {
  title: 'Header'
};

export const HeaderStory = () => (
  <Header
    siteTitle="Budgets"
    logo={'#'}
    navigation={[
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
