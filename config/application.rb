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

    if Rails.env.production? || Rails.env.staging?
      config.urls = { submission: "https://dev.psd.sanger.ac.uk:9002/submission",
                      permissions: "https://dev.psd.sanger.ac.uk:9009/stamps-ui",
                      sets: "https://dev.psd.sanger.ac.uk:9001/set-shaper",
                      projects: "https://dev.psd.sanger.ac.uk:9003/study",
                      work_orders: "https://dev.psd.sanger.ac.uk:9004/work-orders" }
    elsif Rails.env.development?
      config.urls = { submission: "",
                      permissions: "",
                      sets: "",
                      projects: "",
                      work_orders: "" }
    end

  end
end
