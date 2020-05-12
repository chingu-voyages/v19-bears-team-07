Result = Struct.new(:is_logged_in)

class TestLoginController < ApplicationController
  def index
      @signed_in = "Yes, I am!"
    if user_signed_in?
      redirect_to "http://localhost:8000/"
    else 
    
      @signed_in = "No, I'm not..."
    end
  end

  def is_signed_in
    res = Result.new(if user_signed_in? then true else false end)
    render json: res
  end
end
