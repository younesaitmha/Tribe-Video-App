import React from "react";


const style = {
    fontFamily: 'Inter',
    fontWeight: 'bold',
    fontSize: '14px',
    marginBottom: '0'
}

const Label = ({ label }) => {
    return (
        <p style={style}>
            { label }
        </p>
    )
}

export default Label;
