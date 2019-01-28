import React from 'react';

class SearchInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange (event) {
        let inputValue = event.target.value;
        this.setState({ inputValue: event.target.value });
    }

    handleClick(event){
        this.props.getValueFromInput(this.state.inputValue.replace(' ', '+'));
        this.setState({ inputValue: '' });
        event.preventDefault();
    }

    render() {
        return (
            <form className="search-wrapper">
                <input  type="text"
                        value={ this.state.inputValue }
                        onChange={ this.handleChange }/>
                <button onClick={ this.handleClick }>Search gifs</button>
            </form>
        )
    }

};

export default SearchInput;