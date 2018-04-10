Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  get('/users/:id/edit/password', { to: 'users#change', as: :change_password })
  patch('/users/:id', {to: 'users#update'})


  get('/', { to: 'welcome#index', as: 'home' })

  resource :session, only: [:new, :create, :destroy, :edit]
  resources :users, only: [:create, :new, :edit, :update]

resources :posts, shallow: true do
  resources :comments, only: [:create, :destroy]


end


end
