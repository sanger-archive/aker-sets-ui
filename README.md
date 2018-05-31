# Aker Set Shaper

Getting Started
---

The project relies on Bundler and yarn for ruby and javascript dependencies.

    bundle install # Installs ruby dependencies specified in Gemfile with bundler
    bundle exec rake yarn:install # Installs javascript dependencies specified in package.json with yarn

Running the test suites
---

Karma is the test runner for the javascript tests. Tests sit in the same directory as the javascript i.e. `app/javascript`.

    npm test

or

    bundle exec rake test:js

Development
---

The javascript is written in ES6 and relies on webpack (managed by the rails [webpacker](https://github.com/rails/webpacker) gem) to transform and bundle it into ES5. It is located in the `app/javascript` directory.

The app generally uses the default configuration as provided by webpacker, which can be found in `config/webpacker.yml`.

Webpacker will automatically compile the javascript when `rails server` is run. There are also 2 binstubs available: `./bin/webpack` and `./bin/webpack-dev-server`. If you run `./bin/webpack-dev-server` it will watch and incrementally rebuild your javascript on save (which is a lot quicker).

There is also a Procfile used by foreman for when you wish to have your Rails server and webpack-dev-server running side by side:

    foreman start

Old Versions
---

Before the `webpacker` gem was introduced, it used to be the case that javascript assets would have to be precompiled before pushing your work to Github. **This is no longer necessary** 🙌