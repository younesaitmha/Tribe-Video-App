import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import animations from './../styles/animations.module.css'


const AsideButton = ({ name, iconName, nameClass='' }) => {


    return (
        <div>
            <button className={`dash-btn ${nameClass}`}>
                <i className={`icon ${iconName}`} ></i>
                <span>{ name }</span>
            </button>
        </div>
    );
}

export default AsideButton;
