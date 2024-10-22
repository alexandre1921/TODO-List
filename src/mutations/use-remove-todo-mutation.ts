import { todosCollectionName } from "@/schemas/todo";
import { db } from "@/services/firebase";
import { useMutation } from "@tanstack/react-query";
import { doc, deleteDoc } from "firebase/firestore";

export function useRemoveTodosQuery() {
    return useMutation({
        mutationKey: ['removeTodo'],
        mutationFn: (id: string) => deleteDoc(doc(db, todosCollectionName, id)),
    })
}