class CreateBiomaterialSets < ActiveRecord::Migration[5.0]
  def change
    create_table :biomaterial_sets do |t|
      t.text :name

      t.timestamps
    end
  end
end
