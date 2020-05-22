class CreateCategories < ActiveRecord::Migration[6.0]
  def change
    # create categories table
    create_table :categories do |t|
      t.string :name

      t.timestamps
    end

    # Create references to categories table
    add_reference :apps, :category
    add_foreign_key :apps, :categories, on_delete: :nullify
  end
end
