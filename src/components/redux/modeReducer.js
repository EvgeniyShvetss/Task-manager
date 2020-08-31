import {HIDE_MODAL, RENAME_ITEM, SHOW_MODAL} from "./types";

const initialState = {
    modeRename: false,
    isCreateModal: false,
};

export const modeReducer = (state = initialState, action) => {
    switch (action.type) {

        case RENAME_ITEM:
            return {...state, modeRename: true};

        case SHOW_MODAL:
            return {...state, isCreateModal: true};

        case HIDE_MODAL:
            return {...state, isCreateModal: false};



        default: return state;
    }
};