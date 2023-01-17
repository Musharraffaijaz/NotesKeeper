import '../index.css';
import Button from '@mui/material/Button';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { useState } from 'react';


export const CreateNotes = (props) => {


    const [expand, setExpand] = useState(false)
    const [note, setNote] = useState({
        title: '',
        content: ''
    });
    const InputEvent = (e) => {
        const { name, value } = e.target;


        setNote((prevData) => {
            return {
                ...prevData,
                [name]: value

            }
        })
        console.log(note)
    }

    const addEvent = (e) => {
        e.preventDefault();
        props.passNote(note)
        setNote({
            title: '',
            content: ''
        })
    }

    const expandIt = () => {
        setExpand(true)
    }
    return (
        <>
            <form>

                {expand ? <input type='text' name='title' onChange={InputEvent} value={note.title} placeholder='Title' autoComplete='off' /> : null}
                <textarea rows='' column='' name='content' onChange={InputEvent} value={note.content} placeholder='Write a note' onClick={expandIt} />
                {expand ? <button className='dltBtn' onClick={addEvent}>Add</button> : null}

            </form>


        </>
    )
}