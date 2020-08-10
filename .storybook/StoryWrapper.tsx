import React from 'react';

import '../src/styles/index.scss';

export const StoryWrapper = ({ children }) => (
  <div className="storybook-wrapper">{children}</div>
);

export default StoryWrapper;
