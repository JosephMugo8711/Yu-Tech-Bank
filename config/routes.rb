Rails.application.routes.draw do
  get 'users/Sessions'
  resources :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  post "/login", to: "sessions#create"
  post "/signup", to: "users#signup"
  get "/profile", to: "users#logged_in"
  delete "/logout", to: "sessions#destroy_user"
  put "/profile", to: "users#update"

end

