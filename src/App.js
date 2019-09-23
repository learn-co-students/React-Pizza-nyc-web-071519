import React, { Component, Fragment } from "react";
import Header from "./components/Header";
import PizzaForm from "./components/PizzaForm";
import PizzaList from "./containers/PizzaList";
class App extends Component {
  state = {
    pizzaCollection: [],
    pizzaToEdit: ""
  };

  componentDidMount() {
    fetch("http://localhost:3000/pizzas")
      .then(resp => resp.json())
      .then(data => {
        let zas = [...data];
        this.setState({
          pizzaCollection: zas
        });
      });
  }

  editPizza = pizza => {
    this.setState({
      pizzaToEdit: { ...pizza }
    });
  };

  submitPizza = pizza => {
    let updatedPizzaIndex = this.state.pizzaCollection.findIndex(
      za => za.id === pizza.id
    );

    console.log(updatedPizzaIndex);

    let updatedObj = {
      id: pizza.id,
      topping: pizza.topping,
      size: pizza.size,
      vegetarian: pizza.vegetarian
    };
    fetch(`http://localhost:3000/pizzas/${pizza.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(updatedObj)
    })
      .then(res => res.json())
      .then(res => {
        //copy the array so we're not directly mutating
        let newArray = [...this.state.pizzaCollection];
        // find the object in question
        newArray[updatedPizzaIndex] = res;
        // replace that old object with the obj from the response
        this.setState({
          pizzaCollection: newArray
        });
      });
  };

  render() {
    return (
      <Fragment>
        <Header />
        <PizzaForm
          submitPizza={this.submitPizza}
          pizza={this.state.pizzaToEdit}
        />
        <PizzaList
          editPizza={this.editPizza}
          pizza={this.state.pizzaCollection}
        />
      </Fragment>
    );
  }
}

export default App;
