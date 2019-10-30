import { string, node } from 'prop-types';
import React, { useMemo, Fragment } from 'react';
import Helmet from 'react-helmet';

import { name, description as about, author } from 'pckg';
import { Header, Footer } from 'components/widgets';

import withStyles from './style';

const htmlAttributes = { lang: 'en' };

const titleTemplate = `%s | ${name}`;

const Page = ({ className, title, description, children }) => {
  const meta = useMemo(
    () => [
      { name: `description`, content: description },
      { property: `og:title`, content: title },
      { property: `og:description`, content: description },
      { property: `og:type`, content: `website` },
      { name: `twitter:card`, content: `summary` },
      { name: `twitter:creator`, content: author },
      { name: `twitter:title`, content: title },
      { name: `twitter:description`, content: description },
    ],
    [title, description]
  );

  return (
    <Fragment>
      <Helmet
        htmlAttributes={htmlAttributes}
        titleTemplate={titleTemplate}
        title={title}
        meta={meta}
      >
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </Helmet>
      <div className={className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </Fragment>
  );
};

Page.propTypes = {
  className: string.isRequired,
  title: string,
  description: string,
  children: node.isRequired,
};

Page.defaultProps = {
  title: name,
  description: about,
};

export default withStyles(Page);
