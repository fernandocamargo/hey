import React from 'react';

import withStyle from './style';

const Contact = ({
  contact: { website, phone, email },
  className,
  company,
}) => (
  <dl className={className}>
    <dt>Contact</dt>
    <dd>
      <dl className="website">
        <dt>Website</dt>
        <dd>
          <a
            href={website}
            target="_blank"
            rel="noopener noreferrer"
            title={`Visit ${company}'s website`}
          >
            {website}
          </a>
        </dd>
      </dl>
      <dl className="phone">
        <dt>Phone</dt>
        <dd>
          <a
            href={`tel:${phone}`}
            target="_blank"
            rel="noopener noreferrer"
            title={`Call ${company}'s phone number`}
          >
            {phone}
          </a>
        </dd>
      </dl>
      <dl className="email">
        <dt>E-mail</dt>
        <dd>
          <a
            href={`mailto:${email}`}
            target="_blank"
            rel="noopener noreferrer"
            title={`Write an e-mail to ${company}'s address`}
          >
            {email}
          </a>
        </dd>
      </dl>
    </dd>
  </dl>
);

export default withStyle(Contact);
