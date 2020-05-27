class CommentsController < ApplicationController
    before_action :authenticate_user!, except: [:index]
    before_action :set_app, only: [:show, :update, :destroy]
    
    #GET /comments
    def default
      @comments = Comment.all 
      json_response(@comments)
    end
    
    # GET apps/:app_id/comments
    def index
      if @app
        @comments = Comment.where(app: @app).order(created_at: :desc)
        json_response(@comments)
      else
        puts "NOT FOUND"
        head :not_found    
    end  
  
    # POST apps/:app_id/comments
    def create
      @comment = Comment.new(comment_params)
      @comment.app = @app
      if @comment.valid?
        @comment.save
        json_response(@comment, :created)
      else
        head :bad_request
      end
    end
  
    # DELETE apps/:app_id/comments/:id
    def destroy
      if @app && @comment
        @comment.destroy
      else
        head :no_content
      end
    end
  
    private 
    def comment_params
      # whitelist params
      params.permit(:title, :description, :app_id)
    end
  
    def set_app
      @app = App.find(params[:app_id])
    end
  end
end

