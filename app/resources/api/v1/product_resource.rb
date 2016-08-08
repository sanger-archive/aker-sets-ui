module Api
  module V1
    class ProductResource < JSONAPI::Resource
      attribute :name
    end
  end
end
