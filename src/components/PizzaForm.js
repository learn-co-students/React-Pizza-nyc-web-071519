import React from "react";

class PizzaForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      topping: "",
      size: "",
      vegetarian: ""
    };
  }

  handleChange = e => {
    if (e.target.name === "vegetarian") {
      let value = e.target.value === "vegetarian" ? true : false;
      this.setState({
        vegetarian: !this.state.vegetarian
      });
    } else {
      this.setState({
        [e.target.name]: e.target.value
      });
    }
  };

  componentDidUpdate(prevProps) {
    if (this.props.pizza !== prevProps.pizza) {
      this.setState({
        id: this.props.pizza.id,
        topping: this.props.pizza.topping,
        size: this.props.pizza.size,
        vegetarian: this.props.pizza.vegetarian
      });
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.submitPizza(this.state);
  };

  render() {
    return (
      <div className="form-row">
        {/* <form onSubmit={this.handleSubmit}> */}
        <div className="col-5">
          <input
            name="topping"
            type="text"
            className="form-control"
            placeholder="Pizza Topping"
            value={this.state.topping}
            onChange={this.handleChange}
          />
        </div>
        <div className="col">
          <select
            name="size"
            onChange={this.handleChange}
            value={this.state.size}
            className="form-control"
          >
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input
              onChange={this.handleChange}
              name="vegetarian"
              className="form-check-input"
              type="radio"
              value="Vegetarian"
              checked={this.state.vegetarian}
            />
            <label className="form-check-label">Vegetarian</label>
          </div>
          <div className="form-check">
            <input
              onChange={this.handleChange}
              className="form-check-input"
              name="vegetarian"
              type="radio"
              value="Not Vegetarian"
              checked={!this.state.vegetarian}
            />
            <label className="form-check-label">Not Vegetarian</label>
          </div>
        </div>
        <div className="col">
          <button
            onSubmit={this.submitPizza}
            type="submit"
            className="btn btn-success"
            onClick={this.handleSubmit}
          >
            Submit
          </button>
        </div>
        {/* </form> */}
      </div>
    );
  }
}

export default PizzaForm;
