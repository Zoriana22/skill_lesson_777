import * as React from "react";
import * as ReactDom from "react-dom";
import s from './productsList.module.css';
import CardList from "./CardList";

const CardListWrapper = (props) => {

    return <div className={s.wrapper}>
        <CardList />
    </div>;
}

export default CardListWrapper;