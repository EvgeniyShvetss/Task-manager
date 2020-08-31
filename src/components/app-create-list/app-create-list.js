import React from "react";
import { Droppable, Draggable} from "react-beautiful-dnd";
import "./app-create-list.css";
import AddItem from "../add-item";
import AppList from "../app-list/app-list";
import { connect } from "react-redux";
import { deleteList } from "../redux/actions";

const AppCreateList = ({

  list,
  deleteList,

}) => {
  const createList = list.map((el, index) => {
    return (
        <Draggable draggableId={el.id} index={index} key={el.id}>
          {(provided) => (
              <div className="app-list-wrapper" key={el.id} id={el.id}
                   {...provided.draggableProps}
                   {...provided.dragHandleProps}
                   ref={provided.innerRef}
              >
                <div className="app-list-title">
                  <div className="list-title">{el.name}</div>
                  <button className="list-button" onClick={() => deleteList(el.id)}>
                    delete
                  </button>
                </div>
                <Droppable droppableId={el.id} key={el.id} type='task'>
                  {provided => (
                      <div ref={provided.innerRef}{...provided.droppableProps}{...provided.droppablePlaceholder}>
                        <AppList todoLists={el} />
                        {provided.placeholder}
                        <AddItem todoLists={el} />
                      </div>
                  )}
                </Droppable>
              </div>
          )}
        </Draggable>
    );
  });




  return <div className="todo-wrapper">{createList}</div>;
};






const mapStateToProps = (state) => {
  return {
    list: state.lists.todoList,
  };
};

const mapDispatchToProps = {
  deleteList,
};

export default connect(mapStateToProps, mapDispatchToProps)(AppCreateList);
