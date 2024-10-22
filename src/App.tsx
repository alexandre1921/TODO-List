import { TodoListComponent } from './components/todo-list'
import { useTodoController } from './controllers/use-todo-controller'
import { Todo } from './schemas/todo'

function useLogic() {
  const { createTodo, isLoadingTodosList, removeTodo, todos, updateTodo } = useTodoController()

  const handleOnCreateTodoClick = (data: Omit<Todo, 'id'>) => createTodo(data)

  const handleOnRemoveTodoClick = (id: string) => removeTodo(id)

  const handleOnUpdateTodoClick = (data: Todo) => updateTodo(data)

  return {
    isLoadingTodosList,
    todos,
    handleOnCreateTodoClick,
    handleOnRemoveTodoClick,
    handleOnUpdateTodoClick,
  }
}

function App() {
  const { isLoadingTodosList, todos, handleOnCreateTodoClick, handleOnRemoveTodoClick, handleOnUpdateTodoClick } = useLogic()

  if (isLoadingTodosList) {
    return <div>Loading...</div>
  }

  if (!todos) {
    return <div>Error</div>
  }

  return (
    <TodoListComponent tasks={todos} onCreateTodoClick={handleOnCreateTodoClick} onRemoveTodoClick={handleOnRemoveTodoClick} onUpdateTodoClick={handleOnUpdateTodoClick} />
  )
}

export default App
