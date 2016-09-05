# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160901153629) do

  create_table "aims", force: :cascade do |t|
    t.string   "name"
    t.integer  "project_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["project_id"], name: "index_aims_on_project_id"
  end

  create_table "biomaterial_sets", force: :cascade do |t|
    t.text     "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "biomaterials", force: :cascade do |t|
    t.string   "supplier"
    t.string   "supplier_identifier"
    t.string   "sanger_tube_barcode"
    t.string   "uuid"
    t.string   "biomaterial_type"
    t.string   "metadata"
    t.integer  "collection_id"
    t.datetime "created_at",          null: false
    t.datetime "updated_at",          null: false
    t.index ["collection_id"], name: "index_biomaterials_on_collection_id"
  end

  create_table "collections", force: :cascade do |t|
    t.string   "name"
    t.integer  "program_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["program_id"], name: "index_collections_on_program_id"
  end

  create_table "product_option_values", force: :cascade do |t|
    t.integer  "product_option_id"
    t.string   "value"
    t.datetime "created_at",        null: false
    t.datetime "updated_at",        null: false
    t.index ["product_option_id"], name: "index_product_option_values_on_product_option_id"
  end

  create_table "product_options", force: :cascade do |t|
    t.integer  "product_id"
    t.string   "name"
    t.string   "select_type"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.index ["product_id"], name: "index_product_options_on_product_id"
  end

  create_table "products", force: :cascade do |t|
    t.text     "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "programs", force: :cascade do |t|
    t.string   "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "projects", force: :cascade do |t|
    t.string   "name"
    t.integer  "program_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["program_id"], name: "index_projects_on_program_id"
  end

  create_table "proposals", force: :cascade do |t|
    t.string   "name"
    t.integer  "aim_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["aim_id"], name: "index_proposals_on_aim_id"
  end

  create_table "set_elements", force: :cascade do |t|
    t.integer  "biomaterial_id"
    t.integer  "biomaterial_set_id"
    t.datetime "created_at",         null: false
    t.datetime "updated_at",         null: false
    t.index ["biomaterial_id", "biomaterial_set_id"], name: "index_set_elements_on_biomaterial_id_and_biomaterial_set_id", unique: true
    t.index ["biomaterial_id"], name: "index_set_elements_on_biomaterial_id"
    t.index ["biomaterial_set_id"], name: "index_set_elements_on_biomaterial_set_id"
  end

end
