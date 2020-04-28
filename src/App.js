import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {

  state = {
    pizzaForForm: {
      id: null,
      topping: "None",
      size: "Small",
      vegetarian: false
    },
    pizzaToUpdate: { id: null }
  }

  getPizzaForForm = (pizza) => {
    this.setState({
      pizzaForForm: {id: pizza.id,
        topping: pizza.topping,
        size: pizza.size,
        vegetarian: pizza.vegetarian}
    })
  }

  updatePizza = (pizza) => {
    fetch(`http://localhost:3500/pizzas/${pizza.id}`,{
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(pizza)
    })
    .then(resp => resp.json())
    .then(data => {
      this.setState({
        pizzaToUpdate: data
      })
    })

    
  }

  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm pizza={this.state.pizzaForForm} updatePizza={this.updatePizza}/>
        <PizzaList clickHandler={this.getPizzaForForm} pizzaToUpdate={this.state.pizzaToUpdate}/>
      </Fragment>
    );
  }
}

export default App;
