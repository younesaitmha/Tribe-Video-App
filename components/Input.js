import React from 'react';
import PropTypes from 'prop-types';


const style = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        padding: '2px 0 2px 0',
    },
    label: {
        paddingBottom: '8px',
        fontFamily: 'Inter',
        fontSize: '1.3em',
        fontWeight: 'normal',
        color: '#666666',
        lineHeight: '16px',
    },
    input: {
        paddingLeft: '12px',
        height: '48px',
        height: '44px',
        width: '80%',
        border: '1px solid #DBDBDB',
        boxSizing: 'border-box',
        borderRadius: '6px',

    }
}


function Input({ id, name, type, placeholder, label }) {
    return (
        <div style={style.container}>
            <label style={style.label}>{label}</label>
            <input style={style.input} id={id} type={type} name={name} placeholder={placeholder}/>
        </div>
    );
}

Input.propTypes = {
    placeholder: PropTypes.string,
    name: PropTypes.name,
    type: PropTypes.string,
    id: PropTypes.string,
    label: PropTypes.string
};

export default Input;
