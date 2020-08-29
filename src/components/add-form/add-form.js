import React, { Component } from 'react';


export default class AddForm extends Component {


    render() {
        return(
            <div className="add-form">
                <div className="add-form-wrapper">
                    <textarea className="add-form-textarea"></textarea>
                </div>
                <div className="add-form-bottom">
                    <button className="add-form-submit">Add List</button>
                    <img className="add-form-cancel" />
                </div>
            </div>
        )
    }

}