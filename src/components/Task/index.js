import React from 'react';

/**
 * Recibe un objeto con la siguiente estructora
 * 
 * props = {
 *  name: str
 *  description: str
 * }
 * 
 * @param {*} props 
 */
function Task(props) {
    return (
        <div className="task">
            <h3>{props.name}</h3>
            <p>{props.description}</p>
        </div>
    );
}

export default Task;