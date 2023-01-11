class CreateMaterials < ActiveRecord::Migration[6.1]
  def change
    create_table :materials do |t|
      t.string :name
      t.integer :division
      t.string :installation_date
      t.string :subcontractor
      t.string :notes
      t.string :submittal_status

      t.timestamps
    end
  end
end
