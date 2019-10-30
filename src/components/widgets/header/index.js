import { string } from 'prop-types';
import React, { useCallback } from 'react';
import { Link } from 'gatsby';
import { Location } from '@reach/router';

import { name } from 'pckg';
import { Filter } from 'components/widgets';

import withStyles from './style';

const Header = ({ className }) => {
  const renderFilter = useCallback(props => <Filter {...props} />, []);

  return (
    <header className={className}>
      <h2>
        <Link to="/" title="Go to the home page">
          {name}
        </Link>
      </h2>
      <Location>{renderFilter}</Location>
    </header>
  );
};

Header.propTypes = {
  className: string.isRequired,
};

Header.defaultProps = {};

export default withStyles(Header);
