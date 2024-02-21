import React, {
  useReducer,
  useState
} from "react";

const UseReducer = () => {
  const [todo, setTodo] = useState()
  const reducer = (state, action) => {
    if (action.type === 'EMPTY'){
    return {
      ...state,
      error: true,
      message: 'Please Enter todo'
    }
  }
    if (action.type === 'REMOVE_MESSAGE'){
      return {
        ...state,
        message: '',
        error: false,
        success: false
      }
  }
  return {
    ...state
  }
}

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
    }
    setTimeout(() => {
      dispatch({
        type: 'REMOVE_MESSAGE'
      })
    }, 3000)

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
    <button onClick = {
      handleClick} className = "btn btn-success w-100 my-2" > Add </button> </form> 
      </div>
     </>
  );
}

export default UseReducer;