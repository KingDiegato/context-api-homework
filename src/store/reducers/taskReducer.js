import { ADD_TASK, TOGGLE_VISIBILITY, DELETE_TASK } from "../actions/actions";

const Reducer = (state, action) => {
    
    switch (action.type) {
        case ADD_TASK:
            return {
                tasks: [...state.tasks,
                    {
                    text:action.text,
                    completed:false
                }
            ]
            }
        case TOGGLE_VISIBILITY:
            return {
                tasks: state.tasks.map((tsk, index) => 
                index === action.index ? {...tsk, completed : !tsk.completed} : tsk
            )}
        case DELETE_TASK:
            return {
                tasks:state.tasks.filter((tsk, index) => index !== action.index)
            }

    
        default:
            return state
    }
}

export default Reducer;