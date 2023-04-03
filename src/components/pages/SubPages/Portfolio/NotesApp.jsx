import React, { useState } from 'react';
import '../../../../styles/NotesAppStyles.css';
// import Footer from '../../../Footer';

import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

function CreateArea(props) {
    //creates an individual note
    //sets subparts of each note to be title and content
    const [note, setNote] = useState({
        title: '',
        content: '',
    });

    //triggers when there is a change in the input area
    //pulls the values title and content from the useState array
    function handleChange(event) {
        const { name, value } = event.target;

        //adds the content(value) of what you entered into the title and content inputs into the note
        //is pulls the title:'' and content:'' and fills in the blanks
        //it matches the [name] from the form to the name from the note title to title and content to content
        setNote((prevNote) => {
            return {
                ...prevNote,
                [name]: value,
            };
        });
    }

    //triggers when the plus button is clicked
    //prevents the default action of refreshing the page when a form is submitted
    //pulls addNote function from App.jsx
    //resets the input to blank after you click the +
    function submitNote(event) {
        event.preventDefault();
        props.addNote(note);
        setNote({
            title: '',
            content: '',
        });
    }

    //what appears on webpage
    //form includes the input section for title and content at the top of the page
    return (
        <div>
            <form>
                <input
                    name='title'
                    placeholder='Title'
                    value={note.title}
                    onChange={handleChange}
                />
                <textarea
                    name='content'
                    placeholder='Note...'
                    rows='3'
                    value={note.content}
                    onChange={handleChange}
                />
                <button onClick={submitNote}>
                    <span>
                        <AddIcon />
                    </span>
                </button>
            </form>
        </div>
    );
}

function NotesApp() {
    const startingNotes = [
        {
            key: 1,
            title: 'Choose a Theme',
            content: 'Click on the different colored circles to select a theme',
        },
        {
            key: 2,
            title: 'How to Use',
            content: 'Click + to add a note and - to delete',
        },
    ];

    //array of all the notes
    const [notes, setNotes] = useState(startingNotes);

    // sets color theme
    const [theme, setTheme] = useState('blue-theme');

    function handleThemeChangeRed() {
        setTheme('red-theme');
    }
    function handleThemeChangeOrange() {
        setTheme('orange-theme');
    }
    function handleThemeChangeYellow() {
        setTheme('yellow-theme');
    }

    function handleThemeChangeGreen() {
        setTheme('green-theme');
    }

    function handleThemeChangeBlue() {
        setTheme('blue-theme');
    }

    function handleThemeChangePurple() {
        setTheme('purple-theme');
    }

    function handleThemeChangePink() {
        setTheme('pink-theme');
    }

    //adds the new note to the existing array of notes
    //pulls the current array of notes and returns the array plus the new note
    function addNote(note) {
        setNotes((prevNotes) => {
            return [...prevNotes, note];
        });
    }

    //pulls the current array of notes and filters out the one you want to delete
    //pulls the id of the note you clicked to delete and returns every item in the notes array that does note match that id
    function deleteNote(id) {
        setNotes((prevNotes) => {
            return prevNotes.filter((noteItem, index) => {
                return index !== id;
            });
        });
    }

    //this is what is actually appearing on your web page
    //notes.map function goes thru each note in the notes array and pulls out the noteItem and index
    //noteItem in just a made up phrase used to describe each part of the note
    //it could be anything, but needs to be consistent to connect the different parts of code
    //within the <Note /> it creates variables to transfer functions and items to the Note.jsx page

    function Note(props) {
        //function triggers when delete button is pressed
        //it pulls deleteNote function for App.jsx
        //you have to use props.blank to pull variables from another page
        function handleClick() {
            props.deleteNote(props.id);
        }

        //what shows up on the page
        //props.title pulls the title={} ans so on
        //you don't need props.handleClick to call that function bc it is on this page and not the App.jsx page, it doesn't need to be pulled over
        return (
            <div className='note'>
                <div className='title-section'>
                    <h2>{props.title}</h2>
                </div>
                <p>{props.content}</p>
                <button onClick={handleClick}>
                    <span>
                        <RemoveIcon />
                    </span>
                </button>
            </div>
        );
    }

    const notesArray = notes.map((noteItem, index) => {
        return (
            <Note
                key={index}
                id={index}
                title={noteItem.title}
                content={noteItem.content}
                deleteNote={deleteNote}
            />
        );
    });

    return (
        <>
                <div className={`notes-app ${theme}`}>
                    <header>
                        <h1>Notes</h1>
                        <div
                            className='theme-changer red'
                            onClick={handleThemeChangeRed}
                        ></div>
                        <div
                            className='theme-changer orange'
                            onClick={handleThemeChangeOrange}
                        ></div>
                        <div
                            className='theme-changer yellow'
                            onClick={handleThemeChangeYellow}
                        ></div>
                        <div
                            className='theme-changer green'
                            onClick={handleThemeChangeGreen}
                        ></div>
                        <div
                            className='theme-changer blue'
                            onClick={handleThemeChangeBlue}
                        ></div>

                        <div
                            className='theme-changer purple'
                            onClick={handleThemeChangePurple}
                        ></div>
                        <div
                            className='theme-changer pink'
                            onClick={handleThemeChangePink}
                        ></div>
                    </header>
                    <CreateArea addNote={addNote} />
                    <div className='notes-area'> {notesArray}</div>
                </div>
                <div className='notes-app'></div>
        </>
    );
}

export default NotesApp;
