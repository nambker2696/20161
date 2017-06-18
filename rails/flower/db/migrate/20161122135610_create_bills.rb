class CreateBills < ActiveRecord::Migration[5.0]
  def change
    create_table :bills do |t|
      t.float :input_price
      t.float :selling_price
      t.integer :product_details_id
      t.integer :quantity

      t.timestamps
    end
  end
end
