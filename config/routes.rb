Rails.application.routes.draw do

  root 'collections#index'

  get 'collections/index'
  get 'sets/index'

  resources :work_orders, only: [:new]

  namespace :api do
    namespace :v1 do

      jsonapi_resources :products

      jsonapi_resources :collections do
        jsonapi_relationships
      end

      jsonapi_resources :biomaterial_sets do
        jsonapi_relationships
      end

      jsonapi_resources :biomaterials do
        jsonapi_relationships
      end

      jsonapi_resources :programs do
        jsonapi_relationships
      end

      jsonapi_resources :projects do
        jsonapi_relationships
      end

      jsonapi_resources :aims do
        jsonapi_relationships
      end

      jsonapi_resources :proposals do
        jsonapi_relationships
      end

    end
  end

end
