class SystemsController < ApplicationController

  def index
    @systems = System.all
    render json: @systems
  end

  def show
    @system = System.find(params[:id])
    render json: @system
  end



end
