import { todosCollection } from "@/schemas/todo";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getDocs, onSnapshot, query } from "firebase/firestore";

export function useTodosQuery() {
    const queryClient = useQueryClient();
    const result = useQuery({
        queryKey: ['getTodos'],
        queryFn: () => getDocs(query(todosCollection)).then((snapshot) => snapshot.docs.map((doc) => doc.data()))
    })

    useQuery({
        queryKey: ['getTodosSubscription'],
        queryFn: () => {
            onSnapshot(todosCollection, (doc) => {
                queryClient.setQueryData(['getTodos'], doc.docs.map((doc) => doc.data()));
            });
        }
    })

    return result;
}