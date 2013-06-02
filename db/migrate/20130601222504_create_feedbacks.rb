class CreateFeedbacks < ActiveRecord::Migration
  def change
    create_table :feedbacks do |t|
      t.text :details
      t.integer :user_id

      t.timestamps
    end
  end
end
