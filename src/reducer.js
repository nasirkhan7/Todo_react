export const reducer = (state, action) => {
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
  if(action.type=== "ADD_TODO"){
    return{
      ...state,
      success:true,
      message:'Added Successfully!',
      todos: [...state.todos,action.payload]

    }
  }
  return {
    ...state
  }
}