require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module Aker
  class Application < Rails::Application
    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration should go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded.

    config.generators do |g|
      g.test_framework :rspec,
                       fixtures: true,
                       view_specs: false,
                       helper_specs: false,
                       routing_specs: false,
                       controller_specs: false,
                       request_specs: true

      g.fixture_replacement :factory_girl, dir: 'spec/factories'

      g.assets false
    end

    config.webpack = {
      :use_manifest => false,
      :asset_manifest => {},
      :common_manifest => {},
    }

    if Rails.env.production? || Rails.env.staging?
      config.ldap = config_for(:ldap)
    end

    unless Rails.env.production? || Rails.env.staging?

      config.middleware.insert(0, Rack::ReverseProxy) do
        reverse_proxy_options preserve_host: true
        reverse_proxy /^\/studies_service(\/.*)$/, "#{Rails.configuration.studies_root}$1"
        reverse_proxy /^\/sets_service(\/.*)$/, "#{Rails.configuration.sets_root}$1"
        reverse_proxy /^\/stamps_service(\/.*)$/, "#{Rails.configuration.stamps_root}$1"
        reverse_proxy /^\/materials_service(\/.*)$/, "#{Rails.configuration.materials_root}$1"
      end
    end

  end
end
