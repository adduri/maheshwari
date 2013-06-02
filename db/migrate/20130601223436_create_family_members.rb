class CreateFamilyMembers < ActiveRecord::Migration
  def change
    create_table :family_members do |t|
      t.integer :user_id
      t.integer :family_member_user_id
      t.string :relationship
      t.boolean :join_pending
      t.boolean :payment_status
      t.integer :relation_id
      t.boolean :deactivate

      t.timestamps
    end
  end
end
