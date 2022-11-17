import React from 'react';
import {City} from "./City";
import {BanknotsType, MoneyType} from "./App";
import styled from "styled-components";

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
            <FilterButton onClick={()=>setAll("All")}>All</FilterButton>
            <FilterButton onClick={()=>setDollars("Dollars")}>Dollars</FilterButton>
            <FilterButton onClick={()=>setRUBLS("RUBLS")}>RUBLS</FilterButton>
            <City data={props.data}/>
        </div>
    );
};

const FilterButton = styled.button`
  background-color: burlywood;
  width: 100px;
  height: 35px;
  margin: 10px;
`
