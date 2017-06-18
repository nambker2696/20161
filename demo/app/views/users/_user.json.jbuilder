json.extract! user, :id, :name, :email, :photo, :created_at, :updated_at
json.url user_url(user, format: :json)