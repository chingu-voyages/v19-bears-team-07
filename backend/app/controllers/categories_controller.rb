
class CategoriesController < ApplicationController
    before_action :authenticate_user!, except: [:index]
    before_action :set_category, only: [:show, :update, :destroy, :apps]

    # GET categories/
    def index 
        @categories = Category.all
        json_response(@categories);
    end

    # POST categories/
    def create 
        @category = Category.new(category_params);
        if @category.valid?
            @category.save
            json_response(@category, :created)
        else 
            head :bad_request
        end
    end

    # GET categories/:id
    def show
        if @category
            json_response(@category)
        else
            head :not_found
        end
    end

    # PATCH or PUT categories/:id
    def update 
        if @category 
            @category.update(category_params)

            if @category.valid?
                head :no_content
            else 
                head :bad_request
            end
        else 
            head :not_found
        end
    end

    # DELETE categories/:id
    def destroy 
        if @category 
            @category.destroy
        end

        head :no_content
    end

    # GET categories/:id/apps
    def apps 
        # Return all apps that have a matching category_id
        if @category 
            apps = App.where(category: @category)
            json_response(apps)
        else 
            puts "NOT FOUND"
            head :not_found
        end
    end

    private 

    def category_params
        # whitelist params
        params.permit(:id, :name)
    end

    def set_category
        @category = Category.find_by(id: category_params[:id])
    end
end