module Api
  module V1
    class BiomaterialResource < JSONAPI::Resource
      attributes :supplier, :supplier_identifier, :sanger_tube_barcode, :uuid, :biomaterial_type
      has_one :collection
      filter :collection_id

      def self.apply_filter(records, filter, value, options)
        if value == 'null' || (value.is_a?(Array) && value[0] == 'null')
          records.where(filter => nil)
        else
          return super
        end
      end
    end
  end
end