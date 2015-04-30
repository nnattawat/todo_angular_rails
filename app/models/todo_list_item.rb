class TodoListItem < ActiveRecord::Base
  validates :title, presence: true, uniqueness: true
  belongs_to :todo_list
end
