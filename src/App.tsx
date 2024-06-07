import React, {useState} from 'react'
import './App.css'
import {TodoList} from './TodoList'
import {FilterValueType, TaskType} from './types/common';
import {v1} from 'uuid';

// * CRUD
// * C - create
// * R - read
// * U - update
// * D - delete


// * state management -> useState, useReducer, redux

function App() {
	// * Data
	const todoListTitle = 'What to learn'
	// * global state
	const [tasks, setTasks] = useState<Array<TaskType>>([
		{id: v1(), title: 'HTML & CSS', isDone: true},
		{id: v1(), title: 'JS & REACT', isDone: true},
		{id: v1(), title: 'VITE', isDone: false},
	])

	// * функция по удалению тасок
	const removeTask = (tasksId: string) => {
		// 	* иммутабельная работа
		const nextState = tasks.filter(t => t.id !== tasksId) // * new array
		setTasks(nextState)
	}

	const addTask = (title: string) => {
		const newTask: TaskType = {
			id: v1(),
			title: title,
			isDone: false
		}
		// * иммутабельная работа
		// const copyState = [...tasks] //  делаем копию
		// copyState.push(newTask) //  вносим изменения в копию
		// setTasks(copyState) //  сетаем в качестве нового стейта в копию

		// * короткая запись
		setTasks([...tasks, newTask])
	}


	// * UI
	// * local state
	const [filter, setFilter] = useState<FilterValueType>('all')
	// * какие таски отдавать в TodoList на отрисовка? => см. filter

	let filteredTasksForTodolist: Array<TaskType> = tasks
	if (filter === 'active') {
		filteredTasksForTodolist = tasks.filter(t => !t.isDone)
	} else if (filter === 'completed') {
		filteredTasksForTodolist = tasks.filter(t => t.isDone)
	}

	const changeFilter = (newFilterValue: FilterValueType) => {
		setFilter(newFilterValue)
	}

	return (
			<div className="App">
				<TodoList
						title={todoListTitle}
						tasks={filteredTasksForTodolist}
						removeTask={removeTask}
						changeFilter={changeFilter}
						addTask={addTask}
				/>
			</div>
	)
}

export default App
