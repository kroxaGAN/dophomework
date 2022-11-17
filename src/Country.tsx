import React from 'react';
import {City} from "./City";
import {BanknotsType, MoneyType} from "./App";

type CountryPropsType = {
    data: MoneyType[]
    setFilter: (filter:BanknotsType)=>void // давайте подумаем, setFilter -это гоузчик, у которого всегда в руках товар
    filter: BanknotsType
}

export const Country = (props: CountryPropsType) => {
    const setAll = (value:BanknotsType) => {
        // засетаем 'All'
        props.setFilter(value)
    }

    const setDollars = (value:BanknotsType) => {
        // засетаем 'Dollars'
        props.setFilter(value)
    }

    const setRUBLS = (value:BanknotsType) => {
        // засетаем 'RUBLS'
        props.setFilter(value)
    }

    return (
        <div>
            <button onClick={()=>setAll("All")}>All</button>
            <button onClick={()=>setDollars("Dollars")}>Dollars</button>
            <button onClick={()=>setRUBLS("RUBLS")}>RUBLS</button>
            <City data={props.data}/>
        </div>
    );
};

