Rails.application.routes.draw do

  root to: redirect('simple')

  get 'simple', to: 'sets#index'
  get 'simple/*unused', to: 'sets#index'
  get 'advanced', to: 'sets#search'
  get 'advanced/*unused', to: 'sets#search'

end
