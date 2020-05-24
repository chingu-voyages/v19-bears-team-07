class CascadeDeleteFromApps < ActiveRecord::Migration[6.0]
  def change
    remove_reference :apps, :user, foreign_key: true
    remove_reference :tags, :app, foreign_key: true
    add_reference :apps, :user
    add_reference :tags, :app
    add_foreign_key :apps, :users, on_delete: :cascade 
    add_foreign_key :tags, :apps, on_delete: :cascade
  end
end
