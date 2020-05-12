require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module Backend
  class Application < Rails::Application
    #!! Set up cors handling to protect against cross-site forgery attacks
    config.middleware.insert_before 0, Rack::Cors do
      allow do
        origins Rails.application.config.client_root
        resource '*', headers: :any, methods: [:get, :post, :put, :patch, :delete, :options], credentials: true
      end
    end

    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 6.0

    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration can go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded after loading
    # the framework and any gems in your application.


  end
end
