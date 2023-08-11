import React, { useEffect, useState } from 'react';
import Pass from './Pass';

const TodoList = () => {

    const [initialVariable, setState] = useState('')
    const [empArray, setArray] = useState([])
    const [err, setError] = useState('')

    function addItem() {
        let obj = { bool: true }
        initialVariable === '' ? obj['bool'] = false : obj['bool'] = true;
        if (obj['bool'] === true) {
            setArray([...empArray, { name: initialVariable, id: Math.floor(Math.random() * 100) }]);
            setState('')
            setError('')
        }
        else {
            setError("Do not be empty")
        }
    }

    useEffect(() => {
        console.log("hello");
    });

    return (
        <div className='firstDivision'>
            <p className='title'>Note Application</p>
            <div className='secondDivision'>
                <input type='text' className='inputBox' onChange={event => setState(event.target.value)} placeholder='Enter the Content' required maxLength={30} value={initialVariable} />
                {/* <textarea onChange={event => setDesc(event.target.value)} className='inputBox_2' placeholder='description'></textarea> */}
                <input type='button' className='button' onClick={() => addItem()} value="add task" />
                <p className='errorLabel'>{err}</p>
            </div>
            <div>
                {
                    <Pass data={empArray} setArray={setArray} initialVariable={initialVariable} setState={setState} />
                }
            </div>
        </div>
    )
}

export default TodoList