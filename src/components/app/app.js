import React, { Component } from "react";
import { connect } from "react-redux";
import {DragDropContext, Droppable} from 'react-beautiful-dnd'
import "./app.css";
import AddList from "../add-list";
import AppCreateList from "../app-create-list/app-create-list";
import { onDragEnd } from '../redux/actions'


class App extends Component {
  state = {
    mode: [
      {isCreateMode: false},
      {modeRename: false}

    ]
  };

  createTodoItem(label) {
    return {
      label,
      important: false,
      done: false,
      id: Date.now(),
      idParent: 444
    };
  }

  addItem = (label,id) => {
    const newItem = this.createTodoItem(label);
    this.setState({
      todoList: this.state.todoList.map((el) => {
        if (el.id === id) {
          return { ...el, todoData: [...el.todoData, newItem] };
        }

        return el;
      }),
    });
  };

  deleteItem = (id, idList) => {
    this.setState({
      todoList: this.state.todoList.map((el) => {

        
        if(el.id === idList) {
          const newTodoData = el.todoData.filter((item) => item.id !== id)
          return {...el, todoData: newTodoData }
        }
        
        return el;
      })

    });
  };




  toggleProperty(arr, id, propName) {
    const idx = arr.findIndex((el) => el.id === id);

    const oldItem = arr[idx];
    const newItem = { ...oldItem, [propName]: !oldItem[propName] };

    return [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)];
  }

  onToggleImportant = (id) => {
    // console.log(id);
    // this.setState({
    //   todoList: this.state.todoList.map((el) => {
        
    //   })
      
    // });
  };

  onToggleDone = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, "done"),
      };
    });
  };



  deleteListItem = (id) => {
    this.setState(({ todoList }) => {
      const idx = todoList.findIndex((el) => el.id === id);

      const newTodoList = [
        ...todoList.slice(0, idx),
        ...todoList.slice(idx + 1),
      ];

      return {
        todoList: newTodoList,
      };
    });
  };

  createTodoItemList(name) {
    return {
      name,
      id: Date.now(),
      todoData: [],
    };
  }

  addItemList = (name) => {
    const newItemList = this.createTodoItemList(name);

    this.setState(({ todoList }) => {
      const newArray = [...todoList, newItemList];

      return {
        todoList: newArray,
      };
    });
  };


  render() {
    return (
      <DragDropContext onDragEnd={this.props.onDragEnd}>
        <Droppable droppableId='all-cards' direction='horizontal' type='cards'>
          { (provided) => (
          <div className="app-container"
               {...provided.droppableProps}
               ref={provided.innerRef}
          >
            <div className="todo-wrapper">
              <AppCreateList/>
              <AddList/>
            </div>
            {provided.placeholder}
            </div>
          )}
        </Droppable>
        <AddList/>
      </DragDropContext>
    );
  }
}



const mapDispatchToProps = {
  onDragEnd,
};

export default connect(null, mapDispatchToProps)(App);