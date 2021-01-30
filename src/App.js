import './App.css';
import Navbar from './components/navbar.jsx';
import Counters from './components/counters.jsx';
import React, { Component } from 'react';

class App extends Component {
    state = { 
        products : [
            {id: 1, value: 0},
            {id: 2, value: 0},
            {id: 3, value: 0},
            {id: 4, value: 0},
            {id: 5, value: 0}
        ],
        total: 0,
        selectedNo: 0

     }

     handleReset = () => {
        const products = this.state.products.map(c => {c.value=0; return c;})
        this.setState({products});
        this.setState({total:0});
        this.setState({selectedNo:0});
     }
     incrementCount= counter => {
         const products = [...this.state.products]
         const index = products.indexOf(counter)
         products[index] = {...counter}
         products[index].value++;
         this.setState({products})
     }
     handleDecrement = counter => {
         const products = [...this.state.products]
         const index = products.indexOf(counter)
         products[index] = {...counter}
         if(products[index].value>0){
            products[index].value--;
            this.setState({products})
         }
         
     }
     handleDelete = counter => {
        this.setState({total:this.state.total-counter.value});
         if(counter.value>0){
          this.setState({selectedNo:this.state.selectedNo-1});
         }
         const products = this.state.products.filter(c => c.id !== counter.id);
         this.setState({products});
     }
     handleTotalInc = () => {
        this.setState({total:this.state.total+1});
     }
     handleTotalDec = counter => {
       if(counter.value>0){
        this.setState({total:this.state.total-1});
       }
     }
     handleSelectedInc = counter => {
        if(counter.value<1){
          this.setState({selectedNo:this.state.selectedNo+1});
        }
     }
     handleSelectedDec = counter => {
       if(counter.value===1){
          this.setState({selectedNo:this.state.selectedNo-1});
         }
     }

  render() {
    return (
      <React.Fragment>
        <Navbar selectedNo = {this.state.selectedNo}/>
        <div className="ml-3">
          <Counters 
          counter = {this.state.products}
          total = {this.state.total}
          onReset = {this.handleReset}
          onIncrement = {this.incrementCount}
          onDecrement = {this.handleDecrement}
          onDelete = {this.handleDelete}
          onTotalInc = {this.handleTotalInc}
          onTotalDec = {this.handleTotalDec}
          onselectedInc = {this.handleSelectedInc}
          onselectedDec = {this.handleSelectedDec}
          />
        </div>
      </React.Fragment>
    );
  };
};

export default App;
