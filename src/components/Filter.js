import React , {Component} from 'react'
export default class Filter extends Component{
    render(){
        return(
            <div className="filter">
                <div className="filter-result">products{this.props.count}</div>
                <div className="filter-sort">order{" "}
                <select value={this.props.sort} onChange={this.props.sortProducts}>
                     <option >LATEST</option> 
                     <option value="lowest">LOWEST</option>
                     <option value="highest">HIGHEST</option> 
                     </select>
                     </div>
                <div className="filter-size">Filter{" "} <select value={this.props.size} onChange={this.props.filterProducts} >
                
                    <option value=" ">ALL</option>
                    <option value="XS">XS</option>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>   
                        </select></div>
            
            
            
        </div>
        )
    }
}