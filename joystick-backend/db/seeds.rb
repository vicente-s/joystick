# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


require 'net/https'
http = Net::HTTP.new('api-v3.igdb.com', 80)
request = Net::HTTP::Get.new(URI('https://api-v3.igdb.com/platforms'), {'user-key' => "#{ENV[IGDB_API]}"})
request.body = 'fields abbreviation,alternative_name,category,created_at,generation,name,platform_logo,product_family,slug,summary,updated_at,url,versions,websites;'

platforms_response = http.request(request).body
parsed_platforms = JSON.parse(platforms_response)
parsed_platforms.each { |platform|
  System.create({name: platform["name"], summary: platform["summary"], platform_logo_id:platform["platform_logo"]})
  # platform_logo
  # summary
}
