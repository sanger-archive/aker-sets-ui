Rails.application.configure do
  # Verifies that versions and hashed value of the package contents in the project's package.json
  config.webpacker.check_yarn_integrity = true
  # Settings specified here will take precedence over those in config/application.rb.

  # In the development environment your application's code is reloaded on
  # every request. This slows down response time but is perfect for development
  # since you don't have to restart the web server when you make code changes.
  config.cache_classes = false

  # Do not eager load code on boot.
  config.eager_load = false

  # Show full error reports.
  config.consider_all_requests_local = true

  # Enable/disable caching. By default caching is disabled.
  # Run rails dev:cache to toggle caching.
  if Rails.root.join('tmp', 'caching-dev.txt').exist?
    config.action_controller.perform_caching = true

    config.cache_store = :memory_store
    config.public_file_server.headers = {
      "Cache-Control" => "public, max-age=#{2.days.to_i}"
    }
  else
    config.action_controller.perform_caching = false

    config.cache_store = :null_store
  end

  # Don't care if the mailer can't send.
  config.action_mailer.raise_delivery_errors = false

  config.action_mailer.perform_caching = false

  # Print deprecation notices to the Rails logger.
  config.active_support.deprecation = :log

  # Debug mode disables concatenation and preprocessing of assets.
  # This option may cause significant delays in view rendering with a large
  # number of complex assets.
  config.assets.debug = true

  # Suppress logger output for asset requests.
  config.assets.quiet = false

  # Use a different URL for serving assets in development mode, and pass all requests to Sprockets
  # http://guides.rubyonrails.org/asset_pipeline.html#local-precompilation
  # config.assets.prefix = "/assets"

  # Raises error for missing translations
  # config.action_view.raise_on_missing_translations = true

  # Use an evented file watcher to asynchronously detect changes in source code,
  # routes, locales, etc. This feature depends on the listen gem.
  config.file_watcher = ActiveSupport::EventedFileUpdateChecker

  config.fake_ldap = true

  # This config is only used for local proxying stuff. Don't include it in live environment configs.
  config.material_service_local_root = 'http://localhost:5000'
  config.material_service_local_proxy_path = 'material_service'
  config.permission_service_local_root = 'http://localhost:7000'
  config.permission_service_local_proxy_path = 'permission_service'
  config.set_service_local_root = 'http://localhost:3000'
  config.set_service_local_proxy_path = 'set_service'

  config.jwt_secret_key = 'development'

  config.default_jwt_user = { email: ENV.fetch('USER', 'user') + '@sanger.ac.uk', groups: ['world'] }
  config.generate_default_jwt = true

  config.auth_service_url = 'http://localhost:9010'
  config.login_url = config.auth_service_url + '/login'
  config.logout_url = config.auth_service_url + '/logout'

  config.middleware.insert(0, RackAkerServicesProxy, { ssl_verify_none: true })

  config.urls = { reception: '',
                  permissions: '',
                  sets: '',
                  projects: '',
                  work: '' }
                  
end
