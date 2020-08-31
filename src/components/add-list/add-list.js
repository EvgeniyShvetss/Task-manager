import React, { Component } from "react";
import {connect} from 'react-redux';
import {createList} from '../redux/actions';

 class AddList extends Component {
    
    state = {
        name: '',
        isCreateMode: false
    };

    onChangeName = (e) => {
        this.setState({
            name: e.target.value
        })
    };

    onSubmit = (e) => {
        e.preventDefault()
        const {name} = this.state
        if(!name.trim()) {
          return
        }
        
        this.props.createList(name)
        this.setState({
            name: '',
            isCreateMode: false
        })
        
    };

    onToggleMode = () => {
      this.setState(({isCreateMode}) => {
        return {
          isCreateMode: !isCreateMode
        }
      })
    };


  render() {
 
    const {isCreateMode} = this.state
    if(isCreateMode) {
      return (
        <form className="add-list" onSubmit={this.onSubmit} >
          <input autoFocus
          onChange={this.onChangeName} 
          value={this.state.name} />
          <button type="submit">Add list</button>
        </form>
      );
    } else {
      return (
        <button onClick={this.onToggleMode}>Add list</button>
      )
    }

    
    
  }
}


const mapDispatchToProps = {
  createList
}


export default connect(null, mapDispatchToProps)(AddList)