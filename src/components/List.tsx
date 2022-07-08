import React from 'react'
import {ITask} from '../Interfaces'

interface Props {
  list: ITask[]
  setList: React.Dispatch<React.SetStateAction<ITask[]>>
}

export default function List({list, setList} : Props) {

  const handleDeleteTodo = (id: string) :void => {
    const newList = list.filter((todo) => todo.id !== id);
    setList(newList);
  } 

  return (
    <div className='p-2 list-todo'>
      <label className="form-label my-2 text-white">List Todo</label>
      {list.map((todo) => {return(
        <div className="card m-2 todo" onClick={() => {handleDeleteTodo(todo.id)}}>
          <div className="card-body row justify-content-around">
            <div className='text-start col'>{todo.taskName}</div>
            <div className='text-end col'>{todo.deadline}</div>
          </div>
        </div>
      )})}
    </div>
  )
}

