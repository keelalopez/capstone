class CreateJoiners < ActiveRecord::Migration[6.1]
  def change
    create_table :joiners do |t|
      t.integer :project_id
      t.integer :material_id
      
      t.timestamps
    end
  end
end
