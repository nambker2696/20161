class CreateProducts < ActiveRecord::Migration[5.0]
  def change
    create_table :products do |t|
      t.integer :category_id
      t.string :name
      t.text :description
      t.text :image
      t.float :price
      t.boolean :status, default: true
      t.text :rate
      t.timestamps
    end
  end
end
