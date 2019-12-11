import React from "react"

class PizzaForm extends React.Component {
  state = {
    id: "",
    topping: this.props.editPizza.topping,
    size: "",
    vegetarian: ""
  }

  changeHandler = e => {
    console.log("changin", e.target)
    this.setState({ [e.target.name]: e.target.value })
  }

  submitHandler = e => {
    e.preventDefault()
    this.props.submitHandler(this.state)
    this.setState({ id: "", topping: "", size: "", vegetarian: "" })
  }

  render() {
    console.log(this.props)

    return (
      <div className="form-row">
        <div className="col-5">
          <input
            name="topping"
            type="text"
            className="form-control"
            placeholder="Pizza Topping"
            value={this.state.topping}
            onChange={this.changeHandler}
          />
        </div>
        <div className="col">
          <select
            name="size"
            value={this.state.size}
            className="form-control"
            onChange={this.changeHandler}
          >
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input
              name="vegetarian"
              className="form-check-input"
              type="radio"
              value="Vegetarian"
              checked={this.state.vegetarian ? true : null}
            />
            <label className="form-check-label">Vegetarian</label>
          </div>
          <div className="form-check">
            <input
              name="vegetarian"
              className="form-check-input"
              type="radio"
              value="Not Vegetarian"
              checked={this.state.vegetarian ? true : null}
            />
            <label className="form-check-label">Not Vegetarian</label>
          </div>
        </div>
        <div className="col">
          <button
            type="submit"
            className="btn btn-success"
            onClick={this.submitHandler}
          >
            Submit
          </button>
        </div>
      </div>
    )
  }
}

export default PizzaForm
