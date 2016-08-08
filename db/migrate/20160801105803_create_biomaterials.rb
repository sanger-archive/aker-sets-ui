class CreateBiomaterials < ActiveRecord::Migration[5.0]
  def change
    create_table :biomaterials do |t|
      t.string :supplier
      t.string :supplier_identifier
      t.string :sanger_tube_barcode
      t.string :uuid
      t.string :biomaterial_type
      t.string :metadata

      t.references :collection, foreign_key: true

      t.timestamps
    end
  end
end
