import React, { useReducer, useState } from 'react';
import Button from '@mui/material/Button'
import { ButtonGroup, Checkbox, TextField } from '@mui/material';

// TODO: Refactor inline logic and Style
// TODO: Make models and components to clear the code

// Actions
const ADD_TASK = 'ADD_TASK'
const DELETE_TASK = 'DELETE_TASK'
const TOGGLE_VISIBILITY = 'TOGGLE_VISIBILITY'

// Reducer

const Reducer = (state, action) => {
    
    switch (action.type) {
        case ADD_TASK:
            return {
                todos: [...state.todos,
                    {
                    text:action.text,
                    completed:false
                }
            ]
            }
        case TOGGLE_VISIBILITY:
            return {
                todos: state.todos.map((tsk, index) => 
                index === action.index ? {...tsk, completed : !tsk.completed} : tsk
            )}
        case DELETE_TASK:
            return {
                todos:state.todos.filter((tsk, index) => index !== action.index)
            }

    
        default:
            return state
    }
}

const TaskList = () => {

    const [{todos}, dispatch] = useReducer(Reducer, {todos:[]})

    const [text, setText] = useState();

    return (
        <div>
            <h2>
                Task List
            </h2>
            <form onSubmit={
                e => {
                    e.preventDefault();
                    dispatch({type: 'ADD_TASK', text})
                    setText("")
                }
            }>
                <TextField id="filled-basic" 
                        label="Add Task" 
                        variant="outlined" 
                        color="success"
                        helperText="Please enter the description"
                        size= "small"
                        style={{marginRight: '10px'}}
                        type='text' 
                        value ={text} 
                        onChange={e => setText(e.target.value)}

                        />
            <Button color="success" variant='contained' type='submit'> add Task</Button>
            </form>
            {todos.map(( tsk, index ) => (
                    <div key={index}>
                        <span 
                        style={tsk.completed ? {textDecoration: 'line-through'}: {textDecoration: 'none'}}
                        >{tsk.text}</span>  - 
                        <ButtonGroup>
                        <Checkbox 
                        color="success"
                        sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
                        onClick={() => dispatch({type: TOGGLE_VISIBILITY, index})}
                        
                        />
                        
                        <Button
                        variant='contained'
                        color='error'
                        onClick={() => dispatch({type: DELETE_TASK, index})}
                        style={{cursor:'pointer'}}
                        >Delete Task</Button>


                        </ButtonGroup>
                    </div>
            ))}
        </div>
    );
}

export default TaskList;
