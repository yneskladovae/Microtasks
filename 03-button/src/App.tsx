import React from 'react';
import './App.css';
import {Button} from "./components/Button";

function App() {

    const Button1Foo = (sub: string, age: number
    ) => {
        console.log(sub, age)
    }

    const Button2Foo = (sub: string) => {
        console.log(sub)
    }

    const StupidBtnFunc =  () => {
        console.log('Im stupid btn')
    }


    return (
        <div className="App">
            {/*<button>My YouTube Chanel-1</button>*/}
            {/*<button>My YouTube Chanel-2</button>*/}
            <Button name={"My YouTube Chanel-1"} callBack={() => Button1Foo('Vasiy', 21)}/>
            <Button name={"My YouTube Chanel-2"} callBack={() => Button2Foo('ivan')}/>
            <Button name={"Click"} callBack={StupidBtnFunc} />
        </div>
    )
}

export default App;
