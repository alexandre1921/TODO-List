import { Todo, todosCollectionName } from "@/schemas/todo";
import { db } from "@/services/firebase";
import { useMutation } from "@tanstack/react-query";
import { doc, updateDoc } from "firebase/firestore";

export function useUpdateTodosQuery() {
    return useMutation({
        mutationKey: ['updateTodo'],
        mutationFn: (data: Todo) => updateDoc(doc(db, todosCollectionName, data.id), data),
    })
}