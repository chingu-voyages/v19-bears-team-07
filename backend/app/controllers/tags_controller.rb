class TagsController < ApplicationController
  before_action :authenticate_user!, except: [:index]
  before_action :set_tags, only: [:show, :update, :destroy]


# GET apps/:app_id/tags
def index
  @tags = Tag.where(app: current_app).order(created_at: :desc)
  json_response(@tags)
end  

# POST apps/:app_id/tags
def create
  @tag = Tag.new(tag_params)
  @tag.app = current_app
  if @tag.valid?
    @tag.save
    json_response(@tag, :created)
  else
    head :bad_request
  end
end

# DELETE apps/:app_id/tags/:id
def destroy
  if @tag
    @tag.destroy
  end
    head :no_content
end

  private
  def tag_params
    # whitelist params
    params.permit(:name, :description, :img. :app_id)
  end

  def set_tag
    @tag = Tag.find_by(app: current_app, id: tag_params[:id])
  end
end
