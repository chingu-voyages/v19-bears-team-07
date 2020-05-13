class AddAppsAndTagsBelongsTo < ActiveRecord::Migration[6.0]
  def change
    add_reference :apps, :user, foreign_key: true
    add_reference :tags, :app, foreign_key: true
  end
end
