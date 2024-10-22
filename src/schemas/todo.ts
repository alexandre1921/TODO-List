import { db } from "@/services/firebase";
import { collection } from "firebase/firestore";
import { z } from "zod";

const TodoSchema = z.object({
    id: z.string(),
    text: z.string(),
    completed: z.boolean(),
});

export type Todo = z.infer<typeof TodoSchema>;

export const todosCollectionName = 'todos' as const;

export const todosCollection = collection(db, todosCollectionName).withConverter({
    toFirestore: (user: Todo) => user,
    fromFirestore: (snapshot) => TodoSchema.parse({...snapshot.data(), id: snapshot.id}),
});