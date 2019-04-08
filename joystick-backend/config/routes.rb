Rails.application.routes.draw do
  # resources :games
  # resources :releases
  resources :systems, only: [:index, :show]
  resources :games, only: [:index, :show]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
