# frozen_string_literal: true

source 'https://rubygems.org'

# Force git gems to use secure HTTPS
git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?('/')
  "https://github.com/#{repo_name}.git"
end

# All the gems not in a group will always be installed:
#   http://bundler.io/v1.6/groups.html#grouping-your-dependencies
gem 'bootsnap', require: false
gem 'bootstrap-sass', '~> 3.3.6'
gem 'bootstrap_form'
gem 'faraday'
gem 'font-awesome-sass'
gem 'jbuilder', '~> 2.5' # Read more: https://github.com/rails/jbuilder
gem 'jquery-rails'
gem 'pg', '~> 0.18'
gem 'puma', '~> 3.0' # Use Puma as the app server
gem 'rack-proxy', '~> 0.6.2', require: true
gem 'rails', '~> 5.2.0'
gem 'sass-rails', '~> 5.0' # Use SCSS for stylesheets
gem 'therubyracer', platforms: :ruby # See https://github.com/rails/execjs#readme
gem 'turbolinks', '~> 5'
gem 'uglifier', '>= 1.3.0' # Use Uglifier as compressor for JavaScript assets
gem 'webpacker', '~> 3.5'
gem 'health_check'

###
# Sanger gems
###
gem 'aker_credentials_gem', github: 'sanger/aker-credentials'
gem 'aker_shared_navbar', github: 'sanger/aker-shared-navbar'

###
# Groups
###
group :development, :test do
  gem 'byebug', platform: :mri
end

group :development do
  gem 'foreman' # So we can run the webpack-dev-server and rails server at the same time
  gem 'listen', '~> 3.0.5'
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
  gem 'web-console'
end

group :test do
  gem 'capybara'
  gem 'database_cleaner'
  gem 'factory_bot_rails'
  gem 'launchy'
  gem 'poltergeist'
  gem 'rspec-rails', '~> 3.4'
end
