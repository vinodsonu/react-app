/*global React*/
/*global ReactDOM*/
import React from 'react';
import './preview5.css';
import Navbar from './navbar.js';
class DisableOrEnable extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isDisableButtonChecked: false,
            showMessage: '',
        }

    }
    handleChange = (event) => {
        {
            event.target.checked ?
                this.setState({
                    isDisableButtonChecked: true,
                    showMessage: 'i am disabled'
                }) : this.setState({
                    isDisableButtonChecked: false,
                    showMessage: '',
                })

        }

    }
    handleSubmit = (event) => {
        event.preventDefault(); {
            this.state.isDisableButtonChecked === false &&
                this.setState({
                    showMessage: "hi i am enabled",
                })
        }

    }
    render() {
        return (
            <div>
            <Navbar title="DisableOrEnable"/>
            <form onSubmit={this.handleSubmit}>
            <div className="form5">
            <label className="label">
            <input type="checkbox"
            value="Disabled"
            onChange={this.handleChange}
            />
            {"Disabled"}
            </label>
            <button className="submit-btn"  onClick={this} disabled={this.state.isDisableButtonChecked?true:false} onClick={this.handleSubmit}>click me</button>
            </div>
            <div className="message-div">{this.state.showMessage}</div>
            </form>
            </div>
        )
    }
}
export default DisableOrEnable
