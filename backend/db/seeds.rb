# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Create users

5.times do |i|
  user = User.create!(
    name: "User #{i}",
    img: "image url #{i}",
    dev_bio: "Hey, I'm developer ##{i}",
    is_dev: true,
    dev_twitter: "twitter url for dev ##{i}",
    dev_github: "github url for dev ##{i}",
    dev_linkedin: "linkedin url for dev ##{i}",
    dev_portfolio: "portfolio url for dev ##{i}",
    email: "example#{i}@example.com", 
    password: "password"
    )

  app = App.create!(
    name: "App #{i}", 
    description: "An app description for App #{i}",
    img: "image url for app ##{i}",
    app_url: "link to app ##{i}",
    github_url: "github url for app ##{i}", 
    user: user
    )

  tag = Tag.create!(
    name: "Games #{i}", 
    description: "Fun fun fun", 
    app: app
    )
end