import { Todo, todosCollection } from "@/schemas/todo";
import { useMutation } from "@tanstack/react-query";
import { addDoc } from "firebase/firestore";

export function useCreateTodosQuery() {
    return useMutation({
        mutationKey: ['createTodo'],
        mutationFn: (data: Omit<Todo, 'id'>) => addDoc(todosCollection, data),
    })
}