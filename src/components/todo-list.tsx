import { useState, useEffect } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Todo } from '@/schemas/todo'

interface Props {
  tasks: Todo[]
  onCreateTodoClick: (data: Omit<Todo, 'id'>) => void
  onRemoveTodoClick: (id: string) => void
  onUpdateTodoClick: (data: Todo) => void
}

export function TodoListComponent({ tasks, onCreateTodoClick, onRemoveTodoClick, onUpdateTodoClick }: Props) {
  const [newTask, setNewTask] = useState('')
  const [filter, setFilter] = useState('all')

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  const addTask = () => {
    if (newTask.trim()) {
      onCreateTodoClick({ text: newTask, completed: false })
      setNewTask('')
    }
  }

  const toggleTask = (id: string) => {
    const newTask = tasks.find(task => task.id === id)
    if (newTask) {
      onUpdateTodoClick({ ...newTask, completed: !newTask.completed })
    }
  }

  const removeTask = (id: string) => {
    onRemoveTodoClick(id)
  }

  const filteredTasks = tasks.filter(task => {
    if (filter === 'complete') return task.completed
    if (filter === 'pending') return !task.completed
    return true
  })

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-xl">
      <h1 className="text-2xl font-bold mb-4">To-Do List</h1>
      <div className="flex mb-4">
        <Input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task"
          className="flex-grow mr-2"
        />
        <Button onClick={addTask}>Add</Button>
      </div>
      <Select value={filter} onValueChange={setFilter}>
        <SelectTrigger className="w-full mb-4">
          <SelectValue placeholder="Filter tasks" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All</SelectItem>
          <SelectItem value="complete">Complete</SelectItem>
          <SelectItem value="pending">Pending</SelectItem>
        </SelectContent>
      </Select>
      <ul className="space-y-2">
        {filteredTasks.map(task => (
          <li key={task.id} className="flex items-center justify-between bg-gray-100 p-2 rounded">
            <div className="flex items-center">
              <Checkbox
                id={`task-${task.id}`}
                checked={task.completed}
                onCheckedChange={() => toggleTask(task.id)}
              />
              <label
                htmlFor={`task-${task.id}`}
                className={`ml-2 ${task.completed ? 'line-through text-gray-500' : ''}`}
              >
                {task.text}
              </label>
            </div>
            <Button variant="destructive" size="sm" onClick={() => removeTask(task.id)}>
              Remove
            </Button>
          </li>
        ))}
      </ul>
    </div>
  )
}