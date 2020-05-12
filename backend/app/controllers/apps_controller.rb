class AppsController < ApplicationController
  before_action :set_app, only: [:show, :update, :destroy]


  # GET /apps
  def index
    @apps = App.all
    json_response(@apps)
  end

  # GET /app/:id
  def show
    json_response(@app)
  end

  # POST /apps
  def create
    @app = App.create(app_params)
    json_response(@app, :created)
  end

  # PUT /apps/:id
  def update
    @app.update!(app_params)
    head :no_content
  end

  # DELETE /apps/:id
  def destroy
    @app.destroy
    head :no_content
  end

  private

  def app_params
    # whitelist params
    params.permit(:name, :description, :img, :app_url)
  end

  def set_app
    @app = App.find(params[:id])
  end
end
