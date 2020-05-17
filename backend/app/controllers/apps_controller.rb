class AppsController < ApplicationController
  before_action :set_app, only: [:show, :update, :destroy]
  
  # GET /apps
  def index
    @apps = App.all.order("created_at DESC")
    json_response(@apps)
  end

  # GET /users/:user_id/apps
  def user_apps
    @user = User.find(params[:user_id])
    @apps = @user.apps.all
    #@apps = App.all
    json_response(@apps)
  end

  # GET /apps/:id
  def show
    json_response(@app)
  end

  # GET /users/:user_id/apps/:id
  def show_app
    @user = User.find(params[:user_id])
    @app = @user.apps.find(params[:id])
    json_response(@app)
  end

  # POST /users/:user_id/apps
  def create
    @user = User.find(params[:user_id])
    @app = @user.apps.create(app_params)
    #redirect_to user_path(@user)
    #@app = App.create(app_params)
    json_response(@app, :created)
  end

  def edit

  end

  # PUT /users/:user_id/apps/:id
  def update
    @user = User.find(params[:user_id])
    @app = @user.apps.find(params[:id])
    # if(@app.update(app_params))
    #   redirect_to @app
    # else
    #   render 'edit'
    # end
    json_response(@app, :edited)

    #@app.update!(app_params)
    head :no_content
  end

  # DELETE /apps/:id
  def destroy
    @user = User.find(params[:user_id])
    @app = @user.apps.find(params[:id])
    @app.destory
    #redirect_to user_path(@user)
    #@app.destroy
    head :no_content
  end

  private

  def app_params
    # whitelist params
    params.permit(:name, :description, :img, :app_url, :github_url)
  end

  
  def set_app
    @app = App.find(params[:id])
  end

end
