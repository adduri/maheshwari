class AddDetailsToUsers < ActiveRecord::Migration
  def change
    add_column :users, :firstname, :string
    add_column :users, :middlename, :string
    add_column :users, :lastname, :string
    add_column :users, :gender, :string
    add_column :users, :dob, :date
    add_column :users, :mobileno, :string
    add_column :users, :occupation, :string
    add_column :users, :address, :text
    add_column :users, :city, :string
    add_column :users, :mj_id, :string
    add_column :users, :reqstatus, :boolean
    add_column :users, :visited, :boolean
    add_column :users, :payment, :float
    add_column :users, :due, :float
    add_column :users, :family_count, :integer
    
  end
end
