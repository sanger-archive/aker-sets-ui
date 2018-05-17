source 'https://rubygems.org'


# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '~> 5.0.0'
# Use Puma as the app server
gem 'puma', '~> 3.0'
# Use SCSS for stylesheets
gem 'sass-rails', '~> 5.0'
# Use Uglifier as compressor for JavaScript assets
gem 'uglifier', '>= 1.3.0'
# See https://github.com/rails/execjs#readme for more supported runtimes
gem 'therubyracer', platforms: :ruby
gem 'jquery-rails'

# Turbolinks makes navigating your web application faster. Read more: https://github.com/turbolinks/turbolinks
gem 'turbolinks', '~> 5'
# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'jbuilder', '~> 2.5'
# Use Redis adapter to run Action Cable in production
# gem 'redis', '~> 3.0'
# Use ActiveModel has_secure_password
# gem 'bcrypt', '~> 3.1.7'

gem 'aker_shared_navbar', github: 'sanger/aker-shared-navbar'

# Use Capistrano for deployment
# gem 'capistrano-rails', group: :development

# JSON API
gem 'jsonapi-resources', '~> 0.7.1.beta2'

# For those styles
gem 'bootstrap-sass', '~> 3.3.6'

# For extra awesomeness
gem 'font-awesome-sass'

# So we can run the webpack-dev-server and rails server at the same time
gem 'foreman'

gem 'rubocop', '~> 0.5', require: false

gem 'pg', '~> 0.18'
gem 'rack-proxy', '~> 0.6.2', require: true

gem 'aker_credentials_gem', github: 'sanger/aker-credentials'
gem 'faraday'

gem 'bootstrap_form'


group :development, :test do
  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'byebug', platform: :mri
  # Use sqlite3 as the database for Active Record
  gem 'sqlite3'
end

group :test do
  gem 'rspec-rails', '~> 3.4'
  gem 'launchy'
  gem 'capybara'
  gem 'poltergeist'
  gem 'factory_bot_rails'
  gem 'database_cleaner'
end

group :development do
  # Access an IRB console on exception pages or by using <%= console %> anywhere in the code.
  gem 'web-console'
  gem 'listen', '~> 3.0.5'
  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]

gem 'simplecov', :require => false, :group => :test
gem 'simplecov-rcov', :group => :test
gem 'rubycritic', :group => :test
