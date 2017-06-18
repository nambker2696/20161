# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "Create User"
User.create!(name:  "Example User",
             email: "admin@gmail.com",
             password:              "admin1",
             password_confirmation: "admin1",
             admin: true)
User.create!(name:  "Example User",
             email: "nam@gmail.com",
             password:              "123456",
             password_confirmation: "123456",
             admin: false)

puts "Faker 50 Users"
5.times do |n|
  password = Faker::Internet.password
  User.create! name:  Faker::Name.name, email: Faker::Internet.email, password: password, password_confirmation: password,
    phone: Faker::PhoneNumber.cell_phone, address: Faker::Address.street_address
end

puts "Faker 4 Categories"
Category.create name: "Baby"
Category.create name: "Love & Romance"
Category.create name: "Wedding"
Category.create name: "Corporate"

puts "Faker 10 Products"
10.times do
  Product.create name: Faker::Commerce.product_name, description: Faker::Lorem.sentence, 
  category_id: Category.pluck(:id).sample, image: Faker::Avatar.image("my-own-slug", "50x50", "jpg")
  end
puts "Finish"
