module ApplicationHelper

  def webpack_include_tag(source, options = {})
    source = "#{Rails.application.config.webpack_dev_server_host}/#{source}.js" if ENV['WEBPACK_DEV_SERVER']
    javascript_include_tag source, options
  end

end
