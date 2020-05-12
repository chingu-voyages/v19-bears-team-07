Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html


  # Done as part of setup for Devise auth
  root to: "home#index"

  # CRUD for Apps and Users
  resources :apps, :users, :tags
end
