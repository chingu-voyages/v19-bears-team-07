# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Create users

5.times do |i|
  user = User.create!(name: "User #{i}", email: "test#{i}@test.com", password: "my_password")
  app = App.create!(name: "App #{i}", description: "This is an app.", user: user)
  tag = Tag.create!(name: "Games #{i}", description: "This is fun", app: app)
  comment = Comment.create!(comment: "This is a great app #{i}!", score: "#{i}", app: app)
end