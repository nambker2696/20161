class CreateProductCodes < ActiveRecord::Migration[5.0]
  def change
    create_table :product_codes do |t|
    	t.integer :store_id    	
    	t.boolean :status
      t.timestamps
    end
  end
end
