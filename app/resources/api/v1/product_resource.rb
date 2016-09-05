module Api
  module V1
    class ProductResource < JSONAPI::Resource
      attribute :name
      has_many :product_options
    end
  end
end
