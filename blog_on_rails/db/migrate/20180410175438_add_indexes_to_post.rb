class AddIndexesToPost < ActiveRecord::Migration[5.1]
  def change
    add_index :posts, :title #, unique: true
    add_index :posts, :body
  end
end
