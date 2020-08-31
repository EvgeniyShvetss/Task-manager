import React, {Component} from "react";
import './settings.css'
import {connect} from 'react-redux'
import {showModal, hideModal} from "../redux/actions";
import SettingBackgroundImg from "./setting-bg";
class Settings extends Component  {





    render() {
        if(this.props.mode) {
            return (
                <div className='settings-modal'>
                    <div className="img-close-container" onClick={this.props.hideModal}>
                    </div>
                    <div className="settings-modal-items">
                        <SettingBackgroundImg/>
                    </div>

                </div>
            )
        }

        return (
            <div className='settings-container' >
                <div className="settings-controller">
                    <div className="img-container" onClick={this.props.showModal}>
                    </div>
                </div>
            </div>
        )
    }
};



const mapStateToProps = (state) => {
    return {
        mode: state.mode.isCreateModal,
    };
};

const mapDispatchToProps = {
    showModal,
    hideModal,
};



export default  connect(mapStateToProps, mapDispatchToProps)(Settings);