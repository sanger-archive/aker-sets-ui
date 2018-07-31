require 'csv'

class MaterialsCsv

  CSV_FIELDS = [:id, :supplier_name, :amount, :volume, :tissue_type]

  attr_reader :set_id, :set, :params

  def initialize(params)
    @set_id = params.delete(:id)
    @params = params
  end

  def build(csv_params = {})
    material_ids = set.materials.map(&:id)

    return CSV::generate(csv_params) do |csv|

      csv << CSV_FIELDS

      fetch_materials(material_ids, params) do |result_set|
        result_set.each do |material|
          csv << material_row_formatter(material, CSV_FIELDS)
        end
      end
    end
  end

  def set
    @set ||= SetClient::Set.find_with_materials(set_id).first
  end

private

  def fetch_materials(material_ids, params, &block)
    query = MatconClient::Material.where(build_material_params(material_ids)).limit(1000)

    if params[:sortBy]
      query.order(Hash[params[:sortBy], params.fetch(:order, 1)])
    end

    result_set = query.result_set

    yield result_set.to_a

    while result_set.has_next? do
      result_set = result_set.next
      yield result_set.to_a
    end
  end

  def build_material_params(material_ids)
    { "_id" => { "$in" => material_ids } }
  end

  # Pass in the fields you want to extract. If for some reason it doesn't exist,
  # it will return an empty string
  def material_row_formatter(material, fields)
    fields.map do |field|
      begin
        material.send(field)
      rescue
        ""
      end
    end
  end



end