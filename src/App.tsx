import React from 'react'
import './App.css'
import { TaskType, TodoList } from './TodoList'

// * CRUD
// * C - create
// * R - read
// * U - update
// * D - delete

function App() {
	const todoListTitle = 'What to learn'
	const tasks: Array<TaskType> = [
		{ id: 1, title: 'HTML & CSS', isDone: true },
		{ id: 2, title: 'JS & REACT', isDone: true },
		{ id: 3, title: 'VITE', isDone: true },
	]

	const todoListTitle_1 = 'What to buy'
	const tasks_1: Array<TaskType> = [
		// { id: 1, title: 'Water', isDone: true },
		// { id: 2, title: 'Beer', isDone: true },
		// { id: 3, title: 'Meat', isDone: true },
	]

	return (
		<div className='App'>
			<TodoList
				title={todoListTitle}
				tasks={tasks}
			/>
			<TodoList
				title={todoListTitle_1}
				tasks={tasks_1}
			/>
		</div>
	)
}

export default App
