import React, { useState } from "react"
import EditSource from "./EditSource"

const Pass = (props) => {
    const store = props.data

    function handleEdit(index, element) {

        props.setArray(element['name'])
        // store.map(v => {
        //     console.log(v['id']);
        //     console.log(element['id']);
        //     if (v['id'] === element['id']) {
        //         console.log(v['id']);
        //         // element['name'].replace(element['name'], v['name']);

        //     }
        // })
        // console.log(store);
        props.setState(element.name)
        const remove = store.filter((item) => item['name'] !== element['name'])
        props.setArray(remove)

        console.log(remove);
        // if(element['id']) {
        //     console.log(element['id']);
        // }
        // setEdit([...val,element])
        // setEdit(a)
        // setEdit(s =>{
        //     // return [
        //     //     ...s,
        //     //     // { type: 'text', value: element }
        //     // ]
        // })
    }


    return (
        <div>
            {
                store.map((element) => {
                    return (
                        <>
                            <div className='div'>
                                <div className='divLabel'>

                                    <p className='content'>{element.name}</p>

                                    <div>
                                        <img src='todolist icon.jpg' alt='hello' onClick={() => handleEdit(store.indexOf(element), element)} width='20px' height='20px' className='img' />
                                        <img src='del.png' alt='hello' width='20px' onClick={() => deleteBtn(element)} height='20px' className='img_2' />
                                    </div>

                                </div>
                            </div>
                        </>
                    )

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
            {/* {true && <fdd />} */}
        </div>
    )
}

export default Pass