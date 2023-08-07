import React, { useState } from 'react';
import Pass from './Pass';

const TodoList = () => {

    const [initialVariable, setState] = useState('')
    const [empArray, setArray] = useState([])
    const [err, setError] = useState('')

    function addItem() {
        let obj = { bool: true }
        initialVariable === '' ? obj['bool'] = false : obj['bool'] = true;
        if (obj['bool'] === true) {
            setArray([...empArray, initialVariable]);
            // setState('');
            setError('')
            // setState((initialVariable) => {
            //     console.log(initialVariable);
            //     initialVariable = ' ';
            // });
        }
        else {
            setError("Do not be empty")
        }
    }

    return (
        <div className='firstDivision'>
            <p className='title'>get things done</p>
            <div className='secondDivision'>
                <input type='text' className='inputBox' onChange={event => setState(event.target.value)} placeholder='what is the task today?' required maxLength={30} />
                {/* <textarea onChange={event => setDesc(event.target.value)} className='inputBox_2' placeholder='description'></textarea> */}
                <input type='button' className='button' onClick={() => addItem()} value="add task" />
                <p className='errorLabel'>{err}</p>
            </div>
            <div>
                {
                    <Pass data={empArray} />
                }
            </div>
        </div>
    )
}

export default TodoList