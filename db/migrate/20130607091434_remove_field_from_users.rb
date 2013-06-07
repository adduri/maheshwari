class RemoveFieldFromUsers < ActiveRecord::Migration
  def up
    remove_column :users, :mj_id
    remove_column :users, :reqstatus
    remove_column :users, :visited
    remove_column :users, :payment
    remove_column :users, :due
  end

  def down
    add_column :users, :due, :float
    add_column :users, :payment, :float
    add_column :users, :visited, :boolean
    add_column :users, :reqstatus, :boolean
    add_column :users, :mj_id, :string
  end
end
