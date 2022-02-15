import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

const buttonStyle = {
    width: '398px',
    height: '48px',
    background: '#005FFC',
    border: 'none',
    borderRadius: '8px',
    fontFamily: 'Inter',
    fontSize: '1.3em',
    fontWeight: 'normal',
    color: 'white',
    letterSpacing: '1.1px',
}

function ButtonTribe({type, text} ) {
    return (
        <>
        {type === 'btn' ? (
            <button style={buttonStyle}>{text}</button>
        ) : (<Link>{text}</Link>)}
        </>
    );
}

ButtonTribe.propTypes = {
    type: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
};

export default ButtonTribe;
