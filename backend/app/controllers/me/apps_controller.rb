
class Me::AppsController < ApplicationController
    before_action :authenticate_user!
    before_action :set_app, only: [:show, :update, :destroy]

    # GET /apps
    def index 
        @apps = App.where(user: current_user)
        json_response(@apps);
    end

    # POST /apps
    def create 
        @app = App.new(app_params);
        @app.user = current_user;
        if @app.valid?
            @app.save
            json_response(@app, :created)
        else 
            head :bad_request
        end
    end

    # GET /app/:id
    def show
        if @app
            json_response(@app)
        else
            head :not_found
        end
    end

    # PATCH or PUT /apps/:id
    def update 
        if @app 
            @app.update(app_params)

            if @app.valid?
                head :no_content
            else 
                head :bad_request
            end
        else 
            head :not_found
        end
    end

    # DELETE /apps/:id
    def destroy 
        if @app 
            @app.destroy
        end

        head :no_content
    end

    private 

    def app_params
        # whitelist params
        params.permit(:id, :name, :description, :img, :app_url, :github_url)
    end

    def set_app
        @app = App.find_by(user: current_user, id: app_params[:id])
    end
end