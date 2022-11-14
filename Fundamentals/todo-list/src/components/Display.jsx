import React from 'react';

const Display = ({list, setList}) => {
    const changeMe = item => {
        //change value
        item.complete = !item.complete;
        //update the list
        setList([...list])
    }
    const deleteMe = val => {
        setList( list.filter(item=>(item.content !== val)))
    }
    return (
        <div>
            <h2>
                To Do List:
            </h2>
            <ul>
                {list.map((item) =>
                <li>
                    <input type="checkbox" onChange={ e => changeMe(item)}/>
                    <span className={(item.complete) ? "complete" : null}>
                        {item.content}
                    </span>
                    <button onClick={ e => deleteMe(item.content)} className="btn btn-danger">
                        Delete
                    </button>
                </li>
                )}
            </ul>
        </div>
    )
}

export default Display