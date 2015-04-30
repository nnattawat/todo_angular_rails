class TodoList < ActiveRecord::Base
  validates :title, presence: true, uniqueness: true
  has_many :todo_list_items
end
