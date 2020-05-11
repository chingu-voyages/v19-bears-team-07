class TestLoginController < ApplicationController
  def index
    @signed_in = 
      if user_signed_in?
        "Yes, I am!"
      else
        "No, I'm not..."
      end
  end
end
