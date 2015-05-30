Package.describe({
  name: 'rocket:webpack',
  version: '1.9.10',
  summary: 'Provides Webpack from NPM.',
  git: 'git@github.com:trusktr/rocket-webpack.git',
  documentation: 'README.md'
})

Npm.depends({
    'webpack': "1.9.10",
})

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2')
  api.addFiles('webpack.js', 'server')
  api.export('Webpack', 'server')
})

Package.onTest(function(api) {
  api.use('tinytest')
  api.use('rocket:webpack')
  api.addFiles('webpack-tests.js')
})
