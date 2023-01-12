# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

<<<<<<< HEAD
ActiveRecord::Schema.define(version: 2023_01_11_200933) do
=======
ActiveRecord::Schema.define(version: 2023_01_11_220250) do
>>>>>>> 95f3dab70515a69af1e2c5fd6d8d450438519cd9

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

<<<<<<< HEAD
  create_table "joiners", force: :cascade do |t|
    t.integer "project_id"
    t.integer "material_id"
=======
  create_table "divisions", force: :cascade do |t|
    t.integer "number"
    t.string "name"
>>>>>>> 95f3dab70515a69af1e2c5fd6d8d450438519cd9
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "materials", force: :cascade do |t|
    t.string "name"
<<<<<<< HEAD
    t.integer "division"
    t.string "installation_date"
    t.string "subcontractor"
    t.string "notes"
    t.string "submittal_status"
=======
    t.string "status"
    t.integer "project_id"
    t.integer "division_id"
>>>>>>> 95f3dab70515a69af1e2c5fd6d8d450438519cd9
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "projects", force: :cascade do |t|
    t.string "name"
    t.string "address"
    t.string "completion_date"
    t.string "architect"
    t.string "owner"
    t.integer "user_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "name"
    t.string "password_digest"
    t.string "company"
    t.string "position"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

end
