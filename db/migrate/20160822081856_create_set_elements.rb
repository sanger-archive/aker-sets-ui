class CreateSetElements < ActiveRecord::Migration[5.0]
  def change
    create_table :set_elements do |t|
      t.references :biomaterial
      t.references :biomaterial_set

      t.timestamps

    end

    add_index :set_elements, [:biomaterial_id, :biomaterial_set_id], unique: true
  end
end
