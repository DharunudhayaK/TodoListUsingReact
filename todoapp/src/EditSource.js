import React, { useState } from 'react'

const EditSource = ({p}) => {
    console.log(p);
    const [ed,setEditFun] = useState(p)
    function handleUpdate()
    {
        setEditFun(ed)
    }
    return (
        <div>
            <input  type="text" value={ed}/>
            <button onClick={handleUpdate}>update</button>
        </div>
    )
}

export default EditSource
