module Api
  module V1
    class ProductOptionResource < JSONAPI::Resource
      attribute :name
      attribute :select_type
      has_many :product_option_values
    end
  end
end
