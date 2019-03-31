class SystemsController < ApplicationController

  def show
    @system = System.find(1)
    render json:@system
  end

end
