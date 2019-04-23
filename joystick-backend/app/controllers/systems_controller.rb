class SystemsController < ApplicationController
  require 'net/https'

  def index
    require 'net/https'
    http = Net::HTTP.new('api-v3.igdb.com', 80)
    request = Net::HTTP::Get.new(URI('https://api-v3.igdb.com/platforms'), {'user-key' => "#{ENV['IGDB_API']}"})
    request.body = 'fields abbreviation,alternative_name,category,created_at,generation,name,platform_logo,product_family,slug,summary,updated_at,url,versions,websites;'
    render json: http.request(request).body
  end

  def show
    @system = System.find(params[:id])
    render json: @system
  end



end
