class AddDevColumnsToUsers < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :name, :string
    add_column :users, :img, :string
    add_column :users, :is_dev, :boolean
    add_column :users, :dev_bio, :text
    add_column :users, :dev_twitter, :string
    add_column :users, :dev_github, :string
    add_column :users, :dev_linkedin, :string
    add_column :users, :dev_portfolio, :string
  end
end
