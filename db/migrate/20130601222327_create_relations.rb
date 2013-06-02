class CreateRelations < ActiveRecord::Migration
  def change
    create_table :relations do |t|
      t.string :relationship
      t.integer :priority

      t.timestamps
    end
  end
end
