class CommentsController < ApplicationController
    before_action :set_comment, only: [:show, :update, :destroy]
  
  
    # GET /comments
    def index
      @comments = Comment.all
      json_response(@comments)
    end  
  
    # GET /comment/:id
    def show
      json_response(@comment)
    end
  
    # POST /comments
    def create
      @comment = comment.create(comment_params)
      json_response(@comment, :created)
    end
  
    # PUT /comments/:id
    def update
      @comment.update!(comment_params)
      head :no_content
    end
  
    # DELETE /comments/:id
    def destroy
      @comment.destroy
      head :no_content
    end
  
    private
  
    def comment_params
      # whitelist params
      params.permit(:title, :description, :score)
    end
  
    def set_comment
      @comment = comment.find(params[:id])
    end
  end
  

