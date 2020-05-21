Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  #!! Sets up devise routes
  devise_for :users, path: 'auth'


  get 'test_login/index'
  get 'test_login/is_logged_in', to: 'test_login#is_signed_in'


  # Done as part of setup for Devise auth
  root to: "test_login#index"

  # CRUD for Apps, Users, Tags, Catgories
  resources :apps, :users, :tags, except: [:new, :edit]

  resources :categories, except: [:new, :edit] do 
    member do 
      get "apps"
    end
  end


  # CRUD for resources owned by the authenticated user
  namespace :me do 
    resources :apps, except: [:new, :edit]
  end

  get 'users/:id/portfolio', to: 'users#portfolio'
end
