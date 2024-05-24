import React from 'react'

type TodoListPropsType = {
	title: string
	tasks: Array<TaskType>
}

export type TaskType = {
	id: number
	title: string
	isDone: boolean
}

export const TodoList = ({ title, tasks }: TodoListPropsType) => {
	const tasksElement: Array<JSX.Element> | JSX.Element =
		tasks.length !== 0 ? (
			tasks.map(task => {
				return (
					<li>
						<input
							type='checkbox'
							checked={task.isDone}
						/>{' '}
						<span>{task.title}</span>
					</li>
				)
			})
		) : (
			<span>Your tasksList is empty</span>
		)

	return (
		<div className='todoList'>
			<h3>{title}</h3>
			<div>
				<input />
				<button>+</button>
			</div>
			<ul>{tasksElement}</ul>
			<div>
				<button>All</button>
				<button>Active</button>
				<button>Completed</button>
			</div>
		</div>
	)
}
