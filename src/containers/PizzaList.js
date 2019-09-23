import React, { Component } from "react";
import Pizza from "../components/Pizza";
class PizzaList extends Component {
  render() {
    let renderZas = this.props.pizza.map(pizzaObj => {
      return (
        <Pizza
          editPizza={this.props.editPizza}
          key={pizzaObj.id}
          pizza={pizzaObj}
        />
      );
    });

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
        <tbody>{renderZas}</tbody>
      </table>
    );
  }
}

export default PizzaList;
