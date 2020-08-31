import { combineReducers } from "redux";
import {listsReducer} from './listsReducer';
import {modeReducer} from "./modeReducer";
import {backgroundReducer} from './backgroundReducer';
export const rootReducer = combineReducers({
 
    lists: listsReducer,
    mode: modeReducer,
    bg: backgroundReducer,

});