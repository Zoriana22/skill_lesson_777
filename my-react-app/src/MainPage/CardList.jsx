import * as React from "react";
import * as ReactDom from "react-dom";
import s from './productsList.module.css';
import camera_photo from '../assets/camera_photo.jpg';
import { Products } from "../products";



const CardList = (props) => {

    const ProductListItems = Products.map(ProductItem =>
        <li key={ProductItem.id}>

            <img src={require('./assets/camera_photo.jpg')} alt={ProductItem.title} />
            <span className={s.price}>{ProductItem.price}</span>
            <h3 className={s.product_title}>{ProductItem.title}</h3>

        </li>);

    return <ul>{ProductListItems}</ul>;
}

export default CardList;











