import { parse } from 'query-string';

const useQueryString = ({ search }) => {
  const { keywords = '', type = '', pageSize = 10, page = 1 } = parse(search);

  return { keywords, type, pageSize, page };
};

export default useQueryString;
