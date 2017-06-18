class ProductDetail < ApplicationRecord
	belongs_to :products
	has_one :prices
	has_many :order_details
end
