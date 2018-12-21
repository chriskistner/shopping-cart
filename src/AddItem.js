import React, { Component } from 'react'

class addItem extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    handleChange = (event) => {
        this.setState({
          [event.target.name]: event.target.value
        })
      }

      handleSubmit = (event) => {
        event.preventDefault()
        const found = this.props.products.find(e => parseInt(this.state.itemSelect) === e.id)
        const item = {
          product: {
              id: found.id,
              name: found.name,
              priceInCents: found.priceInCents
          },
          quantity: this.state.itemQuantity || 1
        }

        this.props.addToCart(item)

        this.setState({
            itemSelect: 'Select a Product...',
            itemQuantity: ''
        })
      }

    createOption(thing) {
        return (
            <option value={thing.id}>{thing.name}</option>
        )
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
            <label for="itemSelect">Select Item</label>
            <select name="itemSelect" id="itemSelect" class="form-control" value={this.state.itemSelect} onChange={this.handleChange}>
            <option selected disabled>Select a Product...</option>
            {
                this.props.products.map( product => this.createOption(product))
            }
            </select>
            <label for="inputQuantity">Enter Quantity</label>
            <input id = "itemQuantity" type="text" name="itemQuantity" value={this.state.itemQuantity} onChange={this.handleChange} />
            <input type="submit" value="Add Item" />
          </form>
        )
    }
}

export default addItem