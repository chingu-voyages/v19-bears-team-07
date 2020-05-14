class AddGithubUrlToApps < ActiveRecord::Migration[6.0]
  def change
    add_column :apps, :github_url, :string
  end
end
