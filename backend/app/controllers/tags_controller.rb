class TagsController < ApplicationController
  before_action :set_tags, only: [:show, :update, :destroy]


  # GET /tags
  def index
    @tags = Tag.all
    json_response(@tags)
  end

  # GET /tag/:id
  def show
    json_response(@tag)
  end

  # POST /tags
  def create
    @tag = Tag.create(tag_params)
    json_response(@tag, :created)
  end

  # PUT /tags/:id
  def update
    @tag.update!(tag_params)
    head :no_content
  end

  # DELETE /tags/:id
  def destroy
    @tag.destroy
    head :no_content
  end

  private

  def tag_params
    # whitelist params
    params.permit(:name, :description, :img, :app_url)
  end

  def set_tag
    @tag = Tag.find(params[:id])
  end
end
