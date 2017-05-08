Rails.application.routes.draw do

  root 'sets#index'
  get 'sets/index'
  post 'token', controller: :tokens, action: :create

end
