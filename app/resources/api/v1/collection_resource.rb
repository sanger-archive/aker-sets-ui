module Api
  module V1
    class CollectionResource < JSONAPI::Resource
      attribute :name
      has_many :biomaterials
    end
  end
end