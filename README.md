# Aker Set Shaper

Getting Started
---

The project relies on Bundler and npm for ruby and javascript dependencies.

    bundle install && npm install

Running the test suites
---

RSpec is used for the server tests. All the tests sit in the `spec` directory.

    bundle exec rake spec

Karma is the test runner for the javascript tests. All the tests sit in the `spec/js` directory.

    npm test

or

    bundle exec rake test:js

To run both the RSpec tests and the Karma tests:

    bundle exec rake test:all

Development
---

The javascript is written in ES6 and relies on webpack to transform and bundle it into ES5. It is located in the `app/client` directory. You can enable webpack-dev-server to watch and incrementally rebuild your javascript on save by running:

    npm start

There is also a Procfile used by foreman for when you wish to have your Rails server and webpack-dev-server running side by side:

    foreman start

Note that if any changes are made in the `app/client` or `app/assets` directories, any files in the `public/assets` directory must be removed, and webpack must be run with the `webpack.prod.conf.js` configuration file:

    rm -r public/assets
    RAILS_ENV=production bundle exec rake webpack:compile

This creates the minified js files and also creates a manifest file that Rails can use to serve these files. You may want to do all this automatically as a git pre-commit hook e.g.

    #!/bin/sh

    files=`git diff --cached --name-only`
    re="app\/client|app\/assets"
    if [[ $files =~ $re ]]
    then
        echo "Files have been modified in app/client or app/assets. Pre-compiling..."
        rm -r public/assets
        RAILS_ENV=production bundle exec rake webpack:compile
        git add -A
    fi

There is some Rack middleware that is inserted in the development environment file. This is to proxy any requests to external services e.g. set service, materials service and avoid CORS issues.
