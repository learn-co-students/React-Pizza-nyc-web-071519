import React, { Component } from 'react';
import Pizza from '../components/Pizza'
class PizzaList extends Component {

  state ={
    pizzaList: []
  }

  componentDidMount(){
    fetch('http://localhost:3500/pizzas')
    .then(resp => resp.json())
    .then(data => {
      this.setState({
        pizzaList: data
      })
    })
  }

  componentDidUpdate(prevProps){
    if (this.props !== prevProps)
    fetch('http://localhost:3500/pizzas')
    .then(resp => resp.json())
    .then(data => {
      this.setState({
        pizzaList: data
      })
    })
  }
  

  render() {
    const pizzaComponents = this.state.pizzaList.map(pizza => <Pizza key={pizza.id} pizza={pizza} clickHandler={this.props.clickHandler}/>)
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Topping</th>
            <th scope="col">Size</th>
            <th scope="col">Vegetarian?</th>
            <th scope="col">Edit</th>
          </tr>
        </thead>
        <tbody>
          {
            pizzaComponents
          }
        </tbody>
      </table>
    );
  }

}

export default PizzaList;
