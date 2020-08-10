import React from 'react';
import { action } from '@storybook/addon-actions';
import { withA11y } from '@storybook/addon-a11y';
import { addDecorator } from '@storybook/react';
import { addParameters } from '@storybook/react';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';
import { withInfo } from '@storybook/addon-info';
import StorybookWrapper from './StoryWrapper';
import StoryPropTypesTable from './StoryPropTypesTable';

// Gatsby's Link overrides:
// Gatsby Link calls the `enqueue` & `hovering` methods on the global variable ___loader.
// This global object isn't set in storybook context, requiring you to override it to empty functions (no-op),
// so Gatsby Link doesn't throw any errors.
global.___loader = {
  enqueue: () => {},
  hovering: () => {}
};

// Navigating through a gatsby app using gatsby-link or any other gatsby component will use the `___navigate` method.
// In Storybook it makes more sense to log an action than doing an actual navigate. Checkout the actions addon docs for more info: https://github.com/storybookjs/storybook/tree/master/addons/actions.

window.___navigate = pathname => {
  action('NavigateTo:')(pathname);
};

addDecorator(storyFn => <StorybookWrapper>{storyFn()}</StorybookWrapper>);
addDecorator(
  withInfo({
    inline: true,
    source: false,
    header: false,
    propTablesExclude: [StorybookWrapper],
    TableComponent: StoryPropTypesTable
  })
);

addDecorator(withA11y);

addParameters({
  viewMode: 'docs',
  options: {
    storySort: (a, b) =>
      a[1].kind === b[1].kind
        ? 0
        : a[1].id.localeCompare(b[1].id, undefined, { numeric: true })
  }
});

addParameters({
  docs: {
    container: DocsContainer,
    page: DocsPage
  }
});
