Rails.application.routes.draw do

  root 'sets#index'
  get 'sets/index'
  get 'search', controller: :sets, action: :search

end
