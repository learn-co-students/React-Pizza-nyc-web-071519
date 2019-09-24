import React from "react"

class PizzaForm extends React.Component{

  state = {
    id: this.props.pizza.id,
    topping: this.props.pizza.topping,
    size: this.props.pizza.size,
    vegetarian: this.props.pizza.vegetarian
  }

  componentDidUpdate(prevProps) {
      if (this.props.pizza.id !== prevProps.pizza.id) {
        this.setState({
          id: this.props.pizza.id,
          topping: this.props.pizza.topping,
          size: this.props.pizza.size,
          vegetarian: this.props.pizza.vegetarian
        })
    }
  }

  changeHandler = (e) => {
    if (e.target.name === 'vegetarian'){
      let value = (e.target.value === 'Vegetarian' ? true : false)
      this.setState({
        vegetarian: value
      })
    } else {
      this.setState({
        [e.target.name]: e.target.value
      })
    }
  }

  submitHandler = () => {
    this.props.updatePizza(this.state)
  }

  render(){
    return(
      <div className="form-row">
        <div className="col-5">
            <input type="text" className="form-control" name='topping' onChange={this.changeHandler} placeholder="Pizza Topping" value={
                this.state.topping
              }/>
        </div>
        <div className="col">
          <select value={this.state.size} name='size' onChange={this.changeHandler} className="form-control">
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input className="form-check-input" type="radio" name='vegetarian' onChange={this.changeHandler} value="Vegetarian" checked={this.state.vegetarian}/>
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name='vegetarian' onChange={this.changeHandler} value="Not Vegetarian" checked={!this.state.vegetarian}/>
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" onClick={this.submitHandler}>Submit</button>
        </div>
      </div>

    )
  }
  
}

export default PizzaForm
