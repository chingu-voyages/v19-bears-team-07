Result = Struct.new(:is_logged_in, :user_id)

class TestLoginController < ApplicationController
  def index
      @signed_in = "Yes, I am!"
    if user_signed_in?
      redirect_to Rails.application.config.client_url
    else 
    
      @signed_in = "No, I'm not..."
    end
  end

  def is_signed_in
    res = Result.new(if user_signed_in? then true else false end, if user_signed_in? then current_user.id else "" end )
    render json: res
  end
end
