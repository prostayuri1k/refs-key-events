import './App.css';
import {useRef, useState} from "react";
import List from "./Components/List";
import { v4 as uuidv4 } from 'uuid';


function App() {
    const [text, setText] = useState('');
    const textInput = useRef(null);
    const [arr, setArr] = useState([]);
    const handleChangeText = (event) => {
        setText(event.target.value)
    }

    const handleKeyDown = (event) => {
        if(event.key === 'Enter') {
        arr.push({id: uuidv4(), text: text})
            setText('');
        }
    }

    return (
        <div className='App'>
            <h2>App</h2>
            <div>
                <input ref={textInput} value={text} onChange={handleChangeText} onKeyDown={handleKeyDown}/>
            </div>
            <div>
                <button onClick={() => textInput.current.focus()}>Click to focus</button>
            </div>
            <List arr={arr} setArr={setArr}/>
        </div>
    )
}

export default App;
