Rails.application.routes.draw do
  get 'test_login/index'
  devise_for :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html


  # Done as part of setup for Devise auth
  root to: "test_login#index"
end
