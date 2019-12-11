import React, { Component } from "react"
import Pizza from "../components/Pizza"

class PizzaList extends Component {
  render() {
    // console.log(this.props.editPizzaHandler)
    let pizza = this.props.allPizzas.map(pizza => {
      return (
        <Pizza
          key={pizza.id}
          pizza={pizza}
          editPizzaHandler={this.props.editPizzaHandler}
        />
      )
    })
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
            pizza
            //render Pizza here
          }
        </tbody>
      </table>
    )
  }
}

export default PizzaList
