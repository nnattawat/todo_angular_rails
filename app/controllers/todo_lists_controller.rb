class TodoListsController < ApplicationController
  before_action :set_todo_list, only: [:show, :edit, :update, :destroy]

  def index
    respond_to do |format|
      format.html {}
      format.json do 
        @todo_lists = TodoList.all
      end
    end
  end

  # POST /todo_lists
  # POST /todo_lists.json
  def create
    @todo_list = TodoList.new(todo_list_params)

    respond_to do |format|
      if @todo_list.save
        format.json { render :show, status: :created, location: @todo_list }
      else
        format.json { render json: @todo_list.errors.full_messages, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /todo_lists/1
  # DELETE /todo_lists/1.json
  def destroy
    @todo_list.destroy
    respond_to do |format|
      format.json { head :no_content }
    end
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_todo_list
    @todo_list = TodoList.find(params[:id])
  end

  # Never trust parameters from the scary internet, only allow the white list through.
  def todo_list_params
    params.require(:todo_list).permit(:title, :description)
  end

end
