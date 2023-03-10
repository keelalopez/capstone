class CreateMaterials < ActiveRecord::Migration[6.1]
  def change
    create_table :materials do |t|
      t.string :name
      t.string :status
      t.integer :lead_time
      t.string :need_by_date

      t.integer :project_id
      t.integer :division_id

      t.timestamps
    end
  end
end
