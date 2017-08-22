Rails.application.routes.draw do

  root 'sets#index'
  get 'sets/index'
  get 'search', controller: :sets, action: :search
  post 'token', controller: :tokens, action: :create

end
