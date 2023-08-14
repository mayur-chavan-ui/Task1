import React from 'react'
import { useCart } from 'react-use-cart'
import classes from '../cart.module.css'

function ItemDescription({ item }) {

    const { addItem, updateItemQuantity } = useCart()

    return (
        <>
            <div className="card col-3 mx-5" style={{ width: "350px", height: "400px" }}>
                <div className="card-body">
                    <div>
                        <img
                            src={item.img}
                            className={classes.imageCard} />
                    </div>
                    <h4 className='my-3 text-center'>{item.title}</h4>
                    <h6 className=' text-center'>Price: ${item.price}</h6>
                    <h6 className='d-flex justify-content-center'>
                        <button onClick={() => updateItemQuantity(item.id, item.quantity - 1)} className='btn btn-warning'>-</button>
                        <h4 className='mx-1'>{item.quantity}</h4>
                        <button className='btn btn-warning' onClick={() => updateItemQuantity(item.id, item.quantity + 1)} >+</button>
                    </h6>
                    <h6>
                        ${item.price * item.quantity}
                    </h6>
                </div>
                <div className='card-footer d-flex justify-content-center'>
                    <button className="btn btn-success px-5" onClick={() => { addItem(item) }}>Add to bag</button>
                </div>
            </div>
        </>
    )
}

export default ItemDescription