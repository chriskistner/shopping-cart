import React, { Component } from 'react'

class addItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            newItem: [],

        }
    }

    createOption(thing) {
        console.log(thing)
        return (
            <option>{thing.name}</option>
        )
    }


    render() {
        return (
            <form onSubmit={this.handleSubmit}>
            <label for="itemSelect">Select Item</label>
            <select id="itemSelect" class="form-control">
            <option selected disabled>Select a Product...</option>
            {
                this.props.products.map( product => this.createOption(product))
            }
            </select>
            <label for="inputQuantity">Enter Quantity</label>
            <input id = "itemQuantity" type="text" name="newItem" value={this.state.newTodo} onChange={this.handleChange} />
            <input type="submit" value="Add Item" />
          </form>
        )
    }

}

export default addItem