import React, {useState} from 'react';
import './App.css';

function App() {

    const [count, setCount] = useState(0);

    const onClickHandler = () => {
        setCount(count + 1)
    }

    const onClickHandler2 = () => {
        setCount(0)
    }

    return (
        <div className="App">
            <h1>{count}</h1>
            <button onClick={onClickHandler}>Count</button>
            {count > 0 && (
                <div>
                    <button onClick={onClickHandler2}>Reset</button>
                </div>
            )}
        </div>
    );
}

export default App;
