import {CREATE_LIST, DELETE_LIST, CREATE_ITEM, DELETE_ITEM, DRAG_ITEM, RENAME_ITEM} from './types';

const initialState = {
    todoList: [
        {
            name: "Task",
            id: "444",
            todoData: [
                { label: "Change my phone", important: false, done: false, id: "98898978" },
                { label: "Cook diner", important: false, done: false, id: "75656564534" },
            ],

        },
        {
            name: "In progress",
            id: '555',
            todoData: [

            ],

        },
        {
            name: "Done",
            id: '666',
            todoData: [

            ],

        },
    ],
};


export const listsReducer = (state = initialState, action) => {

    switch (action.type) {

        case CREATE_LIST:
            return { ...state, todoList: [...state.todoList, action.payload] };


        case DELETE_LIST:
            const newTodoList = state.todoList.filter((item) => item.id !== action.id);
            return { ...state, todoList: newTodoList };

        case CREATE_ITEM:

            const newTodoListItem = state.todoList.map((el) => {

                if (el.id === action.id) {
                    return { ...el, todoData: [...el.todoData, action.payload] };
                } else {
                    return el
                }

            });
            return { ...state, todoList: newTodoListItem };

        case DELETE_ITEM:
            const todoListItem = state.todoList.map((el) => {

                if (el.id === action.parentId) {
                    const todoListItems = el.todoData.filter((item) => item.id !== action.id);
                    return { ...el, todoData: todoListItems }
                } else {
                    return el
                }

            });
            return { ...state, todoList: todoListItem };

        case RENAME_ITEM:
            const newStateRename = state.todoList.map((el) => {
                el.todoData.map((elem) => {
                    if(elem.id === action.id) {
                       elem.label = action.label;
                        return elem;
                    } else {
                        return elem;
                    }
                });
                return el
            });
            return { ...state, todoList: newStateRename };


        case DRAG_ITEM:
            const { destination, source, draggableId, type } = action.result;

            if (!destination) {
                return;
            }

            if(type === 'cards') {

                let dragCard;
                state.todoList.filter((el) => {
                    if(el.id === draggableId) {
                        dragCard = el
                    }
                    return el.id !== draggableId
                });

                const boardCards = state.todoList.slice();
                boardCards.splice(source.index,1)
                boardCards.splice(destination.index, 0, dragCard);

                return { ...state, todoList: boardCards };
            }

            let gragItem;
            const newTodoState = state.todoList.map((el) => {

                const newItemList = el.todoData.filter((item) => {
                    if (item.id === draggableId) {
                        gragItem = item
                    }
                    return item.id !== draggableId
                });

                return { ...el, todoData: newItemList }
            });

            const newTodoCards = newTodoState.map((el) => {
                if (destination.droppableId === el.id) {

                    const newArray = el.todoData.slice();
                    newArray.splice(destination.index, 0, gragItem);

                    return { ...el, todoData: newArray }

                } else {
                    return el
                }

            });

            return { ...state, todoList: newTodoCards };





        default: return state;
    }

};


