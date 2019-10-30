const path = require('path');
const slugify = require('slugify');
const jobs = require('./src/data/jobs');

exports.onCreateWebpackConfig = ({ actions: { setWebpackConfig } }) =>
  setWebpackConfig({
    resolve: { modules: [path.resolve(__dirname, 'src'), 'node_modules'] },
  });

exports.createPages = ({ actions: { createPage } }) =>
  Promise.resolve(
    jobs.forEach(({ id, title }) =>
      createPage({
        path: `/job/${id}/${slugify(title)}`.toLowerCase(),
        component: path.resolve(
          './src/components/templates/pages/job/index.js'
        ),
        context: { id },
      })
    )
  );
