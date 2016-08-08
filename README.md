# Aker

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