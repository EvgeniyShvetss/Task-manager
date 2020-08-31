import React from "react";
import {connect} from 'react-redux'
import './setting-bg.css'
import { addBackground } from "../redux/actions";



const SettingBackgroundImg = ({addBackground, bg}) => {

    console.log(bg)
    const src = (e) => {
        const srcImage = e.target.src;
    };

    const settingBgItem = bg.map((el, index) => {
       return (
           <div className="settings-bg__item" key={index}  onClick={addBackground}>
               <img src={el.img} key={index} alt=""/>
           </div>
       )
    });


    return (
        <div className="settings-bg">
            <div className="setting-bg-title">
                Background img
            </div>

            <div className="settings-bg__items">
                {settingBgItem}


            </div>
        </div>
    )

};

const mapStateToProps = (state) => {
    return {
        bg: state.bg,
    };
};

const mapDispatchToProps = {
    addBackground
};


export  default connect(mapStateToProps, mapDispatchToProps)(SettingBackgroundImg);