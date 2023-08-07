import React, { useState } from "react"
import EditSource from "./EditSource"

const Pass = (props) => {

    const inputArr = [
        {
            type: "text",
            id: 1,
            value: ""
        }
    ];
    const [val, setEdit] = useState(inputArr)
    const store = props.data

    return (
        <div>
            {
                store.map((element) => {
                    return (
                        <>
                            <div className='div'>
                                <div className='divLabel'>

                                    <p className='content'>{element}</p>

                                    <div>
                                        <img src='todolist icon.jpg' alt='hello' onClick={handleEdit(element)} width='20px' height='20px' className='img' />
                                        {
                                            val.map((val) => {
                                                <input type='text' value={element} />
                                            })
                                        }
                                        <img src='del.png' alt='hello' width='20px' onClick={() => deleteBtn(element)} height='20px' className='img_2' />
                                    </div>

                                </div>
                            </div>
                        </>
                    )

                    function handleEdit(element) {
                        console.log(element);
                        // setEdit([...val,element])
                        // setEdit(a)
                        // setEdit(s =>{
                        //     // return [
                        //     //     ...s,
                        //     //     // { type: 'text', value: element }
                        //     // ]
                        // })
                        // return (
                        //     <EditSource p={element} />
                        // )
                    }

                    function deleteBtn(element) {
                        alert("confirm you want to delete these")
                        let d = document.querySelectorAll('.div')
                        let cap = store.indexOf(element)
                        for (let out in d) {
                            if (out.match(cap)) {
                                d[out].parentNode.removeChild(d[out])
                            }
                        }
                    }

                })
            }
        </div>
    )
}

export default Pass