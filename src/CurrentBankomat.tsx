import React from 'react';
import {MoneyType} from "./App";
import styled from "styled-components";

type CurrentBankomatPropsType = {
    money: MoneyType
}
export const CurrentBankomat = (props: CurrentBankomatPropsType) => {
    return (
        <Banknote color={props.money.banknotes==="Dollars"?'lawngreen':'coral'}>
            <Value>{props.money.value} </Value>
            <span>{props.money.banknotes} </span>
            <span>{props.money.number}</span>
        </Banknote>
        // props.money.banknotes === 'Dollars'
        //     ? <BanknoteGreen>
        //         <Value>{props.money.value} </Value>
        //         <span>{props.money.banknotes} </span>
        //         <span>{props.money.number}</span>
        //     </BanknoteGreen>
        //     : <BanknoteRed>
        //         <Value>{props.money.value} </Value>
        //         <span>{props.money.banknotes} </span>
        //         <span>{props.money.number}</span>
        //     </BanknoteRed>
    );
};

const Banknote = styled.div`
  background-color: ${props=>{
      if (props.color==='lawngreen'){
          return 'lawngreen'
      }else {
          return 'coral'
      }
  }};
  width: 200px;
  height: 150px;
  margin: 10px;
`

const BanknoteGreen = styled.div`
  background-color: lawngreen;
  width: 200px;
  height: 150px;
  margin: 10px;
`
const BanknoteRed = styled.div`
  background-color: coral;
  width: 200px;
  height: 150px;
  margin: 10px;
`


const Value = styled.div`
  display: flex;
  justify-content: center;
`
