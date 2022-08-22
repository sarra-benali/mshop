import React from 'react'
import {useCart} from "react-use-cart"
const Itemcard = (props) => {
  const {addItem} = useCart();
  props.item.id=props.item.idProduct
  props.item.price=props.item.priceProduct
  return (
    <div className='col-11 col-md-6 col-lg-3 mx-0 mb-4'>
        <div className="card p-0 overflow-hidden h-100 shadow">
            <img src={props.img} className="card-img-top image-fluid"/>
            <div className="card-body">
                <h5 className='card-title'>{props.title}</h5>
                <p className='card-text'>{props.price}</p>
                <button className="btn btn-success" onClick={() => addItem(props.item)}>Add to cart</button>
            </div>
    
        </div>
    </div>
  )
}

export default Itemcard;