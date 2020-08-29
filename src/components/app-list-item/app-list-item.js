import React, { Component } from "react";
import {connect} from 'react-redux';
import "./app-list-item.css";
import  {renameItem} from "../redux/actions";

class AppListItem extends Component {

  state = {
  isModeRename: false,
  };


  onToggleMode = () => {
    this.setState(({isModeRename}) => {
      return {
        isModeRename: !isModeRename
      }
    })
  };

  render() {
    const {
      label,
      onDeleted,
      renameItem
    } = this.props;
    let classNames = "todo-list-item";


    const { isModeRename } = this.state;
    if (isModeRename) {
      return (
          <span className={classNames}>
            <input className="todo-list-item-label" ></input>
          </span>
      );
    }


    return (
      <span className={classNames}>
        <span className="todo-list-item-label" >
          {label}
        </span>
        <span className="btn-container">
          <button
            type="button"
            className="btn btn-outline-success btn-sm"
            onClick={renameItem}
          >
            <i className="fa fa-pencil" />
          </button>

          <button
            type="button"
            className="btn btn-outline-danger btn-sm"
            onClick={onDeleted}
          >
            <i className="fa fa-trash-o" />
          </button>
        </span>
      </span>
    );
  }
}


const mapDispatchToProps = {
  renameItem
};

export default connect(null, mapDispatchToProps)(AppListItem)