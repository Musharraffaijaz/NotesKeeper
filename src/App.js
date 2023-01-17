import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/NavBar';
import { Footer } from './components/Footer';
import { Note } from './components/Note';
import { CreateNotes } from './components/CreateNotes';
import { useState } from 'react';


function App() {
  const [addItem, setItem] = useState([])
  const addNote = (note) => {

    setItem((prevData) => {
      return [...prevData, note]
    })
  }


  const onDelete = (id) => {
    setItem((oldData) =>
      oldData.filter((currentData, indx) => {
        return indx !== id;
      })
    )
  }

  return (
    <>
      <NavBar />
      <CreateNotes passNote={addNote} />


      {addItem.map((val, index) => {
        return <Note key={index} id={index} title={val.title} content={val.content} deleteItem={onDelete} />
      })}
      <Footer />
    </>

  );
}

export default App;
