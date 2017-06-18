Rails.application.routes.draw do

  resources :paintings
  resources :galleries
  resources :categories
  resources :products
  root 'static_pages#home'

  # get 'static_pages/home'
  get 'help' 	   => 'static_pages#help'
  get 'signup'     => 'users#new'
  post 'signup'    => 'users#create'
  get 'login'  => 'sessions#new'
  post 'login'  => 'sessions#create'
  delete 'logout' => 'sessions#destroy'

  resources :users


  resources :admins  do
    get 'admin' => 'user#index'

    
  end
  # For details on the DSL available within this file see http://guides.rubyonrails.org/routing.html
end
