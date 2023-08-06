import React, { useEffect, useState } from 'react'
import { useCart } from 'react-use-cart'

function Cart() {
    const { 
        isEmpty,
        totalItems,
        totalUniqueItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
        items
    } = useCart()

    console.log(items);
    if (isEmpty) return <h1 className='text-center'>Cart is empty</h1>

    return (
        <section className='py-4 container'>
            <div className='row justify-content-center'>
                <div className='col-12'>
                    <h5>Cart({totalUniqueItems}) total Items: ({totalItems})</h5>
                    <table className='table table-light table-hover m-0'>
                        <thead>
                            <tr>
                                <th scope="col">Product Details</th>
                                <th scope="col">Title</th>
                                <th scope="col">Price</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Total Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {items?.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>
                                            <img src={item.img} style={{ height: '6rem' }} />
                                        </td>
                                        <td>{item.title}</td>
                                        <td>{item.price}</td>
                                        <td className='d-flex'>
                                            <button onClick={() => updateItemQuantity(item.id, item.quantity - 1)} className='btn btn-primary'>-</button>
                                            <h4 className='mx-1'>{item.quantity}</h4>
                                            <button className='btn btn-primary' onClick={() => updateItemQuantity(item.id, item.quantity + 1)} >+</button>
                                        </td>
                                        <td>
                                            ${item.price * item.quantity}
                                        </td>
                                        <td>
                                            <button onClick={() => removeItem(item.id)} className='btn btn-danger ms-2'>Remove Item</button>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
                <div className='col-auto ms-auto'>
                    <h2>Total Price : $ {cartTotal}</h2>
                </div>
                <div className='col-auto' >
                    <button className='btn btn-danger m-2' onClick={emptyCart}>Clear Cart</button>
                    <button className='btn btn-primary'>Checkout</button>
                </div>
            </div>
        </section>
    )
}

export default Cart