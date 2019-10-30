export const selectFromQuerystring = querystring => ({ jobs }) => {
  const { keywords, type, from, to, pageSize, page } = querystring;
  const pattern = new RegExp(keywords, 'gi');
  const checkForKeywords = ({
    contact: { website, phone, email },
    id,
    title,
    description,
    company,
    location,
  }) =>
    !keywords ||
    (!!id.match(pattern) ||
      !!title.match(pattern) ||
      !!description.match(pattern) ||
      !!company.match(pattern) ||
      !!location.match(pattern) ||
      !!website.match(pattern) ||
      !!phone.match(pattern) ||
      !!email.match(pattern));
  const checkForType = ({ employment_type }) =>
    !type || employment_type === type;
  const found = jobs.filter(job => checkForKeywords(job) && checkForType(job));
  const offset = [(page - 1) * pageSize, page * pageSize];

  return {
    results: found.slice(...offset),
    pages: Math.ceil(found.length / pageSize),
    found: found.length,
  };
};
