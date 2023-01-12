class CreateDivisions < ActiveRecord::Migration[6.1]
  def change
    create_table :divisions do |t|
      t.integer :number
      t.string :name

      t.timestamps
    end
  end
end
