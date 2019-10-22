import React from 'react';
import "./style.css";

export default (props) => {
    return (
        <div
            className="characterCard"
            onClick={() => props.setClicked(props.id)}
        >
            <img
                className="img"
                alt={props.name}
                src={props.image}
            />
        </div>
    )
};
