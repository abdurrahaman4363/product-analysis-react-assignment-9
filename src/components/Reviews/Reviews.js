import React from 'react';
import useReviews from '../../hooks/useReviews';
import './Reviews.css'

const Reviews = () => {
    const [data,setData]=useReviews()
    // console.log(data)
    return (
        <div>
           <div className='review-container'>
           {
                data.map(cart=><div className='cart-container'>
                    <img src={cart.picture} alt=""></img>
                    <p>Name: {cart.name}</p>
                    <p>Comment: {cart.comment}</p>
                    <p>Rating: {cart.rating}</p>
                </div>)
            }
           </div>
        </div>
    );
};

export default Reviews;