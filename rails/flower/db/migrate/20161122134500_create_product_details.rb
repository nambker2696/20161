class CreateProductDetails < ActiveRecord::Migration[5.0]
  def change
    create_table :product_details do |t|
      t.string :color
      t.string :type
      t.integer :product_id
      t.string :code
      t.integer :quantity
      t.timestamps
    end
  end
end
