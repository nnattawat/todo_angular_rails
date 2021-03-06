# Be sure to restart your server when you modify this file.

# Version of your assets, change this if you want to expire all your assets.
Rails.application.config.assets.version = '1.0'

# Add additional assets to the asset load path
# Rails.application.config.assets.paths << Emoji.images_path

# Precompile additional assets.
# application.js, application.css, and all non-JS/CSS in app/assets folder are already added.
Rails.application.config.assets.precompile += %w( todo_lists.js )
Rails.application.config.assets.precompile += %w( bootstrap-sass/assets/fonts/bootstrap/glyphicons-halflings-regular.eot )
Rails.application.config.assets.precompile += %w( bootstrap-sass/assets/fonts/bootstrap/glyphicons-halflings-regular.woff2 )
Rails.application.config.assets.precompile += %w( bootstrap-sass/assets/fonts/bootstrap/glyphicons-halflings-regular.woff )
Rails.application.config.assets.precompile += %w( bootstrap-sass/assets/fonts/bootstrap/glyphicons-halflings-regular.ttf )
