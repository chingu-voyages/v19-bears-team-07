class CreateTags < ActiveRecord::Migration[6.0]
  def change
    create_table :tags do |t|
      t.string :name
      t.text :description
      t.string :img

      t.timestamps
    end
  end
end
