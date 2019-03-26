class SystemsController < ApplicationController

  def index
    @systems = System.all
    render json:@systems.to_json
  end

end
