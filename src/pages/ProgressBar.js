import React from "react";

const ProgressBar = (props) => {
    const { bgcolor, completed } = props;

    const containerStyles = {
        height: 25,
        width: '100%',
        backgroundColor: "#d2d2d2",
        borderRadius: 20
    }

    const fillerStyles = {
        height: '100%',
        width: `${completed}%`,
        backgroundColor: "#5b6ac7",
        borderRadius: 'inherit',
        textAlign: 'right'
    }

    const labelStyles = {
        padding: 5,
        color: 'white',
        fontWeight: 'bold'
    }

    return (
        <div style={containerStyles}>
            <div style={fillerStyles}>
                <span style={labelStyles}>{`${completed}%`}</span>
            </div>
        </div>
    );
};

export default ProgressBar;