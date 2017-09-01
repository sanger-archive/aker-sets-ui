class RackAkerServicesProxy < Rack::Proxy

  def perform_request(env)
    request = Rack::Request.new(env)
    if request.path =~ /^\/sets_service\/(.*)$/
      uri = URI.parse(Rails.configuration.sets_root)
      set_env(env, uri, $1)
      super(env)
    elsif request.path =~ /^\/stamps_service\/(.*)$/
      uri = URI.parse(Rails.configuration.stamps_root)
      set_env(env, uri, $1)
      super(env)
    elsif request.path =~ /^\/materials_service\/(.*)$/
      uri = URI.parse(Rails.configuration.materials_root)
      set_env(env, uri, $1)
      super(env)
    else
      @app.call(env)
    end
  end

private

  def set_env(env, uri, host_path)
    env["HTTP_HOST"] = uri.host
    env["SERVER_PORT"] = uri.port
    env["PATH_INFO"] = [uri.path, host_path].join("/")
  end
end