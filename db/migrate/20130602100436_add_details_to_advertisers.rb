class AddDetailsToAdvertisers < ActiveRecord::Migration
  def change
    add_column :advertisers, :company_name, :string
    add_column :advertisers, :contact_person1_name, :string
    add_column :advertisers, :contact_person1_mobile, :string
    add_column :advertisers, :contact_person2_name, :string
    add_column :advertisers, :contact_person2_mobile, :string
    add_column :advertisers, :house_number, :string
    add_column :advertisers, :street, :string
    add_column :advertisers, :area, :string
    add_column :advertisers, :city, :string
    add_column :advertisers, :state, :string
    add_column :advertisers, :country, :string
    add_column :advertisers, :product_dealt, :text
    add_column :advertisers, :tin_no, :string
    add_column :advertisers, :website, :string
    add_column :advertisers, :tel_no1, :string
    add_column :advertisers, :tel_no2, :string
  end
end
