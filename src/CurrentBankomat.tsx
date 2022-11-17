import React from 'react';
import {MoneyType} from "./App";
import styled from "styled-components";

type CurrentBankomatPropsType = {
    money: MoneyType
}
export const CurrentBankomat = (props: CurrentBankomatPropsType) => {
    return (
        props.money.banknotes === 'Dollars'
            ? <BanknoteGreen>
                <Value>{props.money.value} </Value>
                <span>{props.money.banknotes} </span>
                <span>{props.money.number}</span>
            </BanknoteGreen>
            : <BanknoteRed>
                <Value>{props.money.value} </Value>
                <span>{props.money.banknotes} </span>
                <span>{props.money.number}</span>
            </BanknoteRed>
    );
};

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
