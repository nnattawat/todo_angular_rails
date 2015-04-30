class CreateTodoListItems < ActiveRecord::Migration
  def change
    create_table :todo_list_items do |t|
      t.string :title
      t.boolean :completed
      t.references :todo_list

      t.timestamps null: false
    end
  end
end
