class TagsController < ApplicationController
  before_action :authenticate_user!, except: [:index]
  before_action :set_tags, only: [:show, :update, :destroy]


  # GET /tags
  def index
    @tags = Tag.all
    json_response(@tags)
  end

  # GET /tag/:id
  def show
    if @tag
      json_response(@tag)
    else
      head :not_found
    end
  end

  # POST /tags
  def create
    @tag = Tag.create(tag_params)
    if @tag.valid?
      @tag.save
      json_response(@tag, :created)
    else
      head :bad_request
    end
  end

  # PUT /tags/:id
  def update
    if @tag
      @tag.update!(tag_params)
      if @tag.valid?
        head :no_content
      else
        head :bad_request
      end      
    else
      head :not_found
    end
  end

  # DELETE /tags/:id
  def destroy
    if @tag
      @tag.destroy
    end
      head :no_content
  end

  private def tag_params
    # whitelist paramss
    params.permit(:name, :description, :img)
  end

  def set_tag
    @tag = Tag.find(params[:id])
  end
end
