import {CREATE_LIST, DELETE_LIST, CREATE_ITEM, DELETE_ITEM, DRAG_ITEM, RENAME_ITEM, DRAG_CARDS} from "./types";
const idx = 0;
export function createList(name) {
  return {
    type: CREATE_LIST,
    payload: {
      name: name,
      id: Date.now().toString(),
      todoData: [],
      
    },
  };
}

export function deleteList(id) {
    return {
        type: DELETE_LIST,
        id: id
    }
}


export function createItem (text, id) {
    return {
        type: CREATE_ITEM,
        id: id,
        payload: {
            label: text,
            id: Date.now().toString(),
            important: false, 
            done: false,
        }
    }
}

export function deleteItem (id, parentId) {
    return {
        type: DELETE_ITEM,
        id:id,
        parentId: parentId
    }
}

export function renameItem() {
    return {
        type: RENAME_ITEM
    }
}


export function onDragEnd (result) {

    return {
        type: DRAG_ITEM,
        result: result
    } 
}

export function onDragCard(result) {
   return {
       type: DRAG_CARDS,
       result: result
   }


}
