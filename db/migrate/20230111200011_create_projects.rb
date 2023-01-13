class CreateProjects < ActiveRecord::Migration[6.1]
  def change
    create_table :projects do |t|
      t.string :name
      t.string :address
      t.string :completion_date
      t.string :architect
      t.string :owner
      t.integer :user_id

      t.timestamps
    end
  end
end
