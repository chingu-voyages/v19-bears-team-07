class UsersController < ApplicationController
  before_action :set_user, only: [:show, :update, :destroy]


  # GET /users
  def index
    @users = User.all
    json_response(@users)
  end

  # GET /user/:id
  def show
    json_response(@user)
  end

  # POST /users
  def create
    @user = User.create(user_params)
    if(@user.save)
      redirect_to @user
    else
      render 'new'
    end
    json_response(@user, :created)
  end

  def edit
  
  end

  # PUT /users/:id
  def update
        if(@user.update(user_params))
            redirect_to @user
        else
            render 'edit'
        end
    #@user.update!(user_params)
    head :no_content
  end

  # DELETE /users/:id
  def destroy
    @user.destroy
    redirect_to users_path
    head :no_content
  end

  private

  def user_params
    # whitelist params
    params.permit(:name, :img, :is_dev, :dev_bio, :dev_twitter, :dev_github, :dev_linkedin, :dev_portfolio)
  end

  def set_user
    @user = User.find(params[:id])
  end
end
