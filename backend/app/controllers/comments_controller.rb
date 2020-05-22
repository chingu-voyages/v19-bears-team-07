class CommentsController < ApplicationController
    before_action :authenticate_user!, except: [:index]
    before_action :set_comment, only: [:show, :update, :destroy]
  
  
    # GET /comments
    def index
      @comments = Comment.all
      json_response(@comments)
    end  
  
    # GET /comment/:id
    def show
      if @comment
        json_response(@comment)
      else
        head :not_found
      end
    end
  
    # POST /comments
    def create
      @comment = Comment.create(comment_params)
      if @comment.valid?
        @comment.save
        json_response(@comment, :created)
      else
        head :bad_request
      end
    end
  
    # PUT /comments/:id
    def update
      if @comment
        @comment.update!(comment_params)
        if @comment.valid?
          head :no_content
        else
          head :bad_request
        end      
      else
        head :not_found
      end
    end
  
    # DELETE /comments/:id
    def destroy
      if @comment
        @comment.destroy
      end
        head :no_content
    end
  
    private def comment_params
      # whitelist params
      params.permit(:title, :description, :score)
    end
  
    def set_comment
      @comment = Comment.find(params[:id])
    end
  end
  

