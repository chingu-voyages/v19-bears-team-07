
class Me::AppsController < ApplicationController
    before_action :authenticate_user!

    # GET /apps
    def index 
        user_id = current_user.id
        puts user_id
        @apps = App.where(user: current_user)
        json_response(@apps);
    end
end