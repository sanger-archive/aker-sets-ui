module Api
  module V1
    class BiomaterialSetResource < JSONAPI::Resource
      attributes :name, :created_at
      has_many :biomaterials

      def meta(options)
        {
          size: _model.biomaterials.count
        }
      end
    end
  end
end