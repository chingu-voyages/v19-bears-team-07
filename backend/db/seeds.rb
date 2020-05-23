# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

names = [
  'Developer Tools', 
  'Games', 
  'News & Weather',
  'Productivity',
  'Shopping',
  'Social'
]

5.times do |i|

  user = User.create!(
    name: "User #{i}",
    img: "https://media.npr.org/assets/img/2020/02/20/zachwoods_hbo_bullseye2020_custom-539527210f27f2329bc46b37bbffc3742de8e1f7-s800-c85.jpeg",
    dev_bio: "Hey, I'm developer ##{i}",
    is_dev: true,
    dev_twitter: "https://twitter.com/piedpiperplc",
    dev_github: "https://github.com/chingu-voyages/v19-bears-team-07",
    dev_linkedin: "https://www.linkedin.com/in/rbranson/?originalSubdomain=vg",
    dev_portfolio: "https://github.com/chingu-voyages",
    email: "user#{i}@cool.com", 
    password: "password"
  )

  category = Category.create!(name: names[i])

  app = App.create!(
    name: "App #{i}", 
    description: "An app description for App #{i}",
    img: "https://images-na.ssl-images-amazon.com/images/I/512EsSPL7KL._AC_UX679_.jpg",
    app_url: "https://myspace.com/",
    github_url: "https://github.com/chingu-voyages/v19-bears-team-07", 
    user: user,
    category: category
  )

end


