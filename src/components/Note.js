import '../index.css'


export const Note = (props) => {

    const deleteNote = () => {
        props.deleteItem(props.id)
    }


    return (
        <div className='noteBox'>
            <div className='note'>
                <h1>{props.title}</h1>
                <p>{props.content} </p>
                <button className='dltBtn' onClick={deleteNote}>Delete</button>
            </div>
        </div>

    )
}