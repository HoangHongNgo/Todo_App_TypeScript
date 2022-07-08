import React, {ChangeEvent, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {ITask} from './Interfaces'
import List from './components/List';
import {v4 as uuidv4} from 'uuid';

function App() {

  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<string>("");
  const [todoList, setTodoList] = useState<ITask[]>([]);

  const handleChangeToDo = (e: ChangeEvent<HTMLInputElement>) :void => {
    setTask(e.target.value)
  }

  const handleChangeDeadline = (e: ChangeEvent<HTMLInputElement>) :void => {
    setDeadline(e.target.value)
  }

  const handleAddToDo = () :void => {
    const NewTask :ITask = {id: uuidv4(), taskName: task, deadline: deadline};
    setTodoList([...todoList, NewTask]);
    console.log(todoList);
    setTask("");
    setDeadline("");
  }


  return (
    <div className="App">
      <div className="container">
      <div className="row justify-content-center">
        <div className="col-8 text-center my-2">
        TODO APP TYPESCRIPT
        </div>
      </div>  
      <div className="row justify-content-center">
        <div className="col-4 add-form p-2">
          <label className="form-label my-2 text-white">Add Todo</label>
              <div className="col-auto my-2">    
                <input type="text" className="form-control" value={task} placeholder="Task..." onChange={handleChangeToDo}/>
              </div>
              <div className="col-auto my-2">    
                <input type="text" className="form-control" value={deadline} placeholder="Deadline..." onChange={handleChangeDeadline}/>
              </div>
              <div className="col-auto my-2">
              <button type="submit" className="btn btn-primary"  onClick={handleAddToDo}>ADD</button>
            </div>
        </div>
        <div className="col-4">
          <List list={todoList} setList={setTodoList} />
        </div>
      </div>
      </div>
    </div>
  );
}

export default App;
