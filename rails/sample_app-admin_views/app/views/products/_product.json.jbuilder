json.extract! product, :id, :category_id, :name, :description, :category, :created_at, :updated_at
json.url product_url(product, format: :json)