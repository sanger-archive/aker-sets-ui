class Net::HTTP::Delete < Net::HTTPRequest
  if ENV['RAILS_ENV'] == 'development' || 'test'
    REQUEST_HAS_BODY = true
  end
end