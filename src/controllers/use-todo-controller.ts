import { useCreateTodosQuery } from "@/mutations/use-create-todo-mutation"
import { useRemoveTodosQuery } from "@/mutations/use-remove-todo-mutation"
import { useUpdateTodosQuery } from "@/mutations/use-update-todo-mutation"
import { useTodosQuery } from "@/queries/use-todos-query"

export function useTodoController() {
    const { mutate: createTodo } = useCreateTodosQuery()
    const { mutate: removeTodo } = useRemoveTodosQuery()
    const { mutate: updateTodo } = useUpdateTodosQuery()
    const { data: todos, isLoading: isLoadingTodosList } = useTodosQuery()

    
    return {
        createTodo,
        removeTodo,
        updateTodo,
        todos,
        isLoadingTodosList,
    }
}