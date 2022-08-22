import React,{useState} from 'react';
import {useCart} from "react-use-cart";
import Offcanvas from "react-bootstrap/Offcanvas";
import ".//App.css";
import { FiPlus } from "react-icons/fi";
import { FiMinus } from "react-icons/fi";




const Cart = (props) => {
    const [show, setShow] = useState(true);
    const handleClose = () => setShow(false);
    
    const {isEmpty, totaluniqueItems, items, totalItems, cartTotal,updateItemQuantity, removeItem, emtyCart} = useCart();
    const sendCommande=()=>{
        props.setItems(items)
        props.setTotal(cartTotal)
       props.setToggleCheckOut(!props.toggleCheckOut)
           
        
            
        
    }
    if (isEmpty) return <h1 className='text-center'>Your Card is Empty!</h1>
    return (
        <Offcanvas
        show={show}
        onHide={handleClose}
        scroll={true}
        backdrop={false}
        placement={"end"}
        id="sidebar"
        >
            
        <Offcanvas.Header id='card-header' closeButton>
          <Offcanvas.Title id="basket">Basket</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body  >
       
        <section className='py-2 container'>
        <div className='row justify-content-center'>
            <div className='col-12'>
                {/* <h5>Cart({totaluniqueItems}) total Item: ({totalItems})</h5> */}
                <table className='table table-light table-hover m-0'>
                    <tbody>
                    {items.map((item, i)=>(
                        <tr key={i}>
                            <td>{item.quantity}</td>
                            <td>
                            <img src={item.imageProduct} style={{height: '3rem', width: '3rem'}} />
                            </td>
                            <td>{item.titleProduct}</td>
                            <td id='price'>
                                {item.priceProduct}
                            
                            <td >
                                <button className='btn btn-outline-primary ms-2' onClick={()=> updateItemQuantity( item.idProduct, item.quantity - 1 ) }><FiMinus/></button>
                                </td>
                                <td>
                                <button className='btn btn-outline-primary ms-2' onClick={()=> updateItemQuantity( item.idProduct, item.quantity + 1 ) }><FiPlus/></button>
                                {/* <button className='btn btn-danger ms-2' onClick={() => removeItem(item.id)}>Remove Item</button> */}
                            </td>
                            </td>
                        </tr>
                    ))}
                    </tbody>

                </table>

            </div>
            
               <div className='col-auto '> 
            <h6 >Total</h6>
               </div>
               
               <div className='col-auto ms-auto'>
                <h6 >  {cartTotal} $</h6>
            </div>
           
            <div>
                <button className='btn btn-primary checkout' onClick={sendCommande}>Checkout ({cartTotal} $)</button>
            </div>
           
            
        </div>
        </section>
        </Offcanvas.Body>
        </Offcanvas>
    );
}

export default Cart;
