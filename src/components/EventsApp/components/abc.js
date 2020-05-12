import React from 'react'
class NameForm extends React.Component {
    constructor() {
        super()
        this.state = { value: '' }
    }
    handleChange = (event) => {
        this.setState({ value: event.target.value })
        console.log(this.state.value)
    }
    handleSubmit = (event) => {
        event.preventDefault();
        console.log(event)
        console.log(event.target.value)
    }
    render() {
        return (
            <form  onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
      </form>
        );
    }
}
export default NameForm
