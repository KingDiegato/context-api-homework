let NextTaskID = 0;

export const ADD_TASK = 'ADD_TASK'
export const DELETE_TASK = 'DELETE_TASK'
export const TOGGLE_VISIBILITY = 'TOGGLE_VISIBILITY'

/**
 * 
 * @param {string} description Is the main text that will be shown in the DOM
 * @returns action ADD_TASK and increase the taskID by 1 each call
 */
export const addTask = (description) => {
    return {
        type: ADD_TASK,
        payload: {
            id: NextTaskID++,
            description
        }
    }
}

/**
 * 
 * @param {number} id The value of the task
 * @returns action TOGGLE_VISIBILITY for check or uncheck the Task
 */
export const toggleVisibility = (id) => {
    return {
        type: TOGGLE_VISIBILITY,
        payload: {
            id
        }
    }
}

/**
 * 
 * @param {number} id The id of the task
 * @returns action DELETE_TASK and minus the ID
 */
export const deleteTask = (id) => {
    return {
        type: DELETE_TASK,
        payload: {
            id: NextTaskID--
        }
    }
}