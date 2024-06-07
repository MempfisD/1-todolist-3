import React, {ChangeEvent, KeyboardEvent, useState} from 'react'
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

			const [taskTitle, setTaskTitle] = useState('')

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

			const addTaskHandler = () => {
				addTask(taskTitle)
				setTaskTitle('') // * очищаем input
			}

			const changeTaskTitleHandler = (e: ChangeEvent<HTMLInputElement>) => setTaskTitle(e.currentTarget.value)

			// * при нажатии клавиши enter
			const keyDownAddTaskHandler = (e: KeyboardEvent<HTMLInputElement>) => e.key === 'Enter' && addTaskHandler()


			const setAllTaskHandler = () => {
				changeFilter('all')
			}
			const setActiveTaskHandler = () => {
				changeFilter('active')
			}
			const setCompletedTaskHandler = () => {
				changeFilter('completed')
			}

			const isAddTaskButtonDisabled = !taskTitle || taskTitle.length > 25

			const userWTaskTitleLengthWarning = taskTitle.length > 15 && <div>Recommended task title is 15 charters</div>

			// * JSX
			return (
					<div className="todoList">
						<h3>{title}</h3>
						<div>
							<input value={taskTitle}
							       onChange={changeTaskTitleHandler}
							       onKeyDown={keyDownAddTaskHandler}
							/>

							<Button
									title={'+'}
									onClickHandler={addTaskHandler}
									disabled={isAddTaskButtonDisabled}/>
							{userWTaskTitleLengthWarning}
						</div>
						<ul>{tasksElement}</ul>
						<div>
							<Button onClickHandler={setAllTaskHandler} title={'All'}/>
							<Button onClickHandler={setActiveTaskHandler} title={'Active'}/>
							<Button onClickHandler={setCompletedTaskHandler} title={'Completed'}/>
						</div>
					</div>
			)
		}
