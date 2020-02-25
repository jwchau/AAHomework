import React from 'react';

import GiphysIndex from './giphys_index';


class giphySearch extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            query: props.query,
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    
    handleChange(e) {
        e.preventDefault();
        this.setState({query: e.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.fetchSearchGiphys(this.state.query);
    }

    render() {
        let gifs = <h3> no gifs yet </h3>;
        if (this.props.giphys.length != 0) {
            gifs = <GiphysIndex gifs={this.props.giphys}/>;
        }
        return(
            <div className="search">
                <form onSubmit={this.handleSubmit} className="search-form">
                    <label>Search for: 
                        <input onChange={this.handleChange} type="text" value={this.state.query}/>
                    </label>
                    <input type="submit" value="&#128269;"/>
                </form>
                {gifs}
            </div>
        );
    }
}

export default giphySearch;