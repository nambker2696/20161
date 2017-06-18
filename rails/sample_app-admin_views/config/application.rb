require_relative 'boot'
require 'rails/all'



# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module HoaApp
  class Application < Rails::Application
  	config.action_view.field_error_proc = Proc.new { |html_tag, instance| 
  "<div class=\"field_with_errors control-group error\">#{html_tag}</div>".html_safe
}
    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration should go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded.
    
  end
end
