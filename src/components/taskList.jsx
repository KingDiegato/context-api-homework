import React, { useReducer, useState } from 'react';

//? Material UI
import { ButtonGroup } from '@mui/material';

//* Reducer
import Reducer from '../store/reducers/taskReducer';

//* Actions
import { ADD_TASK, DELETE_TASK, TOGGLE_VISIBILITY } from '../store/actions/actions'
import { InputField } from './styledComponents/InputField';
import { ActiveBox } from './styledComponents/ActiveBox';
import { DeleteButton } from './styledComponents/DeleteButton';
import { AddButton } from './styledComponents/AddButton';

// TODO: make logic for temporary render the error of the task description instead of erase by a button
// TODO: create a box with auto scrollbar for contain the task
// TODO: flex the button to the end of the box

const TaskList = () => {

    let initialState = { tasks: [] }
    const [{tasks}, dispatch] = useReducer(Reducer, initialState)

    const [text, setText] = useState();
    
    return (
        <div>
            <h2>
                Task List
            </h2>
            <form onSubmit={
                e => {
                    e.preventDefault();
                    dispatch({type: ADD_TASK, text})
                    setText("")
                }
            }>
                <InputField value ={text} 
                        onChange={e => setText(e.target.value)}
                />
                
            <AddButton> add Task </AddButton>
            </form>
            {tasks.map(( tsk, index ) => (
                    <div key={index}>

                    {
                        tsk.text !== '' 
                        ?
                        <>
                        <span 
                        style={tsk.completed ? {textDecoration: 'line-through'} : {textDecoration: 'none'}}
                        >  {tsk.text}   
                        </span>  - 

                        <ButtonGroup>
                            <ActiveBox
                                onClick={() => dispatch({type: TOGGLE_VISIBILITY, index})}
                            />
                            
                            <DeleteButton
                                onClick={() => dispatch({type: DELETE_TASK, index})}
                            >Delete Task</DeleteButton>
                        </ButtonGroup>
                        </>
                        : 
                        <>
                            <span style={{color: 'red', textDecoration: 'underline'}}>
                                TASK MUST HAVE A DESCRIPTION
                            </span>  -  <DeleteButton
                                onClick={() => dispatch({type: DELETE_TASK, index})}
                            >I Understand</DeleteButton>
                        </>
                        
                    }
                    </div>
                    
            ))}
        </div>
    );
}

export default TaskList;
