Rails.application.routes.draw do
  get 'admin/index'

resources :orders
  resources :categories
  resources :products
  # For details on the DSL available within this file, see http:guides.rubyonrails.orgrouting.html
  root "static_pages#home"

  namespace :admin do


end


  get 'admin' => 'admin#index'

  get  'help',    to: 'static_pages#help'
  get  'about',   to: 'static_pages#about'
  get  'contact', to: 'static_pages#contact'
  get  'setting', to: 'static_pages#setting'
  get  'signup',  to: 'users#new'
  get  'account', to: 'users#account'

  get    'login',   to: 'sessions#new'
  post   'login',   to: 'sessions#create'
  delete 'logout',  to: 'sessions#destroy'

  get    'checkout', to: 'cart#checkout'
  get    'shoppingcart', to: 'cart#index'
  resources :users
end
