import {ADD_TODO} from '../actions';

const initialState = {
    toDoList: []
};

export default function toDoApp(state = initialState, action) {
    switch(action.type) {
        case ADD_TODO:
            let newToDoList = [
                ...state.toDoList
            ];
            return {
                ...state,
                toDoList: newToDoList
            };
        default: 
            return state;
    }
}