import React, { Component } from "react";
import {connect} from 'react-redux';
import "./app-list-item.css";
import  {renameItem} from "../redux/actions";


class AppListItem extends Component {

  state = {
    label: '',
  isModeRename: false,
  };


  onLabelChange = (e) => {
    this.setState({
      label: e.target.value
    })
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.renameItem(this.state.label, this.props.items.id);
    this.setState({

      label: '',
      isModeRename: false,
    })
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
    } = this.props;
    let classNames = "todo-list-item";

    const { isModeRename } = this.state;
    if (isModeRename) {
      return (
          <form className="rename-item"
                onSubmit={this.onSubmit}>
                    <input type="text"
                           autoFocus
                              className="rename-item-input"
                              onChange={this.onLabelChange}
                              value={this.state.label}>
                    </input>
          </form>
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
            onClick={this.onToggleMode}
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
  renameItem,
};


const mapStateToProps = (state) => {
  return {
    mode: state.mode.modeRename,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AppListItem)