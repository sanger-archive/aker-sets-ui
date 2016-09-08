module ApplicationHelper

  def webpack_include_tag(source, options = {})
    source = if ENV['WEBPACK_DEV_SERVER']
               "#{Rails.application.config.webpack_dev_server_host}/#{source}.js"

             elsif Rails.configuration.webpack[:use_manifest]
               manifest = Rails.configuration.webpack[:asset_manifest]
               filename = manifest[source]

               "#{compute_asset_host}/assets/#{filename}"
             else
               "#{compute_asset_host}/assets/#{source}"
             end


    javascript_include_tag source, options
  end

  def webpack_manifest_script
    return '' unless Rails.configuration.webpack[:use_manifest]
    javascript_tag "window.webpackManifest = #{Rails.configuration.webpack[:common_manifest].to_json}"
  end

end
