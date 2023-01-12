Rails.application.routes.draw do
  
  resources :divisions, only: [:index]
  resources :materials, only: [:index]
  resources :projects, only: [:index]
  resources :users

  # CUSTOM ROUTES 
  post "/signup", to: "users#create"
  post "/login", to: "sessions#create"
  post "/logout", to: "sessions#destroy"


  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
