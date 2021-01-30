import React, { Component } from 'react';

class Counter extends Component {
    // state = {
    //     count: this.props.value,
    //     total: 0
    //     // tags:["chandan", "kumar", "das  "]
    // };
    render() { 
        console.log(this.props)
        return (
         <React.Fragment>
             <h4>{this.props.x}</h4>
            <span className={this.badgeClassMethod()}>{this.newCount()}</span>
            <button onClick={() => {this.props.onIncrement(this.props.counter); this.props.onTotalInc(this.props.counter); this.props.onselectedInc(this.props.counter)}} className="btn btn-success btn-sm">increment</button>
            <button onClick={() => {this.props.onDecrement(this.props.counter); this.props.onTotalDec(this.props.counter); this.props.onselectedDec(this.props.counter)}} className="btn btn-danger m-2">Decrement</button>
            <button onClick={() => this.props.onDelete(this.props.counter)}  className="btn btn-warning btn-lg m-2">Delete</button>
            {/* {this.renderList()} */}
            {/* {this.state.tags.length === 0 && "nice"} */}
         </React.Fragment>
        );
    }
    badgeClassMethod() {
        let classes = "badge m-2 badge-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }

    newCount(){
        const {value} = this.props.counter;
        return value === 0 ? "Zero" : value;
    }
    // incrementCount = () => {
    //     this.setState({count: this.state.count + 1 })
    // }

    incrementDelete = () => {
        if(this.props.counter.value>0){
            const {value} = this.props.counter;
            this.setState({value: this.props.counter.value - 1})
        }
    }

    // passData = () => this.incrementCount({id: this.state.count})

    // renderList(){
    //     if (this.state.tags.length === 0) {
    //         return <p>There are no tags</p>
    //     }
    //     else{
    //         return <ul>{ this.state.tags.map(tag => <li key={tag}>{tag}</li>) }</ul> 
    //     }
    // }
}
 
export default Counter;