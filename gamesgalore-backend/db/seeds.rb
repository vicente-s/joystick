# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

#Systems
playstation = System.create({name:"PlayStation"})
#Games
spider_man = Game.create({name:"Spider-Man"})
#Releases
test_release = Release.create({system_id: 1, game_id: 1})
