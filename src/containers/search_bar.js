import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            term: ''
        }
    }
 
    handleChange(event) {
        this.setState({
            term: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        
        this.props.fetchWeather(this.state.term);
        this.setState({
            term: ''
        })
    }

    render() {
        return (
            <form onSubmit = {this.handleSubmit.bind(this)} className="input-group">
                <input 
                    placeholder = "Procurar ...."
                    className= "form-control"        
                    value={this.state.term}
                    onChange= {this.handleChange.bind(this)} />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        )
    }
}

function mapDispatchToProps(dispatch) {
    //gives access to the function inside the props
    return bindActionCreators( {fetchWeather} , dispatch);
}

//stateToProps
export default connect(null, mapDispatchToProps)(SearchBar)