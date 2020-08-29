import React from "react";
import { connect } from 'react-redux';
import { Draggable } from 'react-beautiful-dnd';
import { deleteItem } from '../redux/actions';
import AppListItem from "../app-list-item/app-list-item";
import './app-list.css'

const AppList = ({ todoLists, deleteItem }) => {
  const elements = todoLists.todoData.map((items, index) => {
    const { id, ...itemProps } = items
    return (
      <Draggable draggableId={items.id} index={index} key={items.id}>
        {provided => (
          <li key={id} index={index} className="list-group-item" ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
            <AppListItem {...itemProps}
              index={index}
              items={items}
              onDeleted={() => deleteItem(id, todoLists.id)} 
            />
          </li>
        )}
      </Draggable>
    );
  });

  return (

    <ul className='list-group todo-list'>
      {elements}
    </ul>

  );
};




const mapStateToProps = state => {
  return {
    list: state.lists.todoList
  }
};


const mapDispatchToProps = {
  deleteItem
};

export default connect(mapStateToProps, mapDispatchToProps)(AppList);
