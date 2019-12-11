import React, { Component, Fragment } from "react"
import Header from "./components/Header"
import PizzaForm from "./components/PizzaForm"
import PizzaList from "./containers/PizzaList"
class App extends Component {
  state = {
    allPizzas: [],
    editPizza: ""
  }

  componentDidMount() {
    fetch("http://localhost:3000/pizzas")
      .then(resp => resp.json())
      .then(data => {
        this.setState({ allPizzas: data })
      })
  }

  editPizzaHandler = (e, pizzaObj) => {
    // console.log("PIZZA TOPPING", pizzaObj)
    // console.log(e.target.value)
    this.setState({ editPizza: { ...pizzaObj } })
  }

  submitHandler = pizzaObj => {
    this.setState({ allPizzas: [pizzaObj, ...this.state.allPizzas] })
  }

  render() {
    console.log(this.state.defaultForm)
    return (
      <Fragment>
        <Header />
        <PizzaForm
          editPizza={this.state.editPizza}
          submitHandler={this.submitHandler}
        />
        <PizzaList
          allPizzas={this.state.allPizzas}
          editPizzaHandler={this.editPizzaHandler}
        />
      </Fragment>
    )
  }
}

export default App
