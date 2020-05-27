class TagsController < ApplicationController
  before_action :authenticate_user!, except: [:index]
  before_action :set_app, only: [:show, :update, :destroy]


    # GET apps/:app_id/tags
    def index
      if @app
        @tags = Tag.where(app: @app).order(created_at: :desc)
        json_response(@tags)
      else
        puts "NOT FOUND"
        head: not_found    
    end  

# POST apps/:app_id/tags
def create
  @tag = Tag.new(tag_params)
  @tag.app = @app
  if @tag.valid?
    @tag.save
    json_response(@tag, :created)
  else
    head :bad_request
  end
end

# DELETE apps/:app_id/tags/:id
def destroy
  if @app && @tag
    @tag.destroy
  else
    head :no_content
  end
end

  private
  def tag_params
    # whitelist params
    params.permit(:name, :description, :img, :app_id)
  end

  def set_app
    @app = App.find(params[:app_id])
  end
end
