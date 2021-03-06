import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import animations from './../styles/animations.module.css'

const buttonStyle = {
    width: '75%',
    height: '48px',
    background: '#005FFC',
    border: 'none',
    borderRadius: '8px',
    fontFamily: 'Inter',
    fontSize: '1.3em',
    fontWeight: 'normal',
    color: 'white',
    letterSpacing: '1px',
    marginLeft: '12%',
    marginRight: '13%',
    marginTop: '5%',
    cursor: 'pointer'
}

function ButtonTribe({type, text, click, disabled, htmlType} ) {

    const handleClick = (click) => {
        return click()
    }

    return (
        <>
        {type === 'btn' ? (
            <button
                disabled={disabled}
                type={htmlType}
                onClick={() => handleClick}
                style={buttonStyle}
                className={animations.grow}>{text}
                {disabled}
            </button>
        ) : (<Link>{text}</Link>)}
        </>
    );
}

ButtonTribe.propTypes = {
    type: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
};

export default ButtonTribe;
