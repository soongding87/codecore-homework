Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  get('/', { to: 'welcome#index', as: 'home' })
  get('/users', { to:'users#new' })
  resource :session, only: [:new, :create, :destroy]
  resources :users, only: [:create, :new]

resources :posts, shallow: true do
  resources :comments, only: [:create, :destroy]
end


end
