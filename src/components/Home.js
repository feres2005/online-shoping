
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addToCart } from './actions/cartActions'
import '../index.css'
import Item16 from '../images/16.jpg'

 class Home extends Component{
    
    handleClick = (id)=>{
        this.props.addToCart(id); 
        // const item = this.props.itemList.find(item=> item.id=== id)
        // axios.post("http://localhost:8000/product/add",item)
    }

    render(){
        let itemList = this.props.items.map(item=>{
            return(
                <div className="card" key={item.id}>
                        <div className="card-image">
                            <img className="img-height" src={item.img } alt={item.title}/>
                            <span className="card-title">{item.title}</span>
                            <span to="/" className="btn-floating halfway-fab waves-effect waves-light red" onClick={()=>{this.handleClick(item.id)}}><div className="material-icons"><img className="add-img" src={Item16}/></div></span>
                        </div>

                        <div className="card-content">
                            <p className="cart-dec">{item.desc}</p>
                            <p className='cart-price'><b>Price: {item.price}$</b></p>
                        </div>
                 </div>
            )
        })

        return(
           
            <div className="container">
                 <center><h1 className="home_title">21st-SHOP</h1></center>
                <h3 className="cart-order">Our items:</h3>
                <div className="box">
                    {itemList}
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    return {
      items: state.items
    }
  }
const mapDispatchToProps= (dispatch)=>{
    
    return{
        addToCart: (id)=>{dispatch(addToCart(id))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)