import React from 'react';
import "../App.css"
import { useDispatch } from 'react-redux';
import { increase,decrease } from '../store';
const Bottom = () => {

    const dispatche = useDispatch();

    return (
        <div className='sub_container'>
            <h1>Bottom</h1>
            <button onClick={()=>dispatche(increase("cos"))}>증가</button>
            <button onClick={()=>dispatche(decrease())}>감소</button>
        </div>
    );
};

export default Bottom;