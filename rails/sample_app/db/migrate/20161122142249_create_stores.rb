class CreateStores < ActiveRecord::Migration[5.0]
  def change
    create_table :stores do |t|
      t.string :product_details_code
      t.integer :quantity
      t.timestamps
    end
  end
end
