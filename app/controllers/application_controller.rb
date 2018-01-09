class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  include JWTCredentials

  helper_method :jwt_provided?
  helper_method :current_user

  before_action do
    # This should not be enabled on any public-facing environment
    Rack::MiniProfiler.authorize_request unless Rails.env.production?
  end
end
