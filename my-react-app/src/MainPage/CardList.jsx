import * as React from "react";
import * as ReactDom from "react-dom";
import s from './productsList.module.css';
import { Products } from "../products";

// function endPrice() {
//     let endDiscount = { ProductItem.price } * { ProductItem.discount }
//     return endDiscount;
// }

const CardList = (props) => {

    //endPrice = { ProductItem.price } * { ProductItem.discount }

    const ProductListItems = Products.map(ProductItem =>
        <li key={ProductItem.id} >
            <div className={s.item_card}>
                <img className={s.item_img} src={ProductItem.imageURL} alt={ProductItem.title} />
                <div className={s.price_counting} >
                    <span className={s.price}> {ProductItem.discount === 1 ? ProductItem.price : ProductItem.price * ProductItem.discount} </span>
                    {ProductItem.discount < 1 && <span className={s.old_price}>{ProductItem.price}</span>}
                </div>

                <h3 className={s.product_title}>{ProductItem.title}</h3>
            </div>
        </li >);

    return <ul className={s.list}>{ProductListItems}</ul>;
}

export default CardList;











