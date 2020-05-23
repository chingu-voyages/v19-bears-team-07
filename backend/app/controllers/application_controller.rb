class ApplicationController < ActionController::Base
  # This line needs to be included to allow cookie-based authentication
  # from all white-listed domains to succeed without HTML forms
  protect_from_forgery unless: -> {
    base_url = request.base_url
    puts base_url
    my_config = Rails.application.config
    puts my_config.client_root
    puts my_config.server_root
    (base_url.include? my_config.client_root) or (base_url.include? my_config.server_root)
  }
  include Response

  before_action :configure_permitted_parameters, if: :devise_controller?

  protected

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: [:name])
  end
end
