import React, {Component} from 'react';

export default class Cart extends Component {
    render() {
        const {cartItems} =this.props;
        return(
            <div>
                {cartItems.length ===0 ? (<div className="cart cart-header">cart is empty</div>)
                :(<div className="cart cart-header">you have {cartItems.length} inthem  {' '}</div>)
                };
                   <div>
                <div className='cart'>
                <ul className='cart-items'>
                    {cartItems.map(item =>(
                        <li key={item._id}>
                            <img src={item.image} alt={item.title}></img>
                            <div>{item.title}</div>
                            <div className='right'>
                                {item.price}x{item.count}
                            <button className="button" onClick={()=>this.props.removeFromCart(item)}>Remove</button></div>
                        </li>
                    ))}
                    </ul></div>
                    {cartItems.length!==0 &&(
            <div className='cart'>
            <div className='total'>
                <div>
                    Total:{" "}
                    {cartItems.reduce((a,c) => a + c.count*c.price,0)}
                </div>
                <button className="button-primary">Procced in $</button>
            </div>
        </div>

                    )}
                 </div>
            </div>
         
        );
    }
}

 