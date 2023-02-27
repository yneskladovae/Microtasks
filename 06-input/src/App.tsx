import React, {useState} from 'react';
import './App.css';
import {FullInput} from "./components/FullInput";
import {Button} from "./components/Button";
import {Input} from "./components/Input";

function App() {
    let [message, setMessage] = useState([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'},
    ])

    let [title, setTitle] = useState("")

    const addNewMessage = (title: string) => {
        let newMessage = {message: title};
        setMessage([newMessage, ...message])
    }

    const callbackButtonHandler = () => {
        addNewMessage(title)
        setTitle("")
    }


    return (
        <div className="App">
            {/*<div>*/}
            {/*    <input/>*/}
            {/*    <button>+</button>*/}
            {/*</div>*/}
            {/*<FullInput addNewMessage={addNewMessage}/>*/}
            <Input title={title} setTitle={setTitle} />
            <Button name={'+'} callback={callbackButtonHandler}/>
            {message.map((el, index) => {
                return (
                    <div key={index}>{el.message}</div>
                )
            })}
        </div>
    )
}

export default App;
