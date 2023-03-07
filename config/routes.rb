Rails.application.routes.draw do
  
  resources :divisions, only: [:index]
  resources :materials, only: [:create, :update, :destroy]
  resources :projects, only: [:index, :show, :create, :delete]
  resources :users

  # CUSTOM ROUTES 
  post "/signup", to: "users#create"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get "/me", to: "users#show"

  # CUSTOM ROUTE FOR CUSTOM METHOD 
  get "/users/:id/materials", to: "users#materials_count"

  # MATERIALS FOR EACH USER
  get '/materials', to: "materials#user_materials"

  # FILTERS PENDING MATERIALS
  get '/materials/pending', to: "materials#pending_materials"
  
  # FILTERS COMPLETED MATERIALS
  get '/materials/delivered', to: "materials#delivered_materials"



  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
