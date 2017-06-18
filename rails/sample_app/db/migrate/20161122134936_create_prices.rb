class CreatePrices < ActiveRecord::Migration[5.0]
  def change
    create_table :prices do |t|
      t.float :cost
      t.float :discount
      t.boolean :new
      t.integer :product_details_id
      t.timestamps
    end
  end
end
