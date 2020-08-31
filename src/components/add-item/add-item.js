import React, { Component } from 'react';
import './add-item.css'
import {connect} from 'react-redux';
import {createItem} from '../redux/actions';

class AddItem extends Component {

    state = {
        label: '',
        isCreateMode: false,

    };

    onLabelChange = (e) => {
        this.setState({
            label: e.target.value
        })
    };
 
    onSubmit = (e) => {
        e.preventDefault();
        this.props.createItem(this.state.label, this.props.todoLists.id);
        this.setState({
            label: '',
            isCreateMode: false
        })
    };

    onEnterPress = (e) => {
        if(e.keyCode === 13 && e.shiftKey === false) {
            e.preventDefault();
            this.props.createItem(this.state.label, this.props.todoLists.id);
            this.setState({
                label: '',
                isCreateMode: false
            })
        }
    }

    onToggleMode = () => {
        this.setState(({isCreateMode}) => {
            return {
                isCreateMode: !isCreateMode
            }
        })
    };
    
    
    render() {
        const {isCreateMode} = this.state;
        if (isCreateMode) {
            return (
                <form className="add-item"
                    onSubmit={this.onSubmit}>
                    <textarea autoFocus
                        type="text"
                        placeholder="add task"
                        className="add-item-input"
                        rows="2"
                        onChange={this.onLabelChange}
                        value={this.state.label}
                        onKeyDown={this.onEnterPress}>
                    </textarea>

                    <button type="submit">add item</button>
                </form>
            );
        } else {
           return (
            <button className="add-item-mode" onClick={this.onToggleMode}>add item</button>
           )
        }
        
        
    };
};

const mapDispatchToProps = {
    createItem
};
  
  
export default connect(null, mapDispatchToProps)(AddItem)