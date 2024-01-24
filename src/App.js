import './App.css';
import {useContext, useRef, useState} from "react";
import List from "./Components/List";
import { v4 as uuidv4 } from 'uuid';
import {ThemeContext} from "./context/ThemeContext";


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

    const {isDark, toggleTheme} = useContext(ThemeContext);

    return (
        <div className={`App ${isDark ? 'dark' : 'light'}`}>
            <div className={`header`}>
                <h2>App</h2>
                <button onClick={toggleTheme}>{isDark ? 'Light' : 'Dark'} theme</button>
            </div>
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
