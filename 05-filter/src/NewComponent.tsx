import React from "react";
import {FilterType} from "./App";

type NewComponentType = {
    currMoney:Array<MoneyType>
    func: (nameButtons: FilterType) => void
}

type MoneyType = {
    banknote:string
    nominal: number
    number: string
}

export const NewComponent = (props:NewComponentType) => {
    console.log(props)
    return (
        <>
            <ul>
                {props.currMoney.map((objFromMoneyArr: any, index:any) => {
                    return (
                        <li key={index}>
                            <span>{objFromMoneyArr.banknote}</span>
                            <span>{objFromMoneyArr.nominal}</span>
                            <span>{objFromMoneyArr.number}</span>
                        </li>
                    )
                })}
            </ul>
            <div style={{marginLeft: "35px"}}>
                <button onClick={() => props.func('all')}>All</button>
                <button onClick={() => props.func('ruble')}>Rubles</button>
                <button onClick={() => props.func('dollar')}>Dollars</button>
            </div>
        </>
    )
}