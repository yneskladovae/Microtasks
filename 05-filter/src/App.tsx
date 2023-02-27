import React, {useState} from 'react';
import './App.css';
import {NewComponent} from "./NewComponent";

export type FilterType = 'all' | 'dollar' | 'ruble';

function App() {
    const [money, setMoney] = useState([
        {banknote: "dollar", nominal: 100, number: "a123456789"},
        {banknote: "dollar", nominal: 50, number: "b123456789"},
        {banknote: "ruble", nominal: 100, number: "c123456789"},
        {banknote: "dollar", nominal: 100, number: "d123456789"},
        {banknote: "dollar", nominal: 50, number: "e123456789"},
        {banknote: "ruble", nominal: 100, number: "f123456789"},
        {banknote: "dollar", nominal: 50, number: "j123456789"},
        {banknote: "ruble", nominal: 50, number: "h123456789"}
    ])

    const [filter, setFilter] = useState<FilterType>('all')

    let currentMoney = money;

    if (filter === "ruble") {
        currentMoney = money.filter((filtered) => filtered.banknote === "ruble");
    }

    if (filter === "dollar") {
        currentMoney= money.filter((filtered) => filtered.banknote === "dollar");
    }

    const onClickFilterHandler = (nameButtons: FilterType) => {
        setFilter(nameButtons);

    }

    return (
        <NewComponent  currMoney={currentMoney} func={onClickFilterHandler}/>
        // <>
        //     <ul>
        //         {currentMoney.map((objFromMoneyArr: any, index) => {
        //             return (
        //                 <li key={index}>
        //                     <span>{objFromMoneyArr.banknote}</span>
        //                     <span>{objFromMoneyArr.nominal}</span>
        //                     <span>{objFromMoneyArr.number}</span>
        //                 </li>
        //             )
        //         })}
        //     </ul>
        //     <div style={{marginLeft: "35px"}}>
        //         <button onClick={() => onClickFilterHandler('all')}>All</button>
        //         <button onClick={() => onClickFilterHandler('ruble')}>Ruble</button>
        //         <button onClick={() => onClickFilterHandler('dollar')}>Dollars</button>
        //     </div>
        // </>

    );
}

export default App;
