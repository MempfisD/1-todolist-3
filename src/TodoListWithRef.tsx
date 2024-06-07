import React, {useRef} from 'react'
import {FilterValueType, TaskType} from './types/common'
import {Button} from './Button'

type TodoListPropsType = {
	title: string
	tasks: Array<TaskType>
	removeTask: (tasksId: string) => void
	changeFilter: (newFilterValue: FilterValueType) => void
	addTask: (title: string) => void
}

export const TodoList =
		({
			 title,
			 tasks,
			 removeTask,
			 changeFilter,
			 addTask
		 }: TodoListPropsType) => {
			const taskInputRef = useRef<HTMLInputElement>(null)

			const tasksElement: Array<JSX.Element> | JSX.Element =
					tasks.length !== 0 ? (
							tasks.map((task: TaskType) => {
								return (
										<li key={task.id}>
											<input
													type="checkbox"
													checked={task.isDone}
											/>
											<span>{task.title}</span>
											<Button
													onClickHandler={() => removeTask(task.id)}
													title={'x'}
											/>
										</li>
								)
							})
					) : <span>Your tasksList is empty</span>

			// * добавить таску и очистить поле ввода
			const addTaskHandler = () => {
				{
					if (taskInputRef.current) {
						if (taskInputRef.current.value.length < 15) {
							addTask(taskInputRef.current.value)
						}
						taskInputRef.current.value = ''
					}
				}
			}

			return (
					<div className="todoList">
						<h3>{title}</h3>
						<div>
							<input ref={taskInputRef}/>
							<Button title={'+'} onClickHandler={addTaskHandler}/>
						</div>
						<ul>{tasksElement}</ul>
						<div>
							<Button onClickHandler={() => changeFilter('all')} title={'All'}/>
							<Button onClickHandler={() => changeFilter('active')} title={'Active'}/>
							<Button onClickHandler={() => changeFilter('completed')} title={'Completed'}/>
						</div>
					</div>
			)
		}
