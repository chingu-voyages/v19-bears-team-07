# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Create users

5.times do |i|
  user = User.create!(name: "User #{i}", email: "example#{i}@example.com", password: "my_solid_password")
  app = App.create!(name: "App #{i}", description: "An app.", user: user)
  tag = Tag.create!(name: "Games #{i}", description: "Fun fun fun", app: app)
end