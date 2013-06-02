class CreateEvents < ActiveRecord::Migration
  def change
    create_table :events do |t|
      t.string :title
      t.text :content
      t.string :youtube_link

      t.timestamps
    end
  end
end
