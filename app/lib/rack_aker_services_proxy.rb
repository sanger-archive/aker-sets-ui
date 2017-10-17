require 'faraday'

class RackAkerServicesProxy < Rack::Proxy

  def perform_request(env)
    request = Rack::Request.new(env)
    if request.path =~ /^\/sets_service\/(.*)$/
      uri = URI.parse(Rails.configuration.sets_root)
      set_env(env, uri, request, $1)
      super(env)
    elsif request.path =~ /^\/stamps_service\/(.*)$/
      uri = URI.parse(Rails.configuration.stamps_root)
      set_env(env, uri, request, $1)
      super(env)
    elsif request.path =~ /^\/materials_service\/(.*)$/
      uri = URI.parse(Rails.configuration.materials_root)
      set_env(env, uri, request, $1)
      super(env)
    else
      @app.call(env)
    end
  end

private

  def set_env(env, uri, request, host_path)
    env["HTTP_HOST"] = uri.host
    env["SERVER_PORT"] = uri.port
    env["PATH_INFO"] = [uri.path, host_path].join("/")
    env["HTTP_CONNECTION"] = "close"
    env["HTTP_X_AUTHORISATION"] = get_jwt(request)
  end

  def get_cached_jwt(auth_session)
    if @jwt_cache && @jwt_cache[auth_session] && Time.now < @jwt_cache[auth_session][:time] + 3000 # 50 minutes
      @jwt_cache[auth_session][:jwt]
    else
      nil
    end
  end

  def cache_jwt(auth_session, jwt)
    @jwt_cache ||= {}
    @jwt_cache[auth_session] = { jwt: jwt, time: Time.now }
  end

  # This is a temporary stab at getting a jwt using the auth service session.
  # It caches users' jwts and auth session, and will reuse the jwt if
  #  it sees the same auth session within 50 minutes.
  def get_jwt(request)
    auth_session = request.cookies["aker_auth_session"]
    return nil unless auth_session
    jwt = get_cached_jwt(auth_session)
    return jwt if jwt
    begin
      conn = Faraday.new(url: Rails.configuration.auth_service_url)
      auth_response = conn.post do |req|
        req.url '/renew_jwt'
        req.headers['Cookie'] = "aker_auth_session=#{auth_session}"
      end
    rescue
      return nil
    end
    return nil unless auth_response.status==200
    jwt = auth_response.body
    cache_jwt(auth_session, jwt)
    return jwt
  end
end
