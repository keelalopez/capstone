Rails.application.routes.draw do
  
<<<<<<< HEAD
  resources :projects
=======
  resources :divisions, only: [:index]
  resources :materials, only: [:index]
  resources :projects, only: [:index]
>>>>>>> 95f3dab70515a69af1e2c5fd6d8d450438519cd9
  resources :users

  # CUSTOM ROUTES 
  post "/signup", to: "users#create"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get "/me", to: "users#show"


  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
