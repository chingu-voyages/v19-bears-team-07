class CreateApps < ActiveRecord::Migration[6.0]
  def change
    create_table :apps do |t|
      t.string :name
      t.text :description
      t.string :img
      t.string :app_url


      t.timestamps
    end
  end
end
