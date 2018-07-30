Rails.application.config.after_initialize do
  MatconClient::Model.site = Rails.application.config.material_url

  MatconClient::Model.connection do |connection|
    ENV['HTTP_PROXY'] = nil
    ENV['http_proxy'] = nil
    ENV['https_proxy'] = nil
    connection.faraday.proxy ''
  end
end
