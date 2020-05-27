class CommentsController < ApplicationController
    before_action :authenticate_user!, except: [:index]
    before_action :set_app 
    before_action :set_comment, except: [:index, :create]
    
    # GET apps/:app_id/comments
    def index
      if @app
        @comments = Comment.where(app: @app).order(created_at: :desc)
        json_response(@comments)
      else
        head :not_found    
      end
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

    # GET apps/:app_id/comments/:id
    def show
     json_response(@comment)
    end

    # PATCH or PUT apps/:app_id/comments/:id
    def update
       if @app && @comment
         @comment.update(comment_params)
         if @comment.valid?
           head :no_content
         else
           head :bad_request
        end
      else
        head :not_found
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

    def set_comment
      @comment = Comment.find(params[:id])
    end 
end

