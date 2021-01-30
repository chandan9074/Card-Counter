import React, { Component } from 'react';
import Counter from './counter';
class Counters extends Component {
     styles = {
         display: "block",  
     }
     

    render() { 
        const {onReset, counter, onIncrement, onDecrement, onDelete, onTotalDec, onTotalInc, onselectedInc, onselectedDec} = this.props;
        return ( 
            <div>
                <button onClick={onReset} className="btn btn-info m-2">Reset</button>
        <span style={{fontSize: 20}} className="badge badge-pill badge-primary m-2 badge-lg">Cart {this.props.total}</span>
                {counter.map(product => <div style={{display:"block"}}>
                    <Counter 
                    key={product.id} 
                    counter = {product}
                    onIncrement = {onIncrement}
                    onDecrement = {onDecrement}
                    onDelete = {onDelete}
                    onTotalInc = {onTotalInc}
                    onTotalDec = {onTotalDec}
                    onselectedInc = {onselectedInc}
                    onselectedDec = {onselectedDec}
                    />
                    </div>)}
                
            </div>
        
         );
         console.log(this.state.nice)
    }
}
 
export default Counters;