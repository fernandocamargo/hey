export const selectById = id => ({ jobs }) => jobs.find(job => job.id === id);
