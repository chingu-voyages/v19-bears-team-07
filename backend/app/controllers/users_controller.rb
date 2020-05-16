Portfolio = Struct.new(:apps)

class UsersController < ApplicationController
  before_action :set_user, only: [:show, :update, :destroy, :portfolio]
  before_action :authenticate_user!, except: [:index, :show, :portfolio]


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
    json_response(@user, :created)
  end

  # PATCH or PUT /users/:id
  def update
    @user.update!(user_params)
    head :no_content
  end

  # DELETE /users/:id
  def destroy
    @user.destroy
    head :no_content
  end

  # GET /users/:id/portfolio
  def portfolio
    portfolio = Portfolio.new(@user.apps)
    json_response(portfolio)
  end 

  private

  def user_params
    # whitelist params
    params.permit(:id, :name, :img, :is_dev, :dev_bio, :dev_twitter, :dev_github, :dev_linkedin, :dev_portfolio)
  end

  def set_user
    @user = User.find(params[:id])
  end
end
