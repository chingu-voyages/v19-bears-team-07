class CommentsController < ApplicationController
    before_action :authenticate_user!, except: [:index]
    before_action :set_comment, only: [:show, :update, :destroy]
  
  
    # GET apps/:app_id/comments
    def index
      @comments = Comment.where(app: current_app).order(created_at: :desc)
      json_response(@comments)
    end  
  
    # POST apps/:app_id/comments
    def create
      @comment = Comment.new(comment_params)
      @comment.app = current_app
      if @comment.valid?
        @comment.save
        json_response(@comment, :created)
      else
        head :bad_request
      end
    end
  
    # DELETE apps/:app_id/comments/:id
    def destroy
      if @comment
        @comment.destroy
      end
        head :no_content
    end
  
    private 
    def comment_params
      # whitelist params
      params.permit(:title, :description, :app_id)
    end
  
    def set_comment
      @comment = Comment.find_by(app: current_app, id: comment_params[:id])
    end
  end
  

