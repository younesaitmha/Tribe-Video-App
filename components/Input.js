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
        fontWeight: 'normal',
        color: '#666666',
        lineHeight: '16px',
    },
    input: {
        paddingLeft: '12px',
        height: '44px',
        width: '90%',
        border: '1px solid #DBDBDB',
        boxSizing: 'border-box',
        borderRadius: '6px',
    }
}


function Input({ id, name, type, placeholder, label, fontSize, onChange }) {
    const handleOnChange = (e) => {
        if (onChange) {
          onChange(e.target.value)
        }
        return null
    }
    return (
        <div style={style.container}>
            <label style={{...style.label, fontSize: {fontSize}}}>{label}</label>
            <input
                style={style.input}
                id={id}
                type={type}
                name={name}
                placeholder={placeholder}
                onChange={handleOnChange}
            />
        </div>
    );
}

Input.propTypes = {
    placeholder: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string,
    id: PropTypes.string,
    label: PropTypes.string,
    fontSize: PropTypes.string
};

Input.defaultProps = {
    fontSize: '1.3em'
}

export default Input;
