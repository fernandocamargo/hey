export const selectById = id => ({ settings: { starred } }) => ({
  starred: starred.includes(id),
});
