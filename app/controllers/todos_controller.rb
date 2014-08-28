class TodosController < ApplicationController

  def index
    todos = Todo.all
    render json: todos
  end

  def create
    todo = Todo.create(name: params["todo"]["name"])
    render json: todo
  end

end