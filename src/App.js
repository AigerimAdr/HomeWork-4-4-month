import React from "react";
import "./FormRegister.css"

export default class FormRegister extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            number: "",
            email: "",
        }
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state.name, this.state.number, this.state.email)
    };

    render() {
        return(
            <div className="form-container">
            <form onSubmit={this.handleSubmit} className="form-sumbit">
                <input
                    type="text"
                    name="name"
                    value={this.state.name}
                    onChange={this.handleChange}
                    placeholder="Full Name"
                    className="input-field"
                />
                <input
                    type="text"
                    name="number"
                    value={this.state.number}
                    onChange={this.handleChange}
                    placeholder="Phone number"
                    className="input-field"
                />
                <input
                    type="email"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                    placeholder="Email"
                    className="input-field"
                />
                <button type="submit" className="submit-button">Submit</button>
            </form>
        </div>
        )
    }
}