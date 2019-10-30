import { node } from 'prop-types';
import React, { Fragment } from 'react';
import { Provider as StateManager } from 'react-redux';
import { PersistGate as StatePersistence } from 'redux-persist/integration/react';
import { ThemeProvider as Theming } from 'styled-components';

import store, { persistor } from 'store';
import theme from 'theme';
import { GlobalStyle } from 'components/style';

const isDevelopment = process.env.NODE_ENV === 'development';

const Persistence = isDevelopment ? StatePersistence : Fragment;

const Root = ({ element }) => (
  <StateManager store={store}>
    <Persistence persistor={persistor} loading="Loading...">
      <Theming theme={theme}>
        <Fragment>
          <GlobalStyle />
          {element}
        </Fragment>
      </Theming>
    </Persistence>
  </StateManager>
);

Root.propTypes = {
  element: node.isRequired,
};

Root.defaultProps = {};

export default Root;
