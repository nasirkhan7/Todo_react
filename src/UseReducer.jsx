import React, {
  useReducer,
  useState
} from "react";
import { reducer } from "./reducer";
const UseReducer = () => {
  const [todo, setTodo] = useState()
  const initialState = {
    todos: [],
    error: false,
    success: false,
    message: '',
  }
  const handleClick = (e) => {
    e.preventDefault();
    if (!todo) {
      dispatch({
        type: 'EMPTY'
      })
    } else{
      dispatch({type:"ADD_TODO", payload:todo})
    }
    setTimeout(() => {
      dispatch({
        type: 'REMOVE_MESSAGE'
      })
    }, 2000)

  }

  const [state, dispatch] = useReducer(reducer, initialState);
  return ( 
  <>
    <
    div className = "container col-lg-5 mx-auto shadow p-3" >
    <form >
    <input type = "text"
    className = "form-control"
    placeholder = "enter your todo..."
    value = {todo}
    onChange = {
      (e) => setTodo(e.target.value)
    }
    /> 
    {state.error && <p className="text-danger fw-bold">
      {state.message}</p>}
    {state.success && <p className="text-success fw-bold">
      {state.message}</p>}
    <button onClick = {
      handleClick} className = "btn btn-success w-100 my-2" > Add </button> </form> 
      </div>
     </>
  );
}

export default UseReducer;