Rails.application.routes.draw do

  root 'sets#index'
  get 'sets/index'

  namespace :api do
    namespace :v1 do

      jsonapi_resources :collections do
        jsonapi_relationships
      end

      jsonapi_resources :biomaterial_sets do
        jsonapi_relationships
      end

      jsonapi_resources :biomaterials do
        jsonapi_relationships
      end

    end
  end

end
